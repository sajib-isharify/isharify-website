import { Link } from "react-router-dom";

import benefitOne from "../assets/benefit-one.png";
import benefitTwo from "../assets/benefit-two.png";

const Service = () => {
  return (
    <><div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
    <div className="flex items-center justify-center w-full lg:w-1/2 ">
      <div>
        <img src={benefitOne} className="w-64" alt="" />
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
            Cutting-Edge ERP Solutions
          </Link>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            Our ERP solutions are designed to streamline your business processes, enhance operational efficiency, and provide real-time insights for
            informed decision-making. From financial management to supply chain optimization, we offer a suite of customizable modules tailored to meet your
            specific business needs.
          </p>
        </div>
        <div className="w-full mt-5">
          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-400 rounded-md w-11 h-11">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7 text-indigo-50">
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <Link to="" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                Streamlining Business Processes
              </Link>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                The ERP solutions aim to streamline various business processes within an organization.
              </p>
            </div>
          </div>
          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-400 rounded-md w-11 h-11 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7 text-indigo-50">
                <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
              </svg>
            </div>
            <div>
              <Link to="https://ecomclips.com" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                Enhancing Operational Efficiency
              </Link>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                The goal is to enhance overall operational efficiency by integrating and optimizing different aspects of business management.
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
                Real-Time Insights
              </Link>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                ERP system provides real-time insights into business operations, facilitating informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
    <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
      <div>
        <img src={benefitTwo} className="w-64" alt="" />
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
            Secure Data Center Services
          </Link>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            In the digital age, safeguarding your data is paramount. Our state-of-the-art data center services offer a secure and reliable environment for
            your critical business information.
          </p>
        </div>
        <div className="w-full mt-5">
          <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-400 rounded-md w-11 h-11 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7 text-indigo-50">
                <path
                  fill-rule="evenodd"
                  d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <Link to="https://ecomclips.com" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                Redundancy and Reliability
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
                  d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <Link to="https://ecomclips.com" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                Security Measures
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
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </div>
            <div>
              <Link to="https://ecomclips.com" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                24/7 Monitoring
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
  </div></>
  )
}

export default Service