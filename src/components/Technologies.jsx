import { Link } from "react-router-dom";

import qbits from "../assets/qbits.png";

const Technologies = () => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default Technologies;
