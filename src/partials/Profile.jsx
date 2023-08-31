import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Profile() {

    const navigate = useNavigate();
    const handleEditProfile = () => {
        // Rediriger vers la page /profile
        navigate('/compte');
    };

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [img_name, setImageName] = useState("");
    const id = localStorage.getItem("id");
    const cookies = new Cookies();
    const handleDeleteAccount = () => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ?')) {
            fetch(`http://localhost:3001/users/${id}`, {
                credentials: "include",
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
                .then(response => {
                    if (response.ok) {
                        // Le compte a été supprimé avec succès
                        console.log("Compte supprimé avec succès");

                        // Supprimer l'ID de l'utilisateur du local storage
                        localStorage.removeItem("id");

                        // Rafraîchir la page
                        window.location.reload();
                        // Rediriger ou effectuer d'autres actions après la suppression réussie
                        navigate('/'); // Rediriger vers la page d'accueil par exemple
                    } else {
                        // La suppression du compte a échoué
                        console.log("Erreur lors de la suppression du compte");
                        // Gérer l'erreur ou afficher un message d'erreur à l'utilisateur
                    }
                })
                .catch(error => {
                    console.error('Erreur :', error);
                    // Gérer l'erreur ou afficher un message d'erreur à l'utilisateur
                });
        }
    };

    // Ajoutez la fonction pour gérer le changement de fichier sélectionné
    const handleFileChange = (event) => {
        console.log(event.target.files);
        setImageName(event.target.files[0]);
    };


    useEffect(() => {
        const token = cookies.get('token');
        console.log(token);

        fetch(`http://localhost:3001/users/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include'
        })
            .then(response => response.json())
            .then((data) => {
                const { firstname, lastname, address, postal_code, city, category, content, img_name } = data;
                setFirstName(firstname);
                setLastName(lastname);
                setAddress(address);
                setPostalCode(postal_code);
                setCity(city);
                setCategory(category);
                setContent(content);
                setImageName(img_name);
            })
            .catch(error => {
                console.error('Erreur :', error);
            });
    }, [id]);
    const token = cookies.get('token');
    const handleSubmit = (e) => {
        e.preventDefault();


        const updateUserData = {
            firstname,
            lastname,
            address,
            postal_code: postalCode,
            city,
            category,
            content,
            img_name,
        };



        // Envoyer la photo de profil au serveur
        const formData = new FormData();
        formData.append("file", img_name);

        fetch(`http://localhost:3001/upload-profile-photo`, {
            method: "POST",
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
                fetch(`http://localhost:3001/users/${id}`, {
                    credentials: "include",
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify(updateUserData),
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log("Données utilisateur mises à jour avec succès");
                            // Rediriger ou effectuer d'autres actions après la mise à jour réussie
                            window.location.href = '/compte';
                        }
                    })
                    .catch((error) => console.error(error));
            })
            .catch((error) => console.error(error));
    };
    return (

        <div className="relative pt-20 pb-10 md:pb-1">
            <div className="container mx-auto">
                <div className="inputs w-full max-w-2xl p-6 mx-auto">

                    <form className="mt-6 " id='form' onSubmit={handleSubmit}>
                        <div className='flex flex-wrap -mx-3 mb-6'>


                            <div className="personal w-full ">
                                <h2 className="text-2xl text-gray-900">Informations personnelles: <span className="font-light text-gray-500">{category.charAt(0).toUpperCase() + category.slice(1)}</span> </h2>
                                <div className="flex items-center justify-between mt-4 border-t border-gray-400 pt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Prénom</label>
                                        <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Nom</label>
                                        <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <div className=" border-t border-gray-400 pt-4">
                                        <div className='mb-6'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Adresse</label>
                                            <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required value={address} onChange={(e) => setAddress(e.target.value)} />

                                        </div>
                                        <div className="flex items-center gap-6 justify-between mt-4">
                                            <div className='w-full md:w-1/2 mb-6'>
                                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Code Postal</label>
                                                <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />

                                            </div>
                                            <div className='w-full md:w-1/2 mb-6'>
                                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Ville</label>
                                                <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required value={city} onChange={(e) => setCity(e.target.value)} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Décrivez vous !</label>
                                    <textarea className='bg-gray-100 rounded-md  leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' required value={content} onChange={(e) => setContent(e.target.value)}></textarea>

                                </div>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Photo de profil</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">

                                    <div className="space-y-1 text-center">
                                        <img
                                            src={`http://localhost:3001/user_profile_photos/${img_name}`}
                                            alt="Profile Image"
                                            className="h-20 w-20 rounded-full mx-auto object-cover"
                                        />
                                        <div className="flex text-sm text-gray-600">
                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-200 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span className="">Télécharger une photo</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={handleFileChange}
                                                />
                                            </label>
                                        </div>
                                        <p className="text-xs text-black">PNG, JPG, up to 10MB</p>
                                    </div>
                                </div>
                                <div className="mt-5 flex justify-between ">
                                    <button
                                        className="appearance-none bg-red-500 text-white px-2 py-1 shadow-sm rounded-md"
                                        onClick={handleDeleteAccount}
                                    >
                                        Supprimer mon compte
                                    </button>
                                    <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit" >Sauvegarder</button>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
