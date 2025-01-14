import logo from "../assets/logo.png";

const Contact = () => {
  return (
    <>
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
              <img src={logo} alt="N" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="w-30" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
