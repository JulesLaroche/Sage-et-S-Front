import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';

import Footer from '../partials/Footer';
import Profile from '../partials/Profile';





function ProfilePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'ID utilisateur est présent dans le local storage
    const userId = localStorage.getItem('id');
    if (!userId) {
      // Rediriger vers la page d'inscription si l'ID utilisateur n'est pas trouvé
      navigate('/signup');
    }
  }, []);
  



    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}

  
        {/*  Page content */}
        <main className="grow">
          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>


   <Profile />

        </main>

  
        {/*  Site footer */}
        <Footer />
      </div>
    );
  }
  
  export default ProfilePage;