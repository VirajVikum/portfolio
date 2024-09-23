"use client";

import { FaCss3, FaJs, FaReact, FaFigma, FaPhp, FaLaravel, FaGit, FaHtml5, } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiDjango } from "react-icons/si";


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { animate, motion } from "framer-motion";
import { CardBody, CardContainer } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { LinkPreview } from "@/components/ui/link-preview";


const about = {
  title: 'About me',
  description: 'A passionate developer with expertise in software, web, and mobile development, dedicated to creating efficient and innovative solutions.',
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
      fieldName: "Linkdin",
      fieldValue: "Viraj Amarasingha"
    },
    {      
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Email",
      fieldValue: "virajvikum99@gmail.com"
    },
    {      
      fieldName: "Nationality",
      fieldValue: "Sri Lankan"
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
  description: "Demonstrated expertise in full-stack development through hands-on experience in building, testing, and deploying scalable applications.",
  items: [
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
  description: "Completed a HND in Information Technology, focusing on software development, web technologies, and data analysis.",
  items: [
    {
      institution: "SLIATE",
      course: "HND in Information Technplogy",
      duration: "2021 - Present",
    },
    {
      institution: "Alawwa Central College",
      course: "A/L in Physical Science",
      duration: "2020",
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
    {
      icon: <SiDjango />,
      name: 'Django',
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
            <BackgroundGradient className="rounded-[22px] bg-black dark:bg-zinc-900">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap[30px] text-center xl:text-left p-4">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px] overflow-auto">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (


                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:expose-card">
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
                <div className="flex flex-col gap[30px] text-center xl:text-left p-4">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px] overflow-auto">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:expose-card">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.course}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap[30px] text-center xl:text-left p-4">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] p-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index} className=" hover:expose-card">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white text-black">
                                <p className="capitalize ">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="about" className="w-full text-center xl:text-left">
                <CardContainer key={'2'}>
                  <CardBody>
                    <div className="flex flex-col gap-[30px]  p-4">
                      <h3 className="text-4xl font-bold hover:text-accent">{about.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {about.info.map((item, index) => {
                          return (
                            <li key={index}
                              className="flex items-center justify-center xl:justify-start gap-4">
                              <span className="text-white/60">{item.fieldName}</span>
                              {item.fieldName === "Linkdin" ? (
                              <LinkPreview url="https://www.linkedin.com/in/viraj-amarasingha-906a1b2a4/" className="text-xl hover:zoom-card text-white hover:text-accent">
                                {item.fieldValue}
                              </LinkPreview>
                              ): item.fieldName === "Email" ?(
                                <LinkPreview url="mailto:virajvikum99@gmail.com" className="text-xl hover:zoom-card text-white hover:text-accent">
                                {item.fieldValue}
                              </LinkPreview>
                              ):(
                                <>
                              <span className="text-xl hover:zoom-card hover:text-accent">{item.fieldValue}</span>
                              </>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </CardBody>
                </CardContainer>
              </TabsContent>
            </BackgroundGradient>
          </div>

        </Tabs>
      </div>
    </motion.div >
  )
}

export default Resume