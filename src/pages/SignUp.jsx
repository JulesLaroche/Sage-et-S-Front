import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';



function SignUp() {
  const [form, setForm] = useState({})




  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  let errorMessage = "";
  

  const register = async (e) => { 
    e.preventDefault(); 
    let passwd = "";
    if(form.check == false) return errorMessage = "Vous devez cocher les confitions d'utilisation."
    if (form.password1 == form.password2) {
      passwd = form.password1;
    } else return errorMessage = "Veuillez mettre les mêmes mots de passes !";
    let body = {
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      category: form.category,
      password: passwd
    }

    fetch(`http://localhost:3001/users`, {
      mode: 'cors',
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(body)
    }).then(response => {
      if (response.ok) {
        console.log("new user created successfully");
        window.location.href = '/signin';
      }
    })
    .catch(error => console.error(error));
    
  }


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
                <h1 className="h1">Bienvenue parmis nous. Enregistrez-vous !</h1>
                <span className='text-center h4 text-red-500 font-bold'>{errorMessage}</span>
              </div>
              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={event => register(event)}>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">

                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="prenom">Prénom<span className="text-red-600">*</span></label>
                      <input id="full-name" type="text" className="form-input w-full text-gray-600" placeholder="Votre prénom" required name="firstname" onChange={handleChange} />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="nom">Nom <span className="text-red-600">*</span></label>
                      <input id="nom" type="text" className="form-input w-full text-gray-600" placeholder="Votre nom" required name="lastname" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="category">Vous êtes: <span className="text-red-600">*</span></label>
                      <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-600 shadow-inner px-4 py-2 pr-8 " required name="category" onChange={handleChange}>
                                            <option value="">Choisir...</option>
                                            <option value="Apprenti">Apprenti en demande de services</option>
                                            <option value="Sage">Sage pour partager mon savoir</option>
                                        </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-600" placeholder="Votre mail" required name="email" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="password">Mot de passe <span className="text-red-600">*</span></label>
                      <input id="password1" type="password" className="form-input w-full text-gray-600" placeholder="Votre mot de passe" required name="password1" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="password">Confirmer votre mot de passe <span className="text-red-600">*</span></label>
                      <input id="password2" type="password" className="form-input w-full text-gray-600" placeholder="Votre mot de passe" required name="password2" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    <input required type="checkbox" className='mr-1' name="" id="" />
                    J'accepte les conditions de Sage & S <Link to="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button type="submit"  className="btn  text-white bg-purple-600 hover:bg-purple-700 w-full">
                        S'enregistrer
                      </button>
                    </div>
                  </div>
                </form>

              </div>


            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;