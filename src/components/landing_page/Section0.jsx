import React from "react";

export default function Section0() {
  return (
    <div className=" flex flex-col">
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <Section_Card
        heading="Empowering Tenants to Build Credit:"
        description="Credisys addresses the challenge of credit inequality by empowering tenants to build their Canadian credit history. By reporting rental payments to Credit Bureaus, Credisys helps tenants establish a credit history and boost their credit scores. This approach not only benefits individuals by improving their financial profiles but also contributes to a more inclusive credit system."
      />

      <Section_Card
        heading="Maximizing Benefits for Tenants, Property Managers, and Landlords:"
        description="The platform creates a win-win situation for both tenants and property managers/landlords. Tenants benefit from improved credit history and higher credit scores, which opens up more financial opportunities. On the other hand, property managers and landlords benefit by maximizing net operating income and experiencing an increase in punctual on-time rental payments. This dual-sided benefit adds value to both sides of the landlord-tenant relationship."
      />

      <Section_Card
        heading="Financial Inclusion for Underserved and Underbanked Communities:"
        description="Credisys has a strong commitment to financial inclusion. The platform is specifically designed for those who rent, including students (both international and Canadian), first-time renters, and newcomers to Canada. By targeting underserved and underbanked populations, such as new Canadians without a Canadian credit history, Credisys aims to provide the credit opportunities they deserve. The founders' personal experiences as newcomers inspire their mission to enable millions of underserved Canadians to access credit."
      />
    </div>
  );
}

export function Section0_1() {
  return <section className=" bg-white"></section>;
}

export function Section_Card(props) {
  return (
    <div className=" w-full h-max flex flex-row">
      <section>
        <img src="" />
      </section>
      <section className=" flex flex-col">
        <div>
          <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
            {props.heading}
          </p>
        </div>

        <div>
          <p class="text-gray-500 dark:text-gray-400">{props.description}</p>
        </div>
      </section>
    </div>
  );
}
