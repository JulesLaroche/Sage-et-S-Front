import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';

import Footer from '../partials/Footer';
import Formulaire from '../partials/Formulaire';
import QuiSommes from '../partials/QuiSommes';


function Messagerie() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Page content */}
            <main className="grow">
                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>
                <section className='relative pt-32 md:pt-40 md:pb-1'>
                    <div className='max-w-5xl mx-auto '>
                        <div className="py-12 md:py-8">
                            {/* Section header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                <h1 className="h1">Vos conversations</h1>
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

export default Messagerie;