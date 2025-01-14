import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavigationBar = ({ showMobilemenu, setShowMobileMenu, scrollToSection }) => {
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
                <a
                  onClick={() => scrollToSection("service")}
                  className="inline-block cursor-pointer px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  Services
                </a>
              </li>
              <li className="mr-3 nav__item">
                <a
                  onClick={() => scrollToSection("contact")}
                  className="inline-block cursor-pointer px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
