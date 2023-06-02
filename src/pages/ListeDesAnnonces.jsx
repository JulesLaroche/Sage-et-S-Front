import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function ListeDesAnnonces() {
  const [annonces, setAnnonces] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem('id'); // Récupérer l'ID de l'utilisateur connecté
  useEffect(() => {

    
    fetch('http://localhost:3001/service/annonces', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAnnonces(data);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      {/* ... */}

      {/* Page content */}
      <main className="grow">
        {/* Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className='relative pt-32 pb-10 md:pt-40 md:pb-1'>
          <div className='max-w-5xl mx-auto pb-8 md:pb-8'>
            <div className="py-12 md:py-8">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 mb-4">Liste des annonces</h1>
              </div>
              <body class="antialiased  text-gray-900 font-sans p-6  ">
                <div class="container space-y-3">
                  {annonces.map((annonce) => (
                    <div key={annonce.id}>
                      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img srcSet={`http://localhost:3001/annonce_photos/${annonce.img_name}`} alt="Profile Image" className="object-cover w-full  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
                        <div className='flex flex-col items-center md:flex-row gap-2'>
                          <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{annonce.title}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{annonce.description}</p>
                            <p class="text-sm">{annonce.category}</p>
                            <div class="mt-3 flex items-center">
                              <span class="text-sm font-semibold">Prix</span>&nbsp;<span class="font-bold text-xl">{annonce.price}</span>&nbsp;<span class="text-sm font-semibold">€</span>
                            </div>
                          </div>
                          <div class="p-4 border-t border-b text-xs text-gray-700">
                            <span class="flex items-center mb-1">
                              <i class="far fa-clock fa-fw mr-2 text-gray-900">{annonce.type} </i>
                            </span>
                            <span class="flex items-center mb-1">
                              <i class="far fa-clock fa-fw mr-2 text-gray-900">{annonce.disponibilite}</i>
                            </span>
                            <span class="flex items-center">
                              <i class="far fa-address-card fa-fw text-gray-900 mr-2">{annonce.address}{annonce.postal_code}{annonce.city}</i>
                            </span>
                            {userId == annonce.user_id && (
                              <a href={`http://localhost:5173/modifier-annonces?id=${annonce.id}`} className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Modifier l'annonce</a>
                            )}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </body>
            </div>
          </div>
        </section>
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}

export default ListeDesAnnonces;
