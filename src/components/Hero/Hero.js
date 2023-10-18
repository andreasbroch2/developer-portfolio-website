import React from "react";
import Image from "next/image";

const Hero = () => (
  <>
    <div className="md:flex items-center place-content-between mx-auto">
      <div className="flex flex-col max-w-6xl">
        <h1>Frontend Developer</h1>
      <p className="text-4xl"> I'm a frontend developer with a passion for learning. I love to create effecient and functional websites/applications.</p>
      <p className="text-4xl mt-4"> Frontend is my specialty, but I also have a good understanding and skills in backend development and data analysis.</p>
      </div>
      <div className="px-24 md:px-0 z-50">
        <Image src="/images/andreas-trans.png" alt="Andreas Broch" width={400} height={400} loading="eager" />
      </div>
    </div>
  </>
);

export default Hero;
