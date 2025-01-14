import { Link } from 'react-router-dom'

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <><div className="relative">
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
  </div></>
  )
}

export default Footer