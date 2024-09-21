"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { PinContainer } from "@/components/ui/3d-pin";


const projects = [
  {
    num: "01",
    category: "Standalone",
    title: "Student Results Analyser",
    description: "An Excel and Visual Basic project for school students' results analysis involves creating an automated system to input, calculate, and visualize students' grades and performance metrics efficiently.",
    stack: [
      { name: 'V.B' }, { name: 'MS Excel' },
    ],
    image: '/assets/projets/grading.JPG',
    live: "https://github.com/VirajVikum",
    github: "https://github.com/VirajVikum",
  },
  {
    num: "02",
    category: "Standalone",
    title: "PDF to Word document convertor",
    description: "A Python project using the Tesseract library for converting PDF files to Word documents involves extracting text from scanned PDFs and converting it into an editable Word format, streamlining document digitization and editing processes.",
    stack: [
      { name: 'Python' },{name: 'Tesseract library'},
    ],
    image: '/assets/projets/pdfConvertor.JPG',
    live: "https://github.com/VirajVikum",
    github: "https://github.com/VirajVikum",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Call center System",
    description: "A Laravel and Livewire project for AUSO World (Pvt) Ltd designed an outbound call center system that streamlines agent interactions, tracks call outcomes, and integrates real-time dashboards for monitoring campaign performance and agent productivity.",
    stack: [
      { name: 'Laravel' }, { name: 'Livewire' },
    ],
    image: '/assets/projets/agentdb.JPG',
    live: "https://github.com/VirajVikum",
    github: "https://github.com/VirajVikum",
  },
]


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn", }
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl-w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">

            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">

                {project.stack.map((item, index) => {
                  return (

                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>

                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center p-4 pb-0">
                {/* live project button */}
                <div className="pr-16">
                  {/* <PinContainer
                  title="/ui.aceternity.com"
                  href="https://twitter.com/mannupaaji"
                > */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* </PinContainer> */}
                </div>

                {/* github project button */}
                <div className="pl-16">
                  <PinContainer
                    title="Github"
                    href={project.github}
                  >
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>github repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </PinContainer>
                </div>
              </div>

            </div>

          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] m-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (

                  <SwiperSlide key={index} className="w-full">

                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 zoom-card:hover"></div>
                      {/* image */}


                      <div className="relative w-full h-full">

                        <Image
                          src={project.image}
                          fill
                          className="object-contain bg-black"
                          alt=""
                        />

                      </div>


                    </div>

                  </SwiperSlide>


                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text:primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work