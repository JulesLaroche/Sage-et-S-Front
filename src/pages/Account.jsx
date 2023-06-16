import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';
import MesAnnonces from '../partials/MesAnnonces';

function Account() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [imgName, setImgName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem('id'); // Récupérer l'ID à partir du local storage
    // Vérifier si l'ID utilisateur est présent dans le local storage
    const userId = localStorage.getItem('id');
    if (!userId) {
      // Rediriger vers la page d'inscription si l'ID utilisateur n'est pas trouvé
      navigate('/signup');
      return;
    }

    fetch(`http://localhost:3001/users/${id}`, {
      credentials: 'include',
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const { firstname, lastname, address, postal_code, city, category, content, img_name } = data;
        setFirstName(firstname);
        setLastName(lastname);
        setAddress(address);
        setPostalCode(postal_code);
        setCity(city);
        setCategory(category);
        setContent(content);
        setImgName(img_name);
      })
      .catch((error) => {
        console.error('Erreur :', error);
      });
  }, []);

  const handleEditProfile = () => {
    navigate('/profile');
  };

  const mesAnnonces = () => {
    navigate('/mes-annonces');
  };

  
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

        <section className='relative pt-32 md:pt-40 md:pb-1'>
          <div className='max-w-5xl mx-auto '>
            <div className="py-12 md:py-8">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1">Mon compte</h1>
              </div>

              <div className="p-16 max-w-6xl mx-auto px-4 py-4 sm:px-6 relative pt-20">
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                      <div>
                        <p className="font-bold text-gray-700 text-xl">22</p>
                        <p className="text-gray-400">Amis</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700 text-xl">10</p>
                        <p className="text-gray-400">Photos</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-700 text-xl">89</p>
                        <p className="text-gray-400">Commentaire</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                        {imgName && <img src={`http://localhost:3001/user_profile_photos/${imgName}`} alt="Profile Image" className="h-48 w-48 rounded-full" />}
                      </div>
                    </div>

                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">

                      <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" onClick={handleEditProfile}>
                        Modifier mon profil
                      </button>
                    </div>
                  </div>

                  <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-gray-700 uppercase">
                      {firstName} {lastName} <span className="font-light text-gray-500  text-red-500 font-bold">{category}</span>
                    </h1>
                    <p className="font-light text-gray-600 mt-3">
                      {address} {postalCode} {city}
                    </p>
                    {/* 
              <p className="mt-8 text-gray-500">Jardinier</p>
              <p className="mt-2 text-gray-500">Cuisinier</p> */}
                  </div>

                  <div className="mt-12 flex flex-col justify-center">
                    <p className="text-gray-600 text-center font-light lg:px-16">{content}</p>
                    {/* <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                Show more
              </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="liste-annonces">
          <MesAnnonces/>
          </div>
        </section>
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}

export default Account;
