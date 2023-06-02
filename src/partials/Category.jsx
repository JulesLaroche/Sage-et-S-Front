import React from 'react';

function Category() {
    return (
        <section className=" border-t border-gray-800 max-w-6xl mx-auto px-4 pt-8 pb-8 sm:px-6 relative">
            <div data-aos="fade-up" data-aos-delay="50">
            <div className="max-w-3xl mx-auto text-center ">

            <h1 className="h2 mb-4">Découvrez nos catégories de services</h1>
           
          </div>

            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="src\images\bricolage.jpg" alt="Bricolage" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Bricolage</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <a to=""  className="btn  text-white bg-purple-600 hover:bg-purple-700 w-full">Accéder à la catégorie</a>
                    </div>
                </div>

                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="src\images\menage.jpg" alt="River" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Menage</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <a to=""  className="btn  text-white bg-purple-600 hover:bg-purple-700 w-full">Accéder à la catégorie</a>
                    </div>
                </div>


                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="src\images\informatique.jpg" alt="Forest" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Informatique</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <a to=""  className="btn  text-white bg-purple-600 hover:bg-purple-700 w-full">Accéder à la catégorie</a>
                    </div>
                </div>
            </div>


        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="src\images\informatique.jpg" alt="Mountain" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Mountain</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                <a to=""  className="btn  text-white bg-purple-600 hover:bg-purple-700 w-full">Accéder à la catégorie</a>
                </div>
            </div>

            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="src\images\informatique.jpg" alt="River" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">River</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                <a to=""  className="btn  text-white bg-purple-600 hover:bg-purple-700 w-full">Accéder à la catégorie</a>
                </div>
            </div>


            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="src\images\informatique.jpg" alt="Forest" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Forest</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                <a to=""  className="btn  text-white bg-purple-600 hover:bg-purple-700 w-full">Accéder à la catégorie</a>
                </div>
            </div>
        </div>
        </div>
    </section>


    );
}

export default Category;
