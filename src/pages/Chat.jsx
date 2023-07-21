import React, { useEffect, useState } from 'react';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';
import Cookies from '../partials/cookies';


function Chat() {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageContent, setMessageContent] = useState('');
    const AnnonceCreateur = window.location.pathname.split('/').pop();
    const Id = window.localStorage.getItem('id');
    const [filteredUserMessages, setFilteredUserMessages] = useState([]);
    const [filteredCreatorMessages, setFilteredCreatorMessages] = useState([]);

    const getMessages = () => {
        fetch('http://localhost:3001/chat')
            .then((response) => response.json())
            .then((data) => {
                setMessages(data);
                filterMessages(data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des messages:', error);
            });
    };

    const sortMessagesByDate = (messages) => {
        return messages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    };

    const filterMessages = (messages) => {
        const filteredUserMessages = messages.filter(
            (message) => message.user_id === parseInt(AnnonceCreateur) && message.creator_id === parseInt(Id)
        );

        const filteredCreatorMessages = messages.filter(
            (message) => message.user_id === parseInt(Id) && message.creator_id === parseInt(AnnonceCreateur)
        );

        const sortedUserMessages = sortMessagesByDate(filteredUserMessages);
        const sortedCreatorMessages = sortMessagesByDate(filteredCreatorMessages);

        setFilteredUserMessages(sortedUserMessages);
        setFilteredCreatorMessages(sortedCreatorMessages);
    };

    useEffect(() => {
        getMessages();

        fetch(`http://localhost:3001/users/${AnnonceCreateur}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => {
                console.error('Erreur lors de la récupération de l\'utilisateur:', error);
            });
    }, [AnnonceCreateur]);

    const handleMessageChange = (event) => {
        setMessageContent(event.target.value);
    };

    const handleSendMessage = () => {
        const creatorId = AnnonceCreateur;

        const messageData = {
            user_id: Id,
            creator_id: creatorId,
            message: messageContent,
        };
        const token = localStorage.getItem('token');
        fetch('http://localhost:3001/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(messageData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de l\'envoi du message');
                }
                if (response.status === 204) {
                    return {};
                }
                return response.json();
            })
            .then((data) => {
                console.log('Message envoyé avec succès:', data);
                window.location.reload(); // Rafraîchir la page
                getMessages();
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi du message:', error);
            });

        setMessageContent('');
    };


    return (

        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Page content */}
            <main className="grow">
                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>

                <section className='relative pt-32 md:pt-40 md:pb-1'>
                    <div className='max-w-5xl mx-auto '>
                        <div className="py-12 md:py-8">
                            {/* Section header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                <h1 className="h1">Messagerie</h1>
                            </div>

                            <div className="flex-1 p:2 sm:p-6  flex flex-col h-screen">
                                <div className="flex sm:items-center  py-3 border-b-2 border-gray-200">
                                    <div className="relative flex items-center space-x-4">
                                        <div className="relative">
                                            <span className="absolute text-green-500 right-0 bottom-0">
                                                <svg width="20" height="20">
                                                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                                                </svg>
                                            </span>
                                            {user && <img src={`http://localhost:3001/user_profile_photos/${user.img_name}`} alt="Profile Image" className="w-48 h-48 rounded-full" />}
                                        </div>

                                        {user && (
                                            <div className="flex flex-col leading-tight">
                                                <div className="text-2xl mt-1 flex items-center">
                                                    <span className="text-gray-700 mr-3">{user.firstname} {user.lastname}</span>
                                                </div>
                                                <span className="text-lg text-gray-600">{user.category}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {/* <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                            </svg>
                                        </button> */}
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                                    {filteredCreatorMessages.map(message => (
                                        <div className="chat-message" key={message.id}>
                                            <div className="flex items-end justify-end">
                                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                    <div>
                                                        <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                                                            {message.message}
                                                        </span>
                                                    </div>
                                                </div>
                                                {user && (
                                                    <img
                                                        src={`http://localhost:3001/user_profile_photos/${user.img_name}`}
                                                        alt="My profile"
                                                        className="w-6 h-6 rounded-full order-2"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {filteredUserMessages.map(message => (
                                        <div className="chat-message" key={message.id}>
                                            <div className="flex items-end">
                                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                    <div>
                                                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                            {message.message}
                                                        </span>
                                                    </div>
                                                </div>
                                                {user && (
                                                    <img
                                                        src={`http://localhost:3001/user_profile_photos/${user.img_name}`}
                                                        alt="My profile"
                                                        className="w-6 h-6 rounded-full order-1"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>




                                <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                                    <div className="relative flex">

                                        <input
                                            type="text"
                                            placeholder="Ecrire votre message!"
                                            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                                            value={messageContent}
                                            onChange={handleMessageChange}
                                        />
                                        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">

                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                                                onClick={handleSendMessage}
                                            >
                                                <span className="font-bold">Envoyer votre message</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <Cookies />
            </main>


            {/*  Site footer */}
            <Footer />
        </div>
    );
}

export default Chat;