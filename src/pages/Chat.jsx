import React, { useEffect, useState } from 'react';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';
import { useParams } from 'react-router-dom';

function Chat() {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageContent, setMessageContent] = useState('');
    const { user_id, service_id } = useParams(); // Utiliser useParams pour récupérer les paramètres d'URL
    const Id = window.localStorage.getItem('id');
    const [filteredUserMessages, setFilteredUserMessages] = useState([]);
    const [filteredCreatorMessages, setFilteredCreatorMessages] = useState([]);
    const [isServiceValidated, setIsServiceValidated] = useState(false); // New state variable
    const [validationButtonText, setValidationButtonText] = useState("Valider ce service");


    const getMessages = () => {
        fetch(`http://localhost:3001/chat/${service_id}`) // Inclure le service_id dans l'URL de la requête
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
            (message) => message.user_id === parseInt(user_id) && message.creator_id === parseInt(Id) && message.service_id === parseInt(service_id)
        );

        const filteredCreatorMessages = messages.filter(
            (message) => message.user_id === parseInt(Id) && message.creator_id === parseInt(user_id)
        );

        const sortedUserMessages = sortMessagesByDate(filteredUserMessages);
        const sortedCreatorMessages = sortMessagesByDate(filteredCreatorMessages);

        setFilteredUserMessages(sortedUserMessages);
        setFilteredCreatorMessages(sortedCreatorMessages);
    };



    useEffect(() => {
        getMessages();

        fetch(`http://localhost:3001/users/${user_id}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => {
                console.error('Erreur lors de la récupération de l\'utilisateur:', error);
            });
        const participant = user_id;
        console.log(participant);
        console.log(Id);

    }, [user_id, service_id, Id]);



    const handleMessageChange = (event) => {
        setMessageContent(event.target.value);
    };

    const handleSendMessage = () => {
        const creatorId = user_id;

        const messageData = {
            user_id: Id,
            creator_id: creatorId,

            service_id: service_id,
            message: messageContent,
            validated: false, // Set 'validated' field to false initially
        };

        fetch(`http://localhost:3001/chat/${service_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de l\'envoi du message');
                }
                // Ajout d'une condition pour traiter la réponse en tant que JSON uniquement si le statut est différent de 200 OK
                if (response.status !== 200) {
                    return response.json();
                }
                return {}; // Si le statut est 200, retourner un objet vide
            })
            .then((data) => {
                console.log('Message envoyé avec succès:', data);
                window.location.reload();
                getMessages();
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi du message:', error);
            });

        setMessageContent('');
    };






    const handleServiceValidation = () => {
        fetch(`http://localhost:3001/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: service_id,
                user_id: Id,
                participant_id: user_id, // Assuming the current user is the participant
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Service validé avec succès :', data);
                setIsServiceValidated(true); // Set the validation state to true on successful validation
                // Refresh the messages after successful validation
                getMessages();
            })
            .catch((error) => {
                console.error('Erreur lors de la validation du service :', error);
            });
    };


    useEffect(() => {
        fetch(`http://localhost:3001/validate/${service_id}`)
            .then((response) => response.json())
            .then((data) => {
                // Check if any validation entry exists for the current service
                setIsServiceValidated(data.length > 0);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération de la validation du service:', error);
            });
    }, [service_id]);








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

                            <div className="flex-1 p:2 sm:p-6  flex flex-col ">
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

                                <div className="border-t-2 border-gray-200 px-4 pt-4 sm:mb-0">
                                    <div className="relative flex">
                                        {/* <span className="absolute inset-y-0 flex items-center"> */}
                                        {/* <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                                                </svg>
                                            </button> */}
                                        {/* </span> */}
                                        <input
                                            type="text"
                                            placeholder="Ecrire votre message!"
                                            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                                            value={messageContent}
                                            onChange={handleMessageChange}
                                        />
                                        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                                            {/* <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                                </svg>
                                            </button>
                                            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                            </button>
                                            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </button> */}
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



                            <div className="flex justify-center">
                                {/* Conditionally render the button or the validation message */}
                                {!isServiceValidated ? (
                                    user && user.id !== parseInt(Id) && (
                                        <button
                                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
                                            onClick={handleServiceValidation}
                                        >
                                            Valider ce service
                                        </button>
                                    )
                                ) : (
                                    <p className="text-green-500 font-bold py-2 px-4 rounded mt-4">
                                        L'annonce est bien validée
                                    </p>
                                )}
                            </div>






                            <div id="tohide">
                                <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                                    <svg aria-hidden="true" className="w-10 h-3 mr-2 -ml-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595" /><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14" /></svg>
                                    Pay with Visa
                                </button>
                                <form>
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre adresse</label>
                                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="l'adresse du service" required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre téléphone</label>
                                        <input type="tel" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sauvegarder</button>
                                </form>
                            </div>



                        </div>

                    </div>
                </section>

            </main>


            {/*  Site footer */}
            <Footer />
        </div>
    );
}

export default Chat;