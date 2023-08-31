import React from 'react';

import PageIllustration from '../partials/PageIllustration';
import Cookies from '../partials/cookie';
import Footer from '../partials/Footer';
import QuiSommes from '../partials/QuiSommes';


function QuiSommesNous() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
        <QuiSommes />
        <Cookies />
      </main>


      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default QuiSommesNous;