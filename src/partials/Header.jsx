import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
function Header() {

  const [name, setName] = useState("")
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/users/${id}`, {
        credentials: "include",
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          const name = data.firstname;
          setName(name);
        })
        .catch((error) => {
          console.error("Erreur :", error);
        });
    }
  }, [id]);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [drop, toggleDrop] = useState(false);


  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const offset = 45;


  const handleDropdownToggle = () => {
    toggleDrop(!drop);
  };




  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  const handleMenuPosition = () => {
    const buttonRect = trigger.current.getBoundingClientRect();
    setMenuPosition({ top: buttonRect.bottom + offset, left: buttonRect.left });
  };

  useEffect(() => {
    handleMenuPosition();
  }, [drop]);


  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });


  const handleLogout = () => {
    // Supprimer les données de local storage
    localStorage.removeItem("id");
    // Autres actions de déconnexion si nécessaire
    // Actualiser la page
    window.location.href = 'http://localhost:5173/';

    // Rediriger vers la page de connexion ou effectuer d'autres actions après la déconnexion
  };


  const isLoggedIn = localStorage.getItem("id") ? true : false;
  let button;
  if (isLoggedIn) {
    button = (
      <>
        <div className="relative">
          <button
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleDropdownToggle}
            ref={trigger}
          >
            Bonjour {name}
            <svg
              className={`w-4 h-4 ml-2 ${drop ? "transform rotate-180" : ""}`}
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div
            className={`z-10 ${drop ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute`}
            style={{ top: menuPosition.top, left: menuPosition.left }}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="/compte" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Mon compte
                </a>
              </li>
              <li>
                <a href="/deposer-une-annonce" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Déposer une annonce
                </a>
              </li>
              <li>
                <a href="/compte#liste-annonces" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Liste de mes annonces
                </a>
              </li>
              <li>
                <a href="/messagerie" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Messagerie
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleLogout}
                >
                  Deconnexion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  } else {
    button = (
      <ul className="flex grow justify-end flex-wrap items-center" >
        <li>
          <Link to="/signin" className="font-medium text-red-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Se connecter</Link>
        </li>
        <li>
          <Link to="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">S'enregistrer</Link>
        </li>
      </ul>
    );
  }


  return (
    <header className="fixed w-full z-30 py-3 bg-white bg-opacity-80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block">
              <img className="w-20 h-20 fill-current text-purple-600" src="\src\images\logo.png" alt="" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Accueil</Link>
              </li>
              <li>
                <Link to="/comment-ca-marche" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Comment ça marche ?</Link>
              </li>
              <li>
                <Link to="/qui-sommes-nous" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Qui sommes nous ?</Link>
              </li>
              <li>
                <Link to="/liste-des-annonces" className="font-medium text-purple-800 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Liste des annonces</Link>
              </li>
            </ul>
            {button}
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {isLoggedIn ? (
              <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
                <ul className="bg-gray-800 px-4 py-2">
                  <li>
                    <Link to="/" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Accueil</Link>
                  </li>
                  <li>
                    <Link to="/compte" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Mon compte</Link>
                  </li>
                  <li>
                    <Link to="/deposer-une-annonce" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Déposer une annonce</Link>
                  </li>
                  <li>
                    <Link to="/mes-annonces" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Liste de mes annonces</Link>
                  </li>
                  <li>
                    <Link to="/messagerie" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Messagerie</Link>
                  </li>
                  <li>
                    <Link to="/" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-800 hover:bg-purple-700 transition duration-150 ease-in-out" onClick={handleLogout}>Deconnexion</Link>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
                <ul className="bg-gray-800 px-4 py-2">
                  <li>
                    <Link to="/" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Accueil</Link>
                  </li>
                  <li>
                    <Link to="/comment-ca-marche" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Comment ça marche ?</Link>
                  </li>
                  <li>
                    <Link to="/qui-sommes-nous" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Qui sommes nous ?</Link>
                  </li>
                  <li>
                    <Link to="/deposer-une-annonce" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Déposer une annonce</Link>
                  </li>
                  <li>
                    <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-800 hover:bg-purple-700 transition duration-150 ease-in-out">S'enregistrer</Link>
                  </li>
                  <li>
                    <Link to="/signin" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Se connecter</Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>

        </div>
      </div>
    </header>
  );

}

export default Header;
