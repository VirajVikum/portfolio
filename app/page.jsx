import ParticlesContainer from "@/components/ParticlesContainer";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    // h-full
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-8">

          {/* <Spotlight className="-top-40 -left-10 " fill="green" />
          <Spotlight className="-top-10 -left-10 " fill="pink" />
          <Spotlight className="-top-0 -left-10 " fill="yellow" /> */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Viraj Vikum</span>
            </h1>
            {/* <p className="max-w-[500px] mb-9 text-white/80"> */}
            <TextGenerateEffect className="mb-9 text-white text-[40px] md:text-[5xl]" words='"Passionate developer skilled in building dynamic, user-centric applications with a focus on clean code, innovative solutions, and seamless user experiences."' />
              
            {/* </p> */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
              variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-accent hover:border-accent-hover hover:bg-accent hover:text-white transition"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
                </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            {/* <ParticlesContainer /> */}
            <Photo />
            </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;