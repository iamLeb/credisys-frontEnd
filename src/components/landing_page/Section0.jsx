import React from "react";

import img1 from "../../assets/section0_1.png";
import img2 from "../../assets/Section0_2.jpg";
import img3 from "../../assets/Section0_3.jpg";
import img4 from "../../assets/Section0_4.jpg";
import img5 from "../../assets/Section0_5.jpg";

export default function Section0() {
  return (
    <div className=" flex flex-col">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none font-mono text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <Section_Card_1
        img={img1}
        heading="Empowering Tenants to Build Credit:"
        description="Credisys addresses the challenge of credit inequality by empowering tenants to build their Canadian credit history. By reporting rental payments to Credit Bureaus, Credisys helps tenants establish a credit history and boost their credit scores. This approach not only benefits individuals by improving their financial profiles but also contributes to a more inclusive credit system."
      />
      <Section_Card_2
        img={img4}
        heading="Financial Inclusion for Underserved and Underbanked Communities:"
        description="Credisys has a strong commitment to financial inclusion. The platform is specifically designed for those who rent, including students (both international and Canadian), first-time renters, and newcomers to Canada. By targeting underserved and underbanked populations, such as new Canadians without a Canadian credit history, Credisys aims to provide the credit opportunities they deserve. The founders' personal experiences as newcomers inspire their mission to enable millions of underserved Canadians to access credit."
      />
      <Section_Card_1
        img={img5}
        heading="Maximizing Benefits for Tenants, Property Managers, and Landlords:"
        description="The platform creates a win-win situation for both tenants and property managers/landlords. Tenants benefit from improved credit history and higher credit scores, which opens up more financial opportunities. On the other hand, property managers and landlords benefit by maximizing net operating income and experiencing an increase in punctual on-time rental payments. This dual-sided benefit adds value to both sides of the landlord-tenant relationship."
      />
    </div>
  );
}


export function Section_Card_1(props) {
  return (
    <div className=" w-full m-4 mb-0 h-max flex justify-center items-center flex-row">
      <section className="flex justify-center w-1/3">
        <img className=" max-h-[250px] object-contain bg-cover bg-center" src={props.img} />
      </section>
      <section className=" p-10 text-left  w-1/3 flex flex-col">
        <div className="mb-3 font-mono text-black md:text-3xl dark:text-gray-400">
          
            {props.heading}
       
        </div>

        <div>
          <p className="text-gray-500 dark:text-gray-400">{props.description}</p>
        </div>
      </section>
    </div>
  );
}

export function Section_Card_2(props) {
  return (
    <div className=" w-full m-4 mb-0 h-max flex justify-center items-center flex-row">
      <section className=" p-10 text-left w-1/3 flex flex-col">
        <div>
          <p className="mb-3 font-mono text-black md:text-3xl dark:text-gray-400">
            {props.heading}
          </p>
        </div>

        <div>
          <p className="text-gray-500 dark:text-gray-400">{props.description}</p>
        </div>
      </section>
      <section className="flex  object-scale-down justify-center w-1/3">
        <img className="max-h-[250px] bg-cover bg-center" src={props.img} />
      </section>
    </div>
  );
}
