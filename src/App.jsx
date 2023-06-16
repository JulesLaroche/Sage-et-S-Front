import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  redirect,
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';
import CommentCa from './pages/CommentCa';
import QuiSommesNous from './pages/QuiSommesNous';
import DeposerUneAnnonce from './pages/DeposerUneAnnonce';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import ProfilePage from './pages/ProfilePage';
import Account from './pages/Account';
import ModifAnnonce from './pages/ModifAnnonce';
import ListeDesAnnonces from './pages/ListeDesAnnonces';
import Page404 from './pages/404';
import Annonce from './pages/PageAnnonce';
import Chat from './pages/Chat';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      // disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/comment-ca-marche" element={<CommentCa />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
        <Route path="/deposer-une-annonce" element={<DeposerUneAnnonce />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/compte" element={<Account />} />
        <Route path="/liste-des-annonces" element={<ListeDesAnnonces />} />
        <Route path="/modifier-annonces" element={<ModifAnnonce />} />
        <Route path="*" element={<Page404 />} />
        {/* <Route exact path="*" ><redirect to="/404"/></Route> */}
        <Route path="/annonce/:id" element={<Annonce />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
