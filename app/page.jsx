'use client';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation';
import React, { useState, useRef } from 'react';

import Social from "@/components/Social";

const Home = () => {
  const [bubbleVisible, setBubbleVisible] = useState(false);

  const [bubblePosition, setBubblePosition] = useState({ x: 0, y: 0 });

  const buttonRef = useRef(null);

  const handleDownloadClick = (e) => {
    setBubblePosition({ x: e.clientX, y: e.clientY });
    setBubbleVisible(true);
    setTimeout(() => {
      setBubbleVisible(false);
    }, 1000);
  };

  const speechBubbleStyle = {
    position: 'absolute',
    backgroundColor: '#333',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '8px',
    transform: 'translate(-50%, 20px)',
    whiteSpace: 'nowrap',
    zIndex: 1000,
    fontSize: '14px',
    top: bubblePosition.y,
    left: bubblePosition.x,
  };

  const speechBubbleArrowStyle = {
    content: '""',
    position: 'absolute',
    top: '-20px', // Adjust this value to position the arrow
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '10px',
    borderStyle: 'solid',
    borderColor: 'transparent transparent #333 transparent',
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-10 text-8xl">
              Hey, I am <br/> 
              <TypeAnimation sequence ={[
                
                'Ugwe',
                1000, 
                'A Student',
                1000,
                'A Software Engineer',
                1000,
                'A Designer',
                1000,
                'A Data Analyst',
                1000
              ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                className="text-accent block mt-10"
              />
            </h1>
            <p className="max-w-[2000px] mb-9 text-white/50">
              I am a senior at Swarthmore College majoring in Computer Science and Mathematics. I excel at engineering digital experiences and storytelling with data.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button onClick={handleDownloadClick}
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-white hover:bg-accent hover:text-black hover:font-bold"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {bubbleVisible && (
        <div style={speechBubbleStyle}>
          Available soon
          <div style={speechBubbleArrowStyle}></div>
        </div>
      )}
    </section>
  );
};

export default Home;
