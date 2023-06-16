import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Formulaire() {


  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [disponibilite, setDisponibilite] = useState('');
  const [address, setAddress] = useState('');
  const [postal_code, setPostal_code] = useState('');
  const [city, setCity] = useState('');
  const [img_name, setImageName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer l'ID utilisateur à partir du localStorage
    const id = localStorage.getItem('id');

    // Faire une requête pour obtenir la catégorie de l'utilisateur en utilisant l'ID
    fetch(`http://localhost:3001/users/${id}`, {
      credentials: 'include',
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const { category } = data;

        setCategory(category);

      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si l'ID utilisateur est présent dans le local storage
    const userId = localStorage.getItem('id');
    if (!userId) {
      // Rediriger vers la page d'inscription si l'ID utilisateur n'est pas trouvé
      navigate('/signup');
      return;
    }

    // Créer un objet FormData pour envoyer les données avec la photo
    const formData = new FormData();
    formData.append('file', img_name);

    fetch('http://localhost:3001/upload-annonce-photo', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const { photoFilename } = data;
        console.log(photoFilename);

        const body = {
          title,
          type:category == 'apprenti' ? 'apprenti' : 'sage',
          category,
          description,
          price,
          disponibilite,
          address,
          postal_code,
          city,
          user_id: userId,
          img_name: photoFilename,
        };

        fetch('http://localhost:3001/service', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
          .then((response) => {
            if (response.ok) {
              console.log('Annonce déposée avec succès');
              // Effectuer des actions supplémentaires après le dépôt de l'annonce réussi
              window.location.href = '/mes-annonces';
            }
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  // Ajoutez la fonction pour gérer le changement de fichier sélectionné
  const handleFileChange = (event) => {
    console.log(event.target.files);
    setImageName(event.target.files[0]);
  };

  return (
    <div className="relative pb-10 md:pb-1">
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl p-6 mx-auto">
          <form className="" onSubmit={handleSubmit}>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className="personal w-full">
                <div className="flex items-center justify-between mt-4 border-t border-gray-400 pt-4"></div>
                <div className='w-full md:w-full px-3 mb-6'>
                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Titre de l'annonce</label>
                  <input
                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2'>Type d'annonce:</label>
                  <div className="flex-shrink w-full inline-block relative">
                    <h1 className="font-bold text-red-600 ">
                      {category === "apprenti"
                        ? "Annonce pour demander un service"
                        : "Annonce pour proposer un service"}
                    </h1>
                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600"></div>
                  </div>

                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3">
                    Catégories:
                  </label>
                  <div className="flex-shrink w-full inline-block relative">

                    <div className="pointer-events-none absolute top-0  right-0 flex items-center px-2 text-gray-600"></div>
                  </div>
                  <div className="flex-shrink w-full inline-block relative">
                    <select
                      className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>Choisir...</option>
                      <option>Services à la personne</option>
                      <option>Cuisine</option>
                      <option>Travaux</option>
                      <option>Cours et formations</option>
                      <option>Enfants</option>
                      <option>Bricolage et déco </option>
                      <option>Mécanique</option>
                      <option>Photo et Audio-vidéo</option>
                      <option>Jardinage</option>
                      <option>Administration et gestion</option>
                      <option>Transport</option>
                      <option>Apprendre à lire et ecrire</option>
                    </select>
                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600"></div>
                  </div>
                </div>
                <div className='w-full md:w-full px-3 mb-6'>
                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Décrivez l'annonce</label>
                  <textarea
                    className='bg-gray-100 rounded-md  leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <div className='mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Prix</label>
                    <input
                      className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                      type='text'
                      placeholder='Donner un tarif pour la prestation'
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className='mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Disponibilité</label>
                    <input
                      className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                      type='text'
                      placeholder='Préciser vos dates de disponibilités ou un planning'
                      required
                      value={disponibilite}
                      onChange={(e) => setDisponibilite(e.target.value)}
                    />
                  </div>
                </div>
                <div className='w-full md:w-full px-3 mb-6'>
                  <div className=" border-t border-gray-400 pt-4">
                    <div className='mb-6'>
                      <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Adresse</label>
                      <input
                        className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                        type='text'
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-6 justify-between mt-4">
                      <div className='w-full md:w-1/2 mb-6'>
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Code Postal</label>
                        <input
                          className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                          type='text'
                          required
                          value={postal_code}
                          onChange={(e) => setPostal_code(e.target.value)}
                        />
                      </div>
                      <div className='w-full md:w-1/2 mb-6'>
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Ville</label>
                        <input
                          className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                          type='text'
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1 flex  justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-black" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-200 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span className="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange} // Utilisez la fonction handleFileChange pour gérer le changement de fichier
                        />
                      </label>
                      <p className="pl-1 text-black">or drag and drop</p>
                    </div>
                    <p className="text-xs text-black">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex justify-end">
                  <button
                    className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
