const Banner = () => {
  return (
    <>
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
    </>
  );
};

export default Banner;
