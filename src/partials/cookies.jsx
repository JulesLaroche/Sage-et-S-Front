import React, { useState, useEffect } from 'react';

function Cookies() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Vérifie si l'utilisateur a déjà accepté les cookies dans le localStorage
        const cookieAccepted = localStorage.getItem('cookie_accepted');
        setShowBanner(!cookieAccepted); // Affiche la bannière si l'information n'est pas présente dans le localStorage
    }, []);

    const handleAcceptCookies = () => {
        // Stocke l'acceptation des cookies dans le localStorage
        localStorage.setItem('cookie_accepted', 'true');
        setShowBanner(false); // Cache la bannière après l'acceptation
        // Vous pouvez également ajouter d'autres logiques ou actions à effectuer après que l'utilisateur a accepté les cookies.
    };

    return (
        <>
            {showBanner && (
                <div
                    x-data="{ open: false }"
                    x-init="() => setTimeout(() => open = true, 500)"
                    className="py-6 flex flex-col justify-center sm:py-12"
                >
                    <div
                        x-show="open"
                        x-transition:enter-start="opacity-0 scale-90"
                        x-transition:enter="transition duration-200 transform ease"
                        x-transition:leave="transition duration-200 transform ease"
                        x-transition:leave-end="opacity-0 scale-90"
                        className="max-w-screen-lg mx-auto fixed bg-gray-200 inset-x-5 p-5 bottom-40 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between"
                    >
                        <div className="w-full">
                            Ce site utilise des cookies pour vous garantir la meilleure expérience sur notre site.{' '}
                            <button className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none" onClick={() => { window.location.href = '/politique'; }}>
                                Lire plus
                            </button>
                        </div>
                        <div className="flex gap-4 items-center flex-shrink-0">
                            <button
                                className="text-indigo-600 focus:outline-none hover:underline"
                                onClick={() => {
                                    alert("Vous devez accepter les cookies pour profiter de nos services.");
                                }}
                            >
                                Je n'accepte pas
                            </button>
                            <button
                                className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                                onClick={handleAcceptCookies}
                            >
                                J'accepte
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cookies;
