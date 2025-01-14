import { Link } from "react-router-dom";

import ecomclips from "../assets/ecomclips.png";

const Ecomclips = () => {
  return (
    <>
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
              <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
                <div>
                  <img src={ecomclips} alt="" />
                </div>
              </div>
              <div className="flex flex-wrap items-center w-full lg:w-1/2 md:mx-4">
                <div>
                  <div className="flex flex-col w-full mt-4">
                    <Link
                      to=""
                      target="_blank"
                      className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-blue-400 cursor-pointer lg:leading-tight lg:text-4xl dark:text-white"
                    >
                      Ecomclips
                    </Link>
                    <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                      At the core of Ecomclips, we are all eCommerce experts. We stay on the cutting edge of the eCommerce industry and share our insights with our
                      network of Clients and Partners. Ecomclips is a company made up of talented, hardworking, passionate and fun-loving individuals.
                    </p>
                  </div>
                  <div className="w-full mt-5">
                    <div className="flex items-start mt-8 space-x-3">
                      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-400 rounded-md w-11 h-11 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7 text-indigo-50">
                          <path
                            fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <Link to="https://ecomclips.com" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                          Data Management
                        </Link>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">
                          Unlock the full potential of your ecommerce business with our expert data management services. We offer a comprehensive range of services to
                          help you manage your accounts, inventory, orders, listings, and marketplaces on platforms such as Amazon, eBay, Walmart, Shopify, Magento,
                          and more.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-8 space-x-3">
                      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-400 rounded-md w-11 h-11 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7 text-indigo-50">
                          <path
                            fill-rule="evenodd"
                            d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <Link to="https://ecomclips.com" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                          Digital Marketing
                        </Link>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">
                          At Ecomclips, we believe that digital marketing is not just about driving traffic to your website, but also about converting those visitors
                          into loyal customers.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mt-8 space-x-3">
                      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-400 rounded-md w-11 h-11 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7 text-indigo-50">
                          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <Link to="https://ecomclips.com" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                          Website Development
                        </Link>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">
                          At Ecomclips, we make it simple for you to get started with powerful ecommerce solutions using Shopify, Magento, WooCommerce, and many more.
                          Our skilled team of ecommerce web store developers has completed projects for everyone from small to large businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default Ecomclips;
