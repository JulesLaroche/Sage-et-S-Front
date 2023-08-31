import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageIllustration from '../partials/PageIllustration';
import Cookie from '../partials/cookie';
import Footer from '../partials/Footer';

function SignIn() {
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();

    let body = {
      email: form.email,
      password: form.password
    };

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        credentials: 'include', // Inclure les cookies dans la requête
      });

      console.log("test front 1");
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('id', data.userId);
        // Rediriger l'utilisateur vers la page d'accueil après la connexion
        window.location.href = '/';
      } else {
        console.log("test front 2");
        console.log('Identifiants invalides');
        setErrorMessage('Utilisateur ou mot de passe invalide');
      }
    } catch (error) {
      console.error(error);
    }
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

        <Cookie />
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;