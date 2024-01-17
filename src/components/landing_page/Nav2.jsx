import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Nav2() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 text-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a onClick={() => navigate('/')}>
          <span className="cursor-pointer self-center text-2xl text-blue-500 font-semibold whitespace-nowrap">
            Credsys
          </span>
        </a>
        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 ${isNavOpen ? 'hidden' : 'block'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <svg
            className={`w-5 h-5 ${isNavOpen ? 'block' : 'hidden'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-default">
         <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border bg-white border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                 onClick={() => navigate('/AboutUs')}
                className="block py-2 px-3 text-white bg-blue-700 sm:bg-white md:white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                AboutUs
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate('/tenant')}
                className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tenants
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate('/Landlord-PropertyManager')}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Property Manager/Landlord
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate('/blog')}
                className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            <li>
              <button
                  onClick={() => navigate('/login')}
                type="button"
                className="cursor-pointer py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-red rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 sm:bg-white dark:hover:text-white dark:hover:bg-gray-700"
              >
                Log In
              </button>
            </li>

            <li>
              <button
                  onClick={() => navigate('/register')}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </li>
         </ul>
        </div>
      </div>
    </nav>
  );
}
