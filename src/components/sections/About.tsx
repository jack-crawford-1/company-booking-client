const About = () => {
  return (
    <div className="bg-slate-700 w-full min-h-[calc(100vh-5rem)] pt-10 lg:pt-5 text-gray-300 flex flex-col items-center">
      <div className="md:w-2/3 flex lg:flex-row flex-col items-center justify-center mx-auto">
        <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center  lg:p-10 lg:pb-20 text-gray-300">
          About
        </h1>
        <p className="leading-7 text-center md:pb-10 text-gray-300 pl-10 pr-10 pb-10 md:p-0 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga illum
          esse sunt ex est voluptates eos quos numquam eius error asperiores
          quae s consequatur cumque reprehenderit repellendus, laudantium
          delectus!
        </p>
      </div>

      <div className="min-h-fit w-4/5 mx-auto bg-slate-500 w-full grid grid-cols-1 lg:grid-cols-2 gap-2 p-6 md:pl-20 md:pr-20 text-white text-3xl font-bold">
        <div className="border border-4 rounded-lg opacity-50 bg-gray-800 h-[280px] max-w-[600px] w-full mx-auto p-5">
          container 1
        </div>
        <div className="border border-4 rounded-lg opacity-50 bg-gray-800 h-[280px] max-w-[600px] w-full mx-auto p-5">
          container 2
        </div>
        <div className="border border-4 rounded-lg opacity-50 bg-gray-800 h-[280px] max-w-[600px] w-full mx-auto p-5">
          container 3
        </div>
        <div className="border border-4 rounded-lg opacity-50 bg-gray-800 h-[280px] max-w-[600px] w-full mx-auto p-5">
          container 4
        </div>
      </div>
    </div>
  );
};

export default About;
