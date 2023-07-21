import React from 'react';
import PageIllustration from '../partials/PageIllustration';
import Cookies from '../partials/cookies';
import Footer from '../partials/Footer';

function Charte() {
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
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"><b>Charte d'utilisation</b></h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                <br /><br />

                <b>Bienvenue sur notre plateforme Sages & S !</b> Nous sommes ravis de vous accueillir et souhaitons vous offrir une expérience agréable et sécurisée lors de votre navigation sur notre site. Afin de garantir une utilisation respectueuse et conforme aux normes du web, veuillez prendre en compte les règles suivantes :<br /><br />

                <b>1. Respect de la vie privée :</b> Nous accordons une grande importance à la protection de vos données personnelles. Ainsi, nous vous invitons à consulter notre politique de confidentialité pour comprendre comment nous collectons, utilisons et protégeons vos informations.<br /><br />

                <b>2. Utilisation responsable :</b> Nous vous encourageons à utiliser notre plateforme de manière responsable et bienveillante envers les autres utilisateurs. Toute forme de contenu illégal, abusif, discriminatoire, obscène, ou portant atteinte aux droits d'autrui ne sera pas tolérée.<br /><br />

                <b>3. Propriété intellectuelle :</b> Les contenus publiés sur notre site, y compris les textes, images, logos, vidéos, etc., sont protégés par des droits de propriété intellectuelle. Vous n'êtes pas autorisé à copier, reproduire ou utiliser ces contenus sans autorisation préalable.<br /><br />

                <b>4. Communication via le chat :</b> Notre plateforme dispose d'un système de chat pour faciliter les échanges entre utilisateurs. Nous vous rappelons d'utiliser ce chat de manière respectueuse et professionnelle.<br /><br />

                <b>5. Respect des lois et réglementations :</b> Vous devez respecter les lois et réglementations en vigueur dans votre pays ou région lorsque vous utilisez notre site. Toute activité illégale est strictement prohibée.<br /><br />

                <b>6. Signalement des abus :</b> Si vous remarquez un comportement inapproprié, une violation des règles ou toute autre activité suspecte sur notre plateforme, nous vous encourageons à nous le signaler immédiatement.<br /><br />

                <b>7. Sécurité du compte :</b> Assurez-vous de garder vos identifiants de connexion en sécurité et ne partagez pas votre compte avec d'autres personnes. Nous ne vous demanderons jamais vos informations de connexion par e-mail ou par le chat.<br /><br />

                <b>8. Liens externes :</b> Notre plateforme peut contenir des liens vers d'autres sites web. Nous ne sommes pas responsables du contenu ou de la sécurité de ces sites externes. Nous vous conseillons de vérifier les politiques de confidentialité et les conditions d'utilisation de ces sites.<br /><br />

                En respectant ces règles d'utilisation, vous contribuez à maintenir une communauté positive et sécurisée sur notre plateforme. Nous nous réservons le droit de supprimer tout contenu ou compte qui enfreint cette charte ou qui porte préjudice à notre site.<br /><br />

                En cas de non-respect de cette charte, des mesures appropriées seront prises, y compris la désactivation de votre compte ou le signalement aux autorités compétentes si nécessaire.<br /><br />

                Nous vous remercions de votre compréhension et de votre coopération. Si vous avez des questions concernant notre charte d'utilisation, n'hésitez pas à nous contacter.<br /><br />

                <b>Dernière mise à jour :</b> 21/07/2023<br /><br />

                Merci de votre confiance et bonne utilisation de notre plateforme !

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

export default Charte;
