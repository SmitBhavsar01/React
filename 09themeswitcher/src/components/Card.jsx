import React from 'react'
import img from '../assets/smit.jpg'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src={img} alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Hey Everyone, Smit Bhavsar Here.
                    </h1>
                    <br />
                    <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        I'm a passionate web developer learning React and Tailwind CSS. Feel free to connect!
                    </h2>
                </a>
            
<div className="flex justify-end mt-4">
          <a
            href="https://github.com/SmitBhavsar01"
            target="_blank" // Opens in a new tab
            className="flex  px-3 py-1 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            GitHub
          </a>
        </div>

            </div>
        </div>
    );
}
