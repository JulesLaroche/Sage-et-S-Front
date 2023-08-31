import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function MesAnnonces() {
  const [annonces, setAnnonces] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [imgProfile, setImgProfile] = useState('');
  const cookies = new Cookies();

  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get('token'); 
    // Vérifier si l'ID utilisateur est présent dans le local storage
    const userId = localStorage.getItem('id');
    if (!userId) {
      // Rediriger vers la page d'inscription si l'ID utilisateur n'est pas trouvé
      navigate('/signup');
      return;
    }
    fetch(`http://localhost:3001/users/${userId}`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },

    })
      .then((response) => response.json())
      .then((data) => {
        const { firstname, img_name: imgProfile } = data;
        setFirstName(firstname);
        setImgProfile(imgProfile);
      })
      .catch((error) => {
        console.error('Erreur :', error);
      });

    fetch(`http://localhost:3001/service/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include'
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
      <main className="grow " >
        <section className="relative  pb-10  md:pb-1">
          <div className="max-w-5xl mx-auto pb-8 md:pb-8">
            <div className="py-12 md:py-8">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" >
                <h1 className="h1 mb-4">Mes annonces</h1>
              </div>
              <body className="antialiased text-gray-900 font-sans p-6">
                <div className="container space-y-3">
                  {annonces.map((annonce) => (
                    <div key={annonce.id}>

                      <a
                        href="#"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <img
                          src={`http://localhost:3001/annonce_photos/${annonce.img_name}`}
                          alt="Profile Image"
                          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        />
                        <div className="flex flex-col items-center md:flex-row gap-2">
                          <div className="flex flex-col justify-between p-4 leading-normal">

                            <div className="mb-8">
                              <p className="text-sm text-gray-600 flex items-center">
                                {annonce.type === 'apprenti'
                                  ? 'Annonce pour demander un service'
                                  : 'Annonce pour proposer un service'}
                              </p>
                              <div className="text-gray-900 font-bold text-xl mb-2">
                                {annonce.title}
                              </div>
                              <p className="text-gray-700 text-base">{annonce.category}</p>
                              <p className="text-gray-700 text-base">{annonce.description}</p>
                              <p className="text-gray-700 text-base">{annonce.disponibilite}</p>
                              <p className="text-gray-700 text-base">
                                {annonce.address}
                                {annonce.postal_code}
                                {annonce.city}
                              </p>
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Prix
                                :  {annonce.price} Eur
                              </h5>
                              <div className="flex items-center">
                                <img
                                  className="w-10 h-10 rounded-full mr-4"
                                  src={`http://localhost:3001/user_profile_photos/${imgProfile}`}
                                  alt="Avatar of Jonathan Reinink"
                                />
                                <div className="text-sm">
                                  <p className="text-gray-900 leading-none">{firstName}</p>
                                  <p className="text-gray-600">Aug 18</p>
                                  <a
                                    href={`http://localhost:5173/modifier-annonces?id=${annonce.id}`}
                                    className="text-indigo-500 hover:text-indigo-700"
                                  >
                                    Modifier
                                  </a>
                                </div>
                              </div>
                            </div>
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
    </div>
  );
}

export default MesAnnonces;
