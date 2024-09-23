"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaEnvelope, FaGithubAlt, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 704017188",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "virajvikum99@gmail.com",
  },
  // {
  //   icon: <FaMapMarkedAlt />,
  //   title: "Address",
  //   description: "Alawwa, Sri Lanka",
  // },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    description: "Viraj Amarasingha",
  },
  {
    icon: <FaGithubAlt />,
    title: "GitHub",
    description: "Viraj Vikum",
  },
];

import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { LinkPreview } from "@/components/ui/link-preview";


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn", }
      }}
      className="py-0">
      <div className="container mx-auto">

        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}

          <div className="xl:w-[54%] order-2 xl:order-none h-full">
            <BackgroundGradient className="rounded-[22px] bg-black dark:bg-zinc-900">
              <form className="flex flex-col gap-6 p-8 pt-4 pb-4 bg-[#27272c] rounded-[22px]">

                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                Let’s collaborate to bring your ideas to life and create something exceptional together. </p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname" placeholder="Lastname" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="bg-primary">Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* textarea */}
                <Textarea className="h-[150px]" placeholder="Type your message here" />
                {/* btn */}
                <Button size="md" className="max-w-40">
                  Send message
                </Button>

              </form>
            </BackgroundGradient>

          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">

                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">

                    <div className="text-[28px]">{item.icon}</div>

                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    {item.title === "Linkedin" ? (
                      // <a href="/as"><h3 className="text-xl">{item.description}</h3></a>
                      <LinkPreview url="https://www.linkedin.com/in/viraj-amarasingha-906a1b2a4/" className="font-bold text-white">
                        {item.description}
                      </LinkPreview>
                    ) : item.title === "Email" ? (
                      // <a href="/gt"><h3 className="text-xl">{item.description}</h3></a>
                      <LinkPreview url="mailto:virajvikum99@gmail.com" className="font-bold text-white">
                        {item.description}
                      </LinkPreview>
                    ): item.title === "GitHub" ? (
                      // <a href="/gt"><h3 className="text-xl">{item.description}</h3></a>
                      <LinkPreview url="https://github.com/VirajVikum" className="font-bold text-white">
                        {item.description}
                      </LinkPreview> 
                    ): (
                      <>
                        <h3 className="text-xl">{item.description}</h3>
                      </>

                    )}
                  </div>

                </li>

              })}

            </ul>
          </div>

        </div>

      </div>
    </motion.section>
  )
}

export default Contact