"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sales_glitz_1s@icloud.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: <a target='_blank' rel='noopener noreferrer' href="https://linkedin.com/in/michaelugwe"className = "hover:text-accent">LinkedIn Profile</a>
  },
];

import { motion } from "framer-motion";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_naz0la8', 'template_r56o1nh', form.current, 'eMSi1BvoSkjCIJz7z')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's connect</h3>
              <p className="text-white/60">
                Short messages go a long way. 
              </p>
              <p className="text-white/60 text-xs">
                (PS: The email displayed is correct) 
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name= "firstname" placeholder="First name" />
                <Input type="text" name= "lastname" placeholder="Last name" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="text" name="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value ="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message" className="h-[200px]" placeholder="Type your message here."/>
              {/* btn */}
              <Button type="submit" size="lg" className="max-w-40 hover:bg-accent hover:text-white hover:font-bold">
                Send message
              </Button>
            </form>
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
                      <h3 className="text-xl">{item.description}</h3>
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
