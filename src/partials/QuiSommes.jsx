import React from 'react';
import { Link } from 'react-router-dom';

function QuiSommes() {
    return (
        <section className='relative pt-32 pb-10 md:pt-40 md:pb-1'>
            <div className='max-w-5xl mx-auto pb-8 md:pb-8'>
                <div className="py-12 md:py-8">

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 mb-4">Qui sommes nous ?</h1>
                        {/* <p className="text-xl text-gray-400">Des services de proximité par des séniors qualifiés.</p> */}
                    </div>


                    <p class="text-justify h4 mb-2 pb-12 first-letter:text-2.5xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:float-left">Nous sommes deux femmes entrepreneuses ayant la volonté de simplifier les tâches de la vie quotidienne, tout en permettant aux séniors de la ville de Toulon de transmettre leurs savoirs et compétences. Rien de mieux que de trouver conseils auprès de personnes expérimentées et pleines de sagesse.</p>
                    <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

                        {/* 1st item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
                            </svg>
                            <h4 className="h4 mb-2">Partage et transmission</h4>
                            <p className="text-lg text-gray-400 text-center">"Transmettre et simplifier : Notre mission en tant qu'entrepreneuses à Toulon, où nous permettons aux séniors de partager leur savoir-faire pour une vie quotidienne plus facile et plus enrichissante."</p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                            </svg>
                            <h4 className="h4 mb-2">Solidarité et entraide</h4>
                            <p className="text-lg text-gray-400 text-center">"Ensemble, main dans la main : Notre engagement en tant qu'entrepreneuses à Toulon pour simplifier la vie quotidienne tout en favorisant l'entraide et la solidarité intergénérationnelle, où les séniors peuvent partager leur savoir-faire et leur expérience avec la communauté."</p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                                    <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                                    <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                                    <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                                </g>
                            </svg>
                            <h4 className="h4 mb-2">Apprendre autrement</h4>
                            <p className="text-lg text-gray-400 text-center">"Apprendre autrement : Notre approche en tant qu'entrepreneuses à Toulon, où nous simplifions la vie quotidienne en permettant aux séniors de transmettre leur savoir-faire et compétences de manière innovante et enrichissante pour tous."</p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                                    <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                                    <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                                </g>
                            </svg>
                            <h4 className="h4 mb-2">Gagnant / Gagnant</h4>
                            <p className="text-lg text-gray-400 text-center">Notre vision en tant qu'entrepreneuses à Toulon, où nous simplifions la vie quotidienne tout en créant une communauté solidaire et intergénérationnelle où chacun peut contribuer et bénéficier du partage de connaissances et de compétences."</p>
                        </div>
                    </div>


                    <div class="min-h-screen pt-12 ">
                        <div class="flex flex-row w-full">

                            <div class="w-2/5 px-2 py-5">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Le début...
                                        </div>

                                    </div>
                                    <div class="text-gray-600">
                                        - Pertinence d’une plateforme numérique ? <br />  - Groupe projet social et solidaire d’entraide entre toulonnais sur Facebook <img className='h-8' src="src\images\image1.png" alt="" srcset="" />
                                    </div>
                                </div>

                            </div>

                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>Fin</div>
                                        <div>Juin</div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="flex flex-row w-full">


                            <div class="w-2/5 px-2 py-10">

                            </div>

                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>07/07</div>
                                        <div>au</div>
                                        <div>07/08</div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-2/5 px-2 py-10 ">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Enquête
                                        </div>
                                    </div>
                                    <div class="text-gray-600">
                                        Enquête quantitative sur   les causes d’isolement des séniors sur Toulon 63 répondants et 22 rencontres physiques
                                        . <img className='h-8' src="src\images\image2.png" alt="" srcset="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">

                            <div class="w-2/5 px-2 py-5">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Entretien
                                        </div>

                                    </div>
                                    <div class="text-gray-600">
                                        3 entretiens qualitatifs sur l’isolement des séniors <img className='h-8' src="src\images\image3.png" alt="" srcset="" />
                                    </div>
                                </div>

                            </div>

                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>07/07</div>
                                        <div>au</div>
                                        <div>18/07</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">
                            <div class="w-2/5 px-2 py-10">
                            </div>
                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>01/08</div>

                                    </div>
                                </div>
                            </div>
                            <div class="w-2/5 px-2 py-10 ">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Un regard
                                        </div>
                                    </div>
                                    <div class="text-gray-600">
                                        Regard inversé nous souhaitons partir de ce que les séniors peuvent faire et transmettre.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">

                            <div class="w-2/5 px-2 py-5">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Enquête
                                        </div>

                                    </div>
                                    <div class="text-gray-600">
                                        Enquête quantitative auprès des séniors et l’ensemble de habitants de Toulon

                                    </div>
                                </div>

                            </div>

                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>05/08</div>
                                        <div>au</div>
                                        <div>22/08</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">
                            <div class="w-2/5 px-2 py-10">
                            </div>
                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>07/08</div>

                                    </div>
                                </div>
                            </div>
                            <div class="w-2/5 px-2 py-10 ">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Nom
                                        </div>
                                    </div>
                                    <div class="text-gray-600">
                                        Premier nom, logo et page d’accueil.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">

                            <div class="w-2/5 px-2 py-5">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Validation
                                        </div>

                                    </div>
                                    <div class="text-gray-600">
                                        Nom et logo définitif de le plateforme, nom des séniors = Sages


                                    </div>
                                </div>

                            </div>

                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>14/08</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">
                            <div class="w-2/5 px-2 py-10">
                            </div>
                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>02/09</div>

                                    </div>
                                </div>
                            </div>
                            <div class="w-2/5 px-2 py-10 ">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Utilisateurs
                                        </div>
                                    </div>
                                    <div class="text-gray-600">
                                        Nom des clients = Apprentis <br /> Duo d’ Apprentis-Sages


                                    </div>
                                </div>
                            </div>
                        </div>
                             <div class="flex flex-row w-full">

                            <div class="w-2/5 px-2 py-5">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Coût
                                        </div>

                                    </div>
                                    <div class="text-gray-600">
                                    Coûts et ressources, Définition de la stratégie de communication
                                    </div>
                                </div>

                            </div>

                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>Fin septembre</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">
                            <div class="w-2/5 px-2 py-10">
                            </div>
                            <div class="w-1/5  flex justify-center">
                                <div class="relative flex h-full w-1 bg-blue-400 items-center justify-center">
                                    <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-blue-400 leading-none text-center z-10 bg-white font-thin">
                                        <div>Aujourd'hui</div>

                                    </div>
                                </div>
                            </div>
                            <div class="w-2/5 px-2 py-10 ">
                                <div class="flex flex-col w-full rounded-lg shadow bg-gray-100 px-4 py-5">
                                    <div class="text-gray-600 mb-2 flex justify-between">
                                        <div class="font-bold">
                                            Et maintenant
                                        </div>
                                    </div>
                                    <div class="text-gray-600">
                                    Ravie de vous partager notre expérience
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuiSommes;