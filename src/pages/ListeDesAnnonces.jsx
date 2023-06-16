import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function ListeDesAnnonces() {
  const [annonces, setAnnonces] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('id');
    if (!userId) {
      navigate('/signup');
      return;
    }

    fetch('http://localhost:3001/service/annonces', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAnnonces(data);
        const userIds = data.map((annonce) => annonce.user_id);
        fetch('http://localhost:3001/users?userIds=' + userIds.join(','), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((userData) => {
            setUsers(userData);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, []);

  const getUserFirstname = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.firstname : '';
  };

  const getUserImgName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.img_name : '';
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

        <section className='relative pt-32 pb-10 md:pt-40 md:pb-1'>
          <div className='max-w-5xl mx-auto pb-8 md:pb-8'>
            <div className="py-12 md:py-8">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 mb-4">Liste des annonces</h1>
              </div>
              <body className="antialiased  text-gray-900 font-sans p-6  ">
                <div className="my-2 flex sm:flex-row flex-col">
                  <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative">
                      <select
                        className="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                      </select>
                      <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <select
                        className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                        <option>All</option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                      <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="block relative">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                        <path
                          d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                        </path>
                      </svg>
                    </span>
                    <input placeholder="Search"
                      className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                  </div>
                </div>
                <div className="container space-y-3">
                  {annonces.map((annonce) => (
                    <div key={annonce.id}>
                      <Link to={`/annonce/${annonce.id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img srcSet={`http://localhost:3001/annonce_photos/${annonce.img_name}`} alt="Profile Image" className="object-cover w-full  rounded-lg  md:h-auto md:w-48 " />
                        <div className='flex flex-col items-center md:flex-row gap-2'>
                          <div className="flex flex-col justify-between p-4 leading-normal">
                            <h4 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{annonce.title}</h4>
                            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Description: {annonce.description}</h5>
                            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Type d'annonce: {annonce.type}</h5>

                            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Catégorie: {annonce.category}</h5>
                            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Adresse: {annonce.postal_code}{annonce.city}</h5>
                            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Disponibilité: {annonce.disponibilite}</h5>

                            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Tarif: {annonce.price} €</h5>
                            <div className="flex items-center mb-4">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Posté par {getUserFirstname(annonce.user_id)} </h5>
                              <img
                                src={`http://localhost:3001/user_profile_photos/${getUserImgName(annonce.user_id)}`}
                                alt="Profile Image"
                                className="object-cover w-12 h-12 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                      {/* {userId == annonce.user_id && (
                        <a href={`http://localhost:5173/modifier-annonces?id=${annonce.id}`} className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Modifier l'annonce</a>
                      )} */}
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
