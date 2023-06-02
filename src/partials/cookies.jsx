import React from 'react';
import { Link } from 'react-router-dom';


import FeatImage01 from '../images/features-03-image-01.png';
import FeatImage02 from '../images/features-03-image-02.png';
import FeatImage03 from '../images/features-03-image-03.png';

function Cookies() {
    return (


        <div x-data="{ open: false }" x-init="() => setTimeout(() => open = true, 500)" class="py-6 flex flex-col justify-center sm:py-12">

            <div x-show="open"
                x-transition:enter-start="opacity-0 scale-90"
                x-transition:enter="transition duration-200 transform ease"
                x-transition:leave="transition duration-200 transform ease"
                x-transition:leave-end="opacity-0 scale-90"
                class="max-w-screen-lg mx-auto fixed bg-gray-200 inset-x-5 p-5 bottom-40 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
                <div class="w-full">This website uses cookies to ensure you get the best experience on our website.
                    <a href="#" class="text-indigo-600 whitespace-nowrap  hover:underline">Learn more</a></div>
                <div class="flex gap-4 items-center flex-shrink-0">
                    <button class="text-indigo-600 focus:outline-none hover:underline">Decline</button>
                    <button class="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Allow Coockies</button>
                </div>
            </div >
        </div >





    );
}

<script
    src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
    defer
></script>
export default Cookies;