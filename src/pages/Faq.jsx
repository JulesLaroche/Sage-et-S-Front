import React from 'react';
import PageIllustration from '../partials/PageIllustration';
import Cookies from '../partials/cookies';
import Footer from '../partials/Footer';

function Faq() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
        <section className="bg-white dark:bg-gray-900 ">
          <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center mx-auto text-center">
              <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"><b>FAQ - Foire aux questions</b></h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                <br /><br />

                <b>Qu'est-ce que notre plateforme de gestion d'annonces en ligne ?</b><br /><br />
                Notre plateforme de gestion d'annonces en ligne est un espace convivial qui permet aux utilisateurs de publier et de consulter des services proposés par d'autres utilisateurs. Que vous recherchiez un professionnel pour un service spécifique ou que vous souhaitiez proposer vos compétences, notre plateforme facilite les interactions entre les utilisateurs pour répondre à leurs besoins locaux.<br /><br />

                <b>Comment puis-je publier une annonce sur la plateforme ?</b><br /><br />
                Pour publier une annonce, vous devez tout d'abord créer un compte sur notre site. Une fois connecté, vous pouvez cliquer sur "Publier une annonce" et remplir le formulaire avec les détails pertinents sur votre service. N'oubliez pas de fournir des informations claires et détaillées pour attirer les utilisateurs intéressés.<br /><br />

                <b>Est-ce que la publication d'une annonce est payante ?</b><br /><br />
                Non, la publication d'une annonce sur notre plateforme est entièrement gratuite. Nous souhaitons encourager l'échange de services au sein de notre communauté, c'est pourquoi nous ne facturons aucun frais pour la publication d'annonces.<br /><br />

                <b>Comment puis-je contacter un utilisateur concernant son annonce ?</b><br /><br />
                Si vous êtes intéressé par une annonce et que vous souhaitez contacter l'utilisateur, vous pouvez utiliser notre système de messagerie interne. Sur la page de l'annonce, vous trouverez un bouton "Contacter l'utilisateur" qui vous permettra d'envoyer un message directement à l'auteur de l'annonce.<br /><br />

                <b>Comment puis-je filtrer les annonces pour trouver ce que je cherche ?</b><br /><br />
                Pour faciliter votre recherche, nous avons mis en place des filtres pour trier les annonces par catégorie, prix, localisation, etc. Vous pouvez utiliser ces filtres sur la page d'accueil pour afficher les annonces qui correspondent le mieux à vos besoins.<br /><br />

                <b>Comment puis-je signaler une annonce inappropriée ou suspecte ?</b><br /><br />
                Si vous trouvez une annonce qui vous semble inappropriée ou suspecte, veuillez nous le signaler immédiatement en utilisant la fonction de signalement sur la page de l'annonce. Notre équipe vérifiera le signalement et prendra les mesures nécessaires si l'annonce enfreint nos règles d'utilisation.<br /><br />

                <b>Comment puis-je modifier ou supprimer mon annonce ?</b><br /><br />
                Vous pouvez modifier ou supprimer votre annonce à tout moment en accédant à votre compte et en cliquant sur "Mes annonces". Vous verrez une option pour modifier ou supprimer chaque annonce que vous avez publiée.<br /><br />

                <b>Est-ce que mon compte et mes données sont sécurisés ?</b><br /><br />
                Oui, la sécurité de nos utilisateurs est une priorité. Nous mettons en place des mesures de sécurité pour protéger vos données personnelles et assurer la confidentialité de vos informations. Assurez-vous de choisir un mot de passe fort pour votre compte et de ne jamais le partager avec d'autres personnes.<br /><br />

                <b>Si vous avez d'autres questions ou des préoccupations, n'hésitez pas à nous contacter via notre page de contact.</b> Notre équipe est là pour vous aider et vous accompagner dans l'utilisation de notre plateforme de gestion d'annonces en ligne.<br /><br />
              </p>
              <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600" onClick={() => { window.location.href = '/'; }}>
                  Retour Accueil
                </button>
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

export default Faq;
