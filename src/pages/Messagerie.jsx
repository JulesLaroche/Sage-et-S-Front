import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import PageIllustration from '../partials/PageIllustration';
import Cookie from '../partials/cookie';
import Footer from '../partials/Footer';
import { fr } from 'date-fns/locale';
import Cookies from 'universal-cookie';

// ... (import statements)

function Messagerie() {
  const [conversations, setConversations] = useState([]);
  const loggedUserId = parseInt(localStorage.getItem('id'));
  const cookies = new Cookies();

  useEffect(() => {
      const token = cookies.get('token');
    // Fetch conversations data
    fetch(`http://localhost:3001/chat/user/${loggedUserId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        // Group messages by service_id
        const groupedConversations = data.reduce((groups, conversation) => {
          const key = conversation.service_id;
          if (!groups[key]) {
            groups[key] = [];
          }
          groups[key].push(conversation);
          return groups;
        }, {});

        // Get the conversation between the logged-in user and each service
        const filteredConversations = Object.keys(groupedConversations).map((serviceId) => {
          const messages = groupedConversations[serviceId];
          const lastMessage = messages[messages.length - 1]; // Get the last message of the conversation
          const participants = [...new Set(messages.map((message) => message.user_id))]; // Get unique user_ids in the conversation
          const filteredParticipants = participants.filter((participantId) => participantId !== loggedUserId); // Exclude the logged-in user from the participants

          return {
            id: parseInt(serviceId), // Assuming serviceId is a unique identifier for services
            user_id: loggedUserId,
            service_id: parseInt(serviceId),
            participants: filteredParticipants, // Store unique user_ids for the conversation (excluding the logged-in user)
            lastMessageDate: lastMessage.created_at,
            lastMessagePreview: lastMessage.message,
            messages, // Add the messages of the conversation to the new object
          };
        });

        setConversations(filteredConversations);

        // Fetch data for each service_id and update conversations with additional data
        Promise.all(
          filteredConversations.map(async (conversation) => {
            try {
              const token = cookies.get('token'); 
              const response = await fetch(`http://localhost:3001/service/annonces/${conversation.service_id}`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                credentials: 'include'
              });
              const data = await response.json();
              conversation.title = data.title;
              conversation.description = data.description;
              conversation.imageName = data.img_name;
              conversation.creator = data.user_id;

              // Fetch creator's data
              const userResponse = await fetch(`http://localhost:3001/users/${data.user_id}`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                credentials: 'include'
              });
              const userData = await userResponse.json();
              conversation.creatorFirstName = userData.firstname;
              conversation.creatorLastName = userData.lastname;

              return conversation;
            } catch (error) {
              console.error('Erreur lors de la récupération des services:', error);
              return conversation; // Return the conversation object without additional data
            }
          })
        ).then((updatedConversations) => {
          setConversations(updatedConversations);
        });
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des conversations:', error);
      });
  }, [loggedUserId]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        <section className="relative pt-32 md:pt-40 md:pb-1">
          <div className="max-w-5xl mx-auto">
            <div className="py-12 md:py-8">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1">Vos conversations</h1>
              </div>
              <div className="flex-1 p:2 sm:p-6 flex flex-col h-screen">
                <div className="space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                  {/* Render conversation cards */}
                  {conversations.map((conversation) => (
                    <div key={conversation.id}>
                      {/* Render multiple cards for each participant */}
                      {conversation.participants.map((participantId) => (
                        <Link
                          key={participantId}
                          to={`/chat/${participantId}/${conversation.service_id}`}
                          className="block w-full bg-white border border-gray-200 rounded-lg shadow p-4 hover:bg-gray-50 transition duration-300 ease-in-out"
                        >
                          {/* Utilizez les données de chaque conversation ici */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-semibold text-gray-900">
                              Annonce pour : {conversation.title}
                            </span>
                            <h2>
                              {participantId !== conversation.creator ? ( // Check if the logged-in user is not the creator
                                <>
                                  Postée par : {conversation.creatorFirstName} {conversation.creatorLastName}
                                </>
                              ) : (
                                <>
                                  Avec : {conversation.creatorFirstName} {conversation.creatorLastName}
                                </>
                              )}
                            </h2>
                            {/* Display the formatted date of the last message */}
                            <span className="text-gray-500 text-sm">
                              {formatDistanceToNow(new Date(conversation.lastMessageDate), {
                                locale: fr,
                                addSuffix: true,
                              })}
                            </span>
                          </div>
                          {/* Ajoutez l'affichage des autres informations du service ici */}
                          <p>Description : {conversation.description}</p>
                          {/* Affichez l'image si nécessaire */}
                          {/* {conversation.imageName && (
                            <img src={`http://localhost:3001/annonce_photos/${conversation.imageName}`} alt="Image du service" />
                          )} */}
                          {/* Ajoutez l'affichage des messages pour chaque conversation */}
                          <div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cookie />
      </main>
      <Footer />
    </div>
  );
}

export default Messagerie;

