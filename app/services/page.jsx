"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const services = [
  {
    num: "01",
    title: 'Web Development',
    description: 'Developed dynamic and responsive web applications using modern frameworks like Laravel, Livewire, and Next.js, ensuring seamless user experiences and high performance.',
    href: ""
  },
  {
    num: "02",
    title: 'Mobile Development',
    description: 'Designed and built responsive mobile applications for both iOS and Android platforms, focusing on user experience and performance.',
    href: ""
  },
  {
    num: "03",
    title: 'Software Development',
    description: 'Developed and deployed robust web applications utilizing modern frameworks and best practices, with a focus on delivering scalable, user-centric software solutions.',
    href: ""
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[36px]"
        >
          {services.map((service, index) => (
            
            <CardContainer key={index}>
              <CardBody>
              <BackgroundGradient className="rounded-[22px] bg-black dark:bg-zinc-900">
                <div className="flex-1 flex flex-col justify-center gap-5 group p-2">
                  <div className="w-full flex justify-between items-center">
                    <CardItem>
                      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                    </CardItem>
                    <Link href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  <p className="text-white/60">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
                </BackgroundGradient>
              </CardBody>
            </CardContainer>
           
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
