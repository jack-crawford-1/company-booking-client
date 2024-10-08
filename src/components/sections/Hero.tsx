const Hero = () => {
  return (
    <div className="md:mt-20 pt-40 w-full min-h-screen relative bg-black flex md:flex-row flex-col items-center justify-center lg:p-10 md:p-10 opacity-90">
      <div className="w-3/4  md:w-1/3 flex flex-col  items-center justify-center lg:max-w-[45%] h-full">
        <div className="text-white">
          <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center pb-5">
            Dummy Home Vet Clinic
          </h1>
          <h2 className="text-2xl font-bold text-center pb-10">
            Your pet's health is our priority
          </h2>
        </div>
        <div>
          <p className="leading-7 text-center pb-10 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            eligendi minima repellendus vel nisi ducimus ipsum explicabo facere
            quis optio eos similique error molestias minus assumenda debitis,
            numquam quo veniam. Lo sit amet consectetur adipisicing elit!
            Veritatis error fugit quo possimus ips.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row pb-10 ">
          <button
            onClick={() => {
              document
                .querySelector('#about')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 min-w-[250px]"
          >
            See More
          </button>
          <button
            onClick={() => {
              document
                .querySelector('#booking-form')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 min-w-[250px]"
          >
            Book Appointment
          </button>
        </div>
      </div>

      <div className="w-1/2 pb-20 pl-20">
        <img
          src="/assets/icons/cat-white.svg"
          alt="flower"
          className="w-full rounded-xl hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;
