import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageIllustration from '../partials/PageIllustration';
import Cookie from '../partials/cookie';
import Footer from '../partials/Footer';
import Formulaire from '../partials/Formulaire';



function DeposerUneAnnonce() {
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'ID utilisateur est présent dans le local storage
    const userId = localStorage.getItem('id');
    if (!userId) {
      // Rediriger vers la page d'inscription si l'ID utilisateur n'est pas trouvé
      navigate('/signup');
    }
  }, []);

  return (


    <div className="flex flex-col min-h-screen overflow-hidden">



      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
        <section className='relative pt-32 pb-10 md:pt-40 md:pb-1'>
          <div className='max-w-5xl mx-auto pb-8 md:pb-8'>
            <div className="py-12 md:py-8">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1">Déposer une annonce</h1>
              </div>

              <Formulaire />

            </div>
          </div>

        </section>

        <Cookie />
      </main>


      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default DeposerUneAnnonce;