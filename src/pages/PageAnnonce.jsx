import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function Annonce() {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem('id');

  const handleDiscuterClick = () => {
    navigate(`/chat/${user.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/service/annonces/${id}`);
        if (response.ok) {
          const data = await response.json();
          setAnnonce(data);

          // Fetch user data
          const userResponse = await fetch(`http://localhost:3001/users/${data.user_id}`);
          if (userResponse.ok) {
            const userData = await userResponse.json();
            setUser(userData);
          } else {
            setUser(null);
          }
        } else {
          navigate('/404')
        }
      } catch (error) {
        console.error('Erreur :', error);
      }
    };

    fetchData();
  }, [id]);

  if (!annonce || !user) {
    return <div>Loading...</div>;
  }

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

        <section className="relative pt-32 pb-10 md:pt-40 md:pb-1">
          <div className="max-w-5xl mx-auto pb-8 md:pb-8">
            <div className="py-12 md:py-8">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 mb-4">{annonce.title}</h1>
              </div>
              <div className="antialiased text-gray-900 font-sans p-6">
                <div className="container space-y-3">
                  <div key={annonce.id}>
                    <h2 className="h2 mb-4">Description de l'annonce: {annonce.description}</h2>
                    <h2 className="h3 mb-4">Catégorie: {annonce.category}</h2>
                    <h2 className="h3 mb-4">Adresse: {`${annonce.address} ${annonce.postal_code} ${annonce.city}`}</h2>
                    <h2 className="h3 mb-4">Disponibilité: {annonce.disponibilite}</h2>
                    <h2 className="h3 mb-4">Type de l'annonce: {annonce.type}</h2>
                    <h2 className="h3 mb-4">Tarif: {annonce.price}€</h2>
                    <img
                      srcSet={`http://localhost:3001/annonce_photos/${annonce.img_name}`}
                      alt="Profile Image"
                      className="object-cover w-full rounded-lg md:h-auto"
                    />
                    <br /><br />

                    <div className="flex items-center mb-4">
                      <h2 className="h3 mr-2">Posté par : {user.firstname}</h2>
                      <img
                        src={`http://localhost:3001/user_profile_photos/${user.img_name}`}
                        alt="Profile Image"
                        className="object-cover w-12 h-12 rounded-full"
                      />
                    </div>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded'
                      type='button'
                      onClick={handleDiscuterClick}
                    >
                      Discuter avec <span>{user.firstname}</span>
                    </button>

                    {/* {userId === annonce.user_id && (
                      <a
                        href={`http://localhost:5173/modifier-annonces?id=${annonce.id}`}
                        className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
                      >
                        Modifier l'annonce
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}

export default Annonce;
