"use client";

import { FaCss3, FaJs, FaReact, FaFigma, FaPhp, FaLaravel, FaGit, FaHtml5 } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { animate, motion } from "framer-motion";


const about = {
  title: 'About me',
  description: 'riosam minus ipsam repellendus doloribus dolorum est ipsum excepturi deserunt, necessitatibus voluptas illo quam voluptatum labore neque dolorem quas.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Viraj Vikum"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 704017188"
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan"
    },
    {
      fieldName: "Email",
      fieldValue: "virajvikum99@gmail.com"
    },
    {
      fieldName: "Linkdin",
      fieldValue: "Viraj Amarasingha"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Sinhala"
    },
  ]
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: "riosam minus ipsam repellendus doloribus dolorum est ipsum excepturi deserunt, necessitatibus voluptas illo quam voluptatum labore neque dolorem quas.",
  items: [
    {
      company: "Auso World PVT LTD.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Auso World PVT LTD.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Auso World PVT LTD.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Auso World PVT LTD.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Auso World PVT LTD.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Auso World PVT LTD.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Auso World PVT LTD.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Auso World PVT LTD.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
  ]
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",
  description: "riosam minus ipsam repellendus doloribus dolorum est ipsum excepturi deserunt, necessitatibus voluptas illo quam voluptatum labore neque dolorem quas.",
  items: [
    {
      institution: "Sri Rahua National School",
      course: "Physical Science",
    },
    {
      institution: "SLIATE",
      course: "HND in Information Technplogy",
      duration: "2021 - Present",
    },
    {
      institution: "SLIATE",
      course: "HND in Information Technplogy",
      duration: "2021 - Present",
    },
    {
      institution: "SLIATE",
      course: "HND in Information Technplogy",
      duration: "2021 - Present",
    },
  ]
};

// skills data

const skills = {
  title: "My skills",
  description: "incidunt cum veritatis similique eos dolore dignissimos earum? Nesciunt voluptate quas doloremque quis nulla! Incidunt, voluptate quod.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'Css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaLaravel />,
      name: 'Laravel',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwindcss',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
  ],
}



const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>

            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about me
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div >
  )
}

export default Resume