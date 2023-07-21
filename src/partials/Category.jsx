import React from 'react';

function Category() {
    return (
        <section className="border-t border-gray-800 max-w-6xl mx-auto px-4 pt-8 pb-8 sm:px-6 relative">
            <div data-aos="fade-up" data-aos-delay="50">
                <div className="max-w-3xl mx-auto text-center ">
                    <h1 className="h2 mb-4">Découvrez nos catégories de services</h1>
                </div>

                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="src\images\bricolage.jpg" alt="Bricolage" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Bricolage</div>
                            <p className="text-gray-700 text-base">
                                Des experts du bricolage pour vous aider avec tous vos projets à domicile .        <br />  <br />
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a to="" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={() => { window.location.href = '/liste-des-annonces'; }}>
                                Accéder à la catégorie
                            </a>
                        </div>
                    </div>

                    <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="src\images\menage.jpg" alt="Service à la personne" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Service à la personne</div>
                            <p className="text-gray-700 text-base">
                                Des professionnels du ménage et de l'aide à domicile pour vous faciliter la vie.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a to="" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={() => { window.location.href = '/liste-des-annonces'; }}>
                                Accéder à la catégorie
                            </a>
                        </div>
                    </div>

                    <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="src\images\informatique.jpg" alt="Informatique" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Informatique</div>
                            <p className="text-gray-700 text-base">
                                Des experts en informatique pour résoudre vos problèmes technologiques.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a to="" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={() => { window.location.href = '/liste-des-annonces'; }}>
                                Accéder à la catégorie
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="src\images\informatique.jpg" alt="Cuisine" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Cuisine</div>
                            <p className="text-gray-700 text-base">
                                Des chefs cuisiniers pour préparer de délicieux repas à domicile.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a to="" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={() => { window.location.href = '/liste-des-annonces'; }}>
                                Accéder à la catégorie
                            </a>
                        </div>
                    </div>

                    <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="src\images\informatique.jpg" alt="Administratif" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Administratif</div>
                            <p className="text-gray-700 text-base">
                                Des experts pour vous aider avec vos tâches administratives et juridiques.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a to="" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={() => { window.location.href = '/liste-des-annonces'; }}>
                                Accéder à la catégorie
                            </a>
                        </div>
                    </div>

                    <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="src\images\informatique.jpg" alt="Apprendre à lire" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Apprendre à lire</div>
                            <p className="text-gray-700 text-base">
                                Des professeurs qualifiés pour aider les enfants à apprendre à lire.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a to="" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={() => { window.location.href = '/liste-des-annonces'; }}>
                                Accéder à la catégorie
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;
