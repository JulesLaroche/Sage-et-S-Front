import React from 'react';

import PageIllustration from '../partials/PageIllustration';
import Cookie from '../partials/cookie';
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

        <Cookie />
      </main>


      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default DeposerUneAnnonce;