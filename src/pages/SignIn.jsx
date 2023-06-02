import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';



function SignIn() {

  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const login = async (e) => {
    e.preventDefault();

    let body = {
      email: form.email,
      password: form.password
    };

    fetch('http://localhost:3001/login', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          // Vérifier la réponse de votre API et effectuer les actions nécessaires en fonction de celle-ci
          console.log(data); // Afficher la réponse pour le débogage

          // Stocker l'ID de l'utilisateur dans le stockage local
          localStorage.setItem('id', data.userId);

          // Rediriger vers la page d'accueil
          window.location.href = '/';
        } else {
          console.log('Identifiants invalides');
          setErrorMessage('Utilisateur ou mot de passe invalide');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">



      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">De retour. Connecter vous!</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={event => login(event)}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-input w-full text-gray-600" placeholder="Votre email" required name="email" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="password">Mot de passe</label>
                      <input id="password" type="password" className="form-input w-full text-gray-600" placeholder="Votre mot de passe" required name="password" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        {/* <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-400 ml-2">Gardez moi connecté</span>
                        </label> */}
                        <Link to="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Mot de passe oublié?</Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" type='submit'>Se connecter</button>
                    </div>
                  </div>
                  {errorMessage && (
                    <div className="text-red-500">{errorMessage}</div>
                  )}
                </form>
                <div className="text-gray-400 text-center mt-6">
                  Vous n'avez pas encore de compte? <Link to="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">S'enregistrer</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;