import React from "react";
import Logo from '../assets/Banner.png';

function HeroSection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text Content */}
        <div className="max-w-lg text-center md:text-left"><br/>
          <h1 className="text-4xl font-bold leading-tight">
            Take Online <br /> <span className="text-black">Exam.</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            NUMBER OF ACTIVE USERS RIGHT NOW
          </p>
          <p className="text-2xl font-bold text-blue-900">200+</p>
        </div>

        <div className="mt-8 md:mt-0"><br/>
          <img
            src={Logo}
            alt="Online Exam"
            className="w-80 md:w-96"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
