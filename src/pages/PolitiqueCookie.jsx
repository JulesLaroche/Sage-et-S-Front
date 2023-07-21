import React from 'react';
import PageIllustration from '../partials/PageIllustration';
import Cookies from '../partials/cookies';
import Footer from '../partials/Footer';

function PolitiqueCookie() {
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
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"><b>Politique des cookies</b></h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Bienvenue sur notre plateforme <b>Sage & S</b> !
                Nous sommes heureux de vous accueillir et nous nous engageons à protéger votre vie privée et à vous offrir la meilleure expérience possible sur notre site. Cette politique de cookies explique comment nous utilisons les cookies et les technologies similaires sur notre plateforme.
                <br /><br />
                <b>Qu'est-ce qu'un cookie ?</b>
                <br /><br />
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, smartphone, tablette, etc.) lorsque vous visitez notre site. Les cookies nous aident à améliorer votre expérience en tant qu'utilisateur en nous permettant de reconnaître votre appareil lors de vos visites ultérieures. Ces cookies peuvent être temporaires (cookies de session) et disparaissent lorsque vous fermez votre navigateur, ou permanents (cookies persistants) et restent sur votre appareil pendant une période définie.
                <br /><br />
                <b>Quels types de cookies utilisons-nous et pourquoi ?</b>
                <br /><br />
                <b>Cookies Essentiels :</b> Ces cookies sont nécessaires au bon fonctionnement de notre plateforme. Ils vous permettent de vous inscrire, de vous connecter à votre compte utilisateur, et d'accéder à des fonctionnalités sécurisées. Sans ces cookies, certaines parties de notre site ne fonctionneraient pas correctement.
                <br /><br />
                <b>Cookies de Performance :</b> Nous utilisons des cookies de performance pour analyser comment vous interagissez avec notre plateforme. Ces cookies nous aident à améliorer nos services en recueillant des informations sur les pages que vous visitez le plus souvent, les erreurs éventuelles que vous rencontrez, etc.
                <br /><br />
                <b>Cookies de Fonctionnalité :</b> Ces cookies nous permettent de personnaliser votre expérience sur notre site. Ils retiennent vos préférences, telles que la langue que vous avez sélectionnée ou les informations que vous avez saisies lors de précédentes visites.
                <br /><br />
                <b>Cookies de Publicité et de Ciblage :</b> Nous utilisons également des cookies pour vous présenter des publicités ciblées susceptibles de vous intéresser en fonction de vos activités sur notre plateforme. Ces cookies sont placés par des tiers et nous permettent de suivre les clics et les interactions avec les publicités.
                <br /><br />
                <b>Chat et Services de Particulier à Particulier :</b>
                <br /><br />
                Notre plateforme comprend un chat qui permet la communication entre les utilisateurs proposant des services et ceux qui les demandent. Le chat est conçu pour faciliter la mise en relation entre les utilisateurs. Les messages envoyés via le chat peuvent être conservés pour des raisons de sécurité, de support client et d'amélioration de nos services.
                <br /><br />
                <b>Gestion des Cookies :</b>
                <br /><br />
                Lors de votre première visite sur notre site, nous vous demanderons de consentir à l'utilisation de certains cookies. Vous pouvez à tout moment gérer vos préférences en matière de cookies dans les paramètres de votre navigateur. Cependant, veuillez noter que désactiver certains cookies peut entraîner une dégradation de l'expérience utilisateur sur notre plateforme.
                <br /><br />
                <b>Sécurité et Confidentialité :</b>
                <br /><br />
                Nous prenons la sécurité de vos données très au sérieux. Vos informations personnelles sont traitées conformément à notre politique de confidentialité, que nous vous invitons également à consulter.
                <br /><br />
                Nous nous engageons à respecter vos droits en matière de confidentialité et à vous fournir les moyens de contrôler vos données personnelles.
                <br /><br />
                Nous vous remercions d'avoir pris le temps de lire notre politique de cookies. Si vous avez des questions ou des préoccupations concernant notre utilisation des cookies ou notre politique de confidentialité, n'hésitez pas à nous contacter.
                <br /><br />
                Dernière mise à jour : 21/07/2023
                <br /><br />
                Note : Cette politique de cookies est destinée à vous fournir des informations générales sur l'utilisation des cookies sur notre plateforme. Pour obtenir des informations plus détaillées sur la collecte, l'utilisation et le traitement de vos données personnelles, veuillez consulter notre politique de confidentialité.
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

export default PolitiqueCookie;
