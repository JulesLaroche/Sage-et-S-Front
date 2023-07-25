import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import PageIllustration from '../partials/PageIllustration';
import Cookies from '../partials/cookies';
import Footer from '../partials/Footer';
import { fr } from 'date-fns/locale';

function Messagerie() {
  const [conversations, setConversations] = useState([]);
  const loggedUserId = parseInt(localStorage.getItem('id'));

  useEffect(() => {
    fetch('http://localhost:3001/chat')
      .then((response) => response.json())
      .then((data) => {
        // Group messages by creator_id
        const groupedConversations = data.reduce((groups, conversation) => {
          const key = conversation.creator_id;
          if (!groups[key]) {
            groups[key] = [];
          }
          groups[key].push(conversation);
          return groups;
        }, {});

        // Get the conversation between the logged-in user and each creator
        const filteredConversations = Object.keys(groupedConversations).map((creatorId) => {
          const messages = groupedConversations[creatorId];
          const conversation = messages.find((message) => message.user_id === loggedUserId);
          const lastMessage = messages[messages.length - 1]; // Get the last message of the conversation
          return {
            id: conversation.id,
            user_id: loggedUserId,
            creator_id: parseInt(creatorId),
            creator_firstname: '', // We'll fetch this later
            lastMessageDate: lastMessage.created_at,
            lastMessagePreview: lastMessage.message,
          };
        });

        setConversations(filteredConversations);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des conversations:', error);
      });
  }, [loggedUserId]);

  const fetchCreatorFirstnames = async (creatorIds) => {
    try {
      const promises = creatorIds.map((creatorId) => fetch(`http://localhost:3001/users/${creatorId}`).then((response) => response.json()));
      const firstnames = await Promise.all(promises);
      return firstnames;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return [];
    }
  };

  useEffect(() => {
    if (conversations.length > 0) {
      const creatorIds = conversations.map((conversation) => conversation.creator_id);
      fetchCreatorFirstnames(creatorIds)
        .then((firstnames) => {
          const updatedConversations = conversations.map((conversation, index) => ({
            ...conversation,
            creator_firstname: firstnames[index].firstname,
          }));
          setConversations(updatedConversations);
        })
        .catch((error) => {
          console.error('Error fetching creator firstnames:', error);
        });
    }
  }, [conversations]);

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
                    <Link
                      key={conversation.id}
                      to={`/chat/${conversation.creator_id}`}
                      className="block w-full bg-white border border-gray-200 rounded-lg shadow p-4 hover:bg-gray-50 transition duration-300 ease-in-out"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold text-gray-900">Vous avez parlé à {conversation.creator_firstname}</span>
                        {/* Display the formatted date of the last message */}
                        <span className="text-gray-500 text-sm">
                        {formatDistanceToNow(new Date(conversation.lastMessageDate), { locale: fr, addSuffix: true })}

                        </span>
                      </div>
                      <p className="text-sm text-gray-700 truncate">Le dernier message envoyé est: {conversation.lastMessagePreview}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cookies />
      </main>
      <Footer />
    </div>
  );
}

export default Messagerie;
