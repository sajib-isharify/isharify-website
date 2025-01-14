import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../src/assets/logo.png";
import qbits from "../src/assets/qbits.png";
import ecomclips from "../src/assets/ecomclips.png";
import benefitOne from "../src/assets/benefit-one.png";
import benefitTwo from "../src/assets/benefit-two.png";

function App() {
  const [showMobilemenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <Link to="">
              <span className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100 dark:bg-white dark:px-4 rounded-sm">
                <span>
                  <img alt="N" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="w-30" src={logo} />
                </span>
              </span>
            </Link>
            <button
              onClick={() => setShowMobileMenu(!showMobilemenu)}
              aria-label="Toggle Menu"
              className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-primary focus:text-primary focus:bg-black focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              id="headlessui-disclosure-button-:r0:"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>

          <div className={`${showMobilemenu ? "block" : "hidden"} text-center lg:flex lg:items-center`}>
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              <li className="mr-3 nav__item">
                <a onClick={() => scrollToSection('service')} className="inline-block cursor-pointer px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  Services
                </a>
              </li>
              <li className="mr-3 nav__item">
                <a onClick={() => scrollToSection('contact')} className="inline-block cursor-pointer px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="container p-8 mx-auto xl:px-0 flex items-center justify-center">
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold font-roboto leading-snug text-center tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Digital <span className="text-cyan-500"> Transformation</span> Starts Here
            </h1>
            <p className="py-5 text-2xl leading-normal text-center text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Elevate Your Business with Cutting-Edge ERP Solutions and Secure Data Center Services.
            </p>
          </div>
        </div>
      </div>

      <div className="container p-8 mx-auto xl:px-0">
        <div className="flex flex-col justify-center">
          <div className="text-xl font-roboto text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-primary">2000+</span> customers worldwide
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400 text-xl md:text-3xl flex justify-center flex-col items-center md:text-center">
              <span className="font-bold text-primary">100+</span> <p>Client</p>
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 text-xl md:text-3xl flex justify-center flex-col items-center md:text-center ">
              <span className="font-bold text-primary">10+</span>
              <p>Data Center</p>
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 text-xl md:text-3xl flex justify-center flex-col items-center md:text-center">
              <span className="font-bold text-primary">400M+</span> <p>Client Sales</p>
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 text-xl md:text-3xl flex justify-center flex-col items-center md:text-center ">
              <span className="font-bold text-primary">40+</span>
              <p>ERP Systems Deployed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center" id="Services">
        <div className="text-sm font-bold tracking-wider text-blue-400 uppercase">iSharify Services</div>
        <h2 id="service" className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          We embrace the challenge to drive each other to excellence by enriching our own capabilities.
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Helping businesses go online and grow bigger with high-tech web applications and Data Centre.
        </p>
      </div>

      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className="flex items-center justify-center w-full lg:w-1/2 ">
          <div>
            <img src={qbits} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap items-center w-full lg:w-1/2 md:mx-4">
          <div>
            <div className="flex flex-col w-full mt-4">
              <Link
                to="https://myqbits.com"
                target="_blank"
                className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-blue-400 cursor-pointer lg:leading-tight lg:text-4xl dark:text-white"
              >
                Qbits Technologies
              </Link>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                We work together to design, create and recreate innovative tools that make life better and ensure accessibility to the best experience anywhere
                with superior reliability. We are motivated and inspired to introduce you to the new world with the latest innovation.
              </p>
            </div>
            <div className="w-full mt-5">
              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-400 rounded-md w-11 h-11 ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7 text-indigo-50">
                    <path d="M16.5 7.5h-9v9h9v-9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <Link to="https://myqbits.com/Lania-X1" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                    Laptops
                  </Link>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Qbits Technologies presents a lineup of powerful, ultraportable, premium laptops tailored to elevate your computing experience. Designed
                    with precision engineering and cutting-edge technology, Qbits laptops seamlessly blend power and portability, offering unrivaled performance
                    in sleek and stylish packages. From seamless multitasking to immersive entertainment experiences, Qbits laptops deliver unparalleled
                    efficiency and versatility for modern-day users. Qbits built laptops – where precision meets power, and mobility meets sophistication.
                    Experience the future of Bangladeshi innovation with Qbits.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-400 rounded-md w-11 h-11 ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7 text-indigo-50">
                    <path
                      fill-rule="evenodd"
                      d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <Link to="https://myqbits.com/sigma-X2" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                    Mini PC
                  </Link>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Qbits Technologies brings revolutionary advancements in computing with innovative Mini PCs. Compact yet mighty, Qbits Mini PCs are equipped
                    with powerful and superfast components, offering unparalleled performance in a small form factor. These portable marvels redefine
                    versatility, effortlessly transforming any desk into a fully functional workstation. With Qbits Mini PCs, the possibilities are limitless,
                    empowering you to execute demanding tasks with ease. Experience the perfect blend of power, portability, and productivity with Qbits Mini
                    PCs – the ultimate solution for those who demand excellence in every aspect of their computing experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-400 rounded-md w-11 h-11 ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-7 h-7 text-indigo-50">
                    <path
                      fill-rule="evenodd"
                      d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <Link to="https://myqbits.com/sigma-15" target="_blank" className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                    Consumer Electronics
                  </Link>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Qbits Technologies extends its commitment to elevating user experience beyond traditional computing with an array of upgraded household
                    electronics. From the convenience of digital photo frames to the precision of wireless mouse and keyboard sets, and the clarity of webcams
                    and headsets, Qbits offers a comprehensive suite of essential gadgets. Experience the pinnacle of innovation and convenience with Qbits'
                    lineup of household electronics, where every product is meticulously crafted to meet the demands of discerning users seeking the ultimate in
                    premium experiences.
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

      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
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
      </div>

      <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center" id="Contact">
        <div className="text-sm font-bold tracking-wider text-blue-400 uppercase">Contact Us</div>
        <h2 id="contact" className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Want to talk to us?
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          We value the power of communication. If you have questions, need more information, or are ready to embark on a journey of business transformation,
          we're here for you.
        </p>
      </div>

      <div className="container p-8 mx-auto xl:px-0">
        <div className="w-full text-center mx-auto lg:mb-20 rounded-2xl">
          <div className="text-4xl sm:text-xl md:text-2xl lg:text-8xl font-black">
            Hello@<span className="text-blue-400">iSharify</span>.co
          </div>
        </div>
      </div>

      <div className="container p-8 mx-auto xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-primary px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
          <div className="flex-grow text-center lg:text-left">
            <h2 className="text-2xl font-bold lg:text-3xl uppercase">We are here</h2>
            <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">793/1 Monipur, Mirpur, Dhaka Bangladesh</p>
          </div>
          <div className="flex-shrink-0 w-full text-center lg:w-auto">
            <p
              to="https://github.com/web3templates"
              target="_blank"
              rel="noopener"
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-primary bg-white rounded-md px-7 lg:px-10 lg:py-5 "
            >
              <img alt="N" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="w-30" src={logo} />
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="container p-8 mx-auto xl:px-0">
          <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div>
                {" "}
                <Link className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100 " to="/">
                  <img src={logo} alt="N" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="w-8  dark:bg-white" />
                  <span>iSharify</span>
                </Link>
              </div>
              <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                Helping businesses go online and grow bigger with high-tech web applications and Data Centre
              </div>
            </div>
            <div>
              <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                <Link
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  to="/"
                >
                  Our Service
                </Link>
                <Link
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  to="/"
                >
                  About Us
                </Link>
                <Link
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  to="/"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">Copyright © 2025. Made by iSharify Tech Team</div>
        </div>
      </div>
    </>
  );
}

export default App;
