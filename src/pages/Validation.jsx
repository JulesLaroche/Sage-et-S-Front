import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import PageIllustration from '../partials/PageIllustration';
import Cookies from '../partials/cookies';
import Footer from '../partials/Footer';
import { fr } from 'date-fns/locale';

function Validation() {
  const [userCredits, setUserCredits] = useState(0); // State pour stocker les crédits de l'utilisateur connecté
  const [userUpdate, setUserUpdate] = useState(null); // State pour stocker la date de mise à jour des crédits
  const loggedUserId = parseInt(localStorage.getItem('id'));

  useEffect(() => {
    // Effect pour récupérer les crédits de l'utilisateur connecté depuis le backend
    fetch(`http://localhost:3001/credits/${loggedUserId}`)
      .then((response) => response.json())
      .then((data) => {
        // L'API renvoie un tableau de résultats, nous récupérons le premier élément (s'il existe) qui contient le montant des crédits
        const credits = data.length > 0 ? data[0].amount : 0;
        setUserCredits(credits);

        // Récupérer la date de mise à jour des crédits depuis l'API
        const updateDate = data.length > 0 ? new Date(data[0].updated_at) : null;
        setUserUpdate(updateDate);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des crédits:', error);
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
                <h1 className="h1">Valider votre service</h1>
              </div>
              <div className="flex-1 p:2 sm:p-6 flex flex-col h-screen">
                <div className="space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                  <p className="text-justify h4 mb-2 pb-12 first-letter:text-2.5xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:float-left">
                    Explorez notre système de crédits : une monnaie virtuelle pour accéder à nos services et profiter des conseils avisés de nos experts bienveillants. Chaque action positive vous rapporte des crédits, ouvrant les portes d'expériences uniques avec notre communauté intergénérationnelle. Bienvenue dans notre univers d'entraide et de connexions !
                  </p>
                </div>
                {/* Affichage des crédits de l'utilisateur */}
                <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
                  <a className="block w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <span className="text-7xl mb-4" role="img" aria-label="Coeur">
                      ❤️
                    </span>
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Crédits disponibles: {userCredits}</h5>
                    {userUpdate && (
                      <p className="font-normal text-xl text-gray-700 dark:text-gray-400">Mise à jour au: {formatDistanceToNow(userUpdate, { locale: fr, addSuffix: true })}</p>
                    )}
                  </a>
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

export default Validation;
