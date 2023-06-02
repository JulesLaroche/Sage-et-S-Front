
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';




function ModifAnnonce() {


  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [disponibilite, setDisponibilite] = useState('');
  const [address, setAddress] = useState('');
  const [postal_code, setPostal_code] = useState('');
  const [city, setCity] = useState('');
  const [img_name, setImageName] = useState("");

  const navigate = useNavigate();
  // const { id } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  // Ajoutez la fonction pour gérer le changement de fichier sélectionné
  const handleFileChange = (event) => {
    console.log(event.target.files);
    setImageName(event.target.files[0]);
  };


  useEffect(() => {
    // Vérifier si l'ID utilisateur est présent dans le local storage
    const userId = localStorage.getItem('id');
    if (!userId) {
      // Rediriger vers la page d'inscription si l'ID utilisateur n'est pas trouvé
      navigate('/signup');
      return;
    }

    // Récupérer les informations de l'annonce depuis l'API en utilisant l'ID
    fetch(`http://localhost:3001/service/${id}`)
      .then(response => response.json())
      .then(data => {
        // Mettre à jour les valeurs des champs de formulaire avec les informations récupérées
        setTitle(data.title);
        setType(data.type);
        setCategory(data.category);
        setDescription(data.description);
        setPrice(data.price);
        setDisponibilite(data.disponibilite);
        setAddress(data.address);
        setPostal_code(data.postal_code);
        setCity(data.city);
        setImageName(data.img_name);
      })
      .catch(error => console.error(error));
  }, [id, navigate]);





  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si l'ID utilisateur est présent dans le local storage
    const userId = localStorage.getItem('id');
    if (!userId) {
      // Rediriger vers la page d'inscription si l'ID utilisateur n'est pas trouvé
      navigate('/signup');
      return;
    }

    const updateUserData = {
      title,
      type,
      category,
      description,
      price,
      disponibilite,
      address,
      postal_code,
      city,
      user_id: userId,
      img_name,
    };

    // Envoyer la photo de profil au serveur
    const formData = new FormData();
    formData.append('file', img_name);
    fetch(`http://localhost:3001/upload-annonce-photo`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const { photoFilename } = data;
        console.log(photoFilename);

        // Mettre à jour les données utilisateur avec le nom de fichier de la photo de profil
        updateUserData.img_name = photoFilename;
        console.log(updateUserData.img_name)
        console.log(updateUserData);
        fetch(`http://localhost:3001/service/${id}`, {
          credentials: 'include',
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateUserData),
        })
          .then((response) => {
            if (response.ok) {
              console.log('Données utilisateur mises à jour avec succès');
              //  Rediriger ou effectuer d'autres actions après la mise à jour réussie
              window.location.href = '/mes-annonces';
            }
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };


  return (
    <div>
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
                <h1 className="h1">Modifier votre annonce</h1>
              </div>

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
                              <select
                                className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                              >
                                <option>Choisir...</option>
                                <option>Démandeur - Apprentis</option>
                                <option>Proposition de service - Sage</option>
                              </select>
                              <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600"></div>
                            </div>

                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2'>Catégories:</label>
                            <div className="flex-shrink w-full inline-block relative">
                              <select
                                className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                              >
                                <option>Choisir...</option>
                                <option>Jardinage</option>
                                <option>Cuisine</option>
                                <option>Cuisine</option>
                                <option>Cuisine</option>
                                <option>Cuisine</option>
                                <option>Cuisine</option>
                                <option>Cuisine</option>
                                <option>Cuisine</option>
                                <option>Cuisine</option>
                                <option>Cuisine</option>
                                <option>Cuisine</option>
                              </select>
                              <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600"></div>
                            </div>

                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2'>Description de l'annonce</label>
                            <textarea
                              className='resize-none appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                              required
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            ></textarea>

                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2'>Prix</label>
                            <input
                              className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                              type='number'
                              required
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />

                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2'>Disponibilité</label>
                            <input
                              className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                              type='text'
                              required
                              value={disponibilite}
                              onChange={(e) => setDisponibilite(e.target.value)}
                            />

                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2'>Adresse</label>
                            <input
                              className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                              type='text'
                              required
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />

                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2'>Code postal</label>
                            <input
                              className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                              type='text'
                              required
                              value={postal_code}
                              onChange={(e) => setPostalCode(e.target.value)}
                            />

                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3 mb-2'>Ville</label>
                            <input
                              className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                              type='text'
                              required
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                            <div class="mt-1 flex  justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div class="space-y-1 text-center">
                                <svg class="mx-auto h-12 w-12 text-black" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="flex text-sm text-gray-600">
                                  <label for="file-upload" class="relative cursor-pointer bg-gray-200 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span class="">Upload a file</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      class="sr-only"
                                      onChange={handleFileChange} // Utilisez la fonction handleFileChange pour gérer le changement de fichier
                                    />
                                  </label>
                                  <p class="pl-1 text-black">or drag and drop</p>
                                </div>
                                <p class="text-xs text-black">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                            <button
                              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded'
                              type='submit'
                            >
                              Mettre à jour votre annonce
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}
export default ModifAnnonce;


