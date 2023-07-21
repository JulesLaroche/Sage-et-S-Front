import React from 'react';

import PageIllustration from '../partials/PageIllustration';
import Cookies from '../partials/cookies';
import Footer from '../partials/Footer';
import CommentCaText from '../partials/CommentCa';



function DeposerUneAnnonce() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}


      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <CommentCaText />

        <Cookies />
      </main>


      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default DeposerUneAnnonce;