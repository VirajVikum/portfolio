"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaGithubAlt, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { LinkPreview } from "@/components/ui/link-preview";

// Contact info details
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

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Update formData state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phone, service, message } = formData;
    const whatsappMessage = `Hello, my name is ${firstname} ${lastname}. I'm interested in ${service}. Here are my details:\n\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/94704017188?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none h-full">
            <BackgroundGradient className="rounded-[22px] bg-black dark:bg-zinc-900">
              <form
                className="flex flex-col gap-6 p-8 pt-4 pb-4 bg-[#27272c] rounded-[22px]"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  Let’s collaborate to bring your ideas to life and create
                  something exceptional together.
                </p>
                {/* input fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    onChange={handleChange}
                    value={formData.firstname}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    onChange={handleChange}
                    value={formData.lastname}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                {/* select */}
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="bg-primary">
                        Select a service
                      </SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="UI/UX Design">
                        UI/UX Design
                      </SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* textarea */}
                <Textarea
                  className="h-[150px]"
                  name="message"
                  placeholder="Type your message here"
                  onChange={handleChange}
                  value={formData.message}
                />
                {/* btn */}
                <Button type="submit" size="md" className="max-w-40">
                  Send message
                </Button>
              </form>
            </BackgroundGradient>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.title === "Linkedin" ? (
                        <LinkPreview
                          url="https://www.linkedin.com/in/viraj-amarasingha-906a1b2a4/"
                          className="font-bold text-white"
                        >
                          {item.description}
                        </LinkPreview>
                      ) : item.title === "Email" ? (
                        <LinkPreview
                          url="mailto:virajvikum99@gmail.com"
                          className="font-bold text-white"
                        >
                          {item.description}
                        </LinkPreview>
                      ) : item.title === "GitHub" ? (
                        <LinkPreview
                          url="https://github.com/VirajVikum"
                          className="font-bold text-white"
                        >
                          {item.description}
                        </LinkPreview>
                      ) : (
                        <>
                          <h3 className="text-xl">{item.description}</h3>
                        </>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
