'use client'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Section, { InfoTag, SectionHeading, SectionParagraph } from '../components/Section'

import Image from 'next/image'
import { fontMono, fontMonoBold, fontPrimary, fontPrimaryBold } from '@/lib/styles'
import Intro_Anim from '@/components/Intro'
import ImageTransition from '@/components/ImageTransition'
import CircleGrid from '@/components/CircleGrid'
import { colorDark, colorPrimary } from '@/tailwind.config'

export default function Home() {
  return (
    <main className="min-h-screen bg-white -z-50">
      <Navbar delay={0}/>
      <div className='absolute w-full min-h-screen min-w-full'>
        <Image
            src="./Hotfire.png"
            alt="Caladan Industries Hero"
            fill={true}
            priority
            className='brightness-50'
        />
      </div>
      <div className='relative min-h-screen'>
        <motion.h2 
          className={'absolute text-7xl text-white h-[2em] pl-4 left-14 bottom-24 tracking-[.15em] ' + fontMono.className}
          initial = {{ opacity: 0, translateY: -70 }}
          animate = {{ opacity: 1, translateY: 0 }}
          transition= {{ duration: 0.7 }}
          >
          DEMOCRATISE <br></br><span className={fontMonoBold.className + " text-9xl"}>{"HARDWARE"}</span>
        </motion.h2>
      </div>
      <motion.div 
        initial={{ translateY: -70 }}
        animate={{ translateY: -90 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          easings: "easeOut"
        }}
      >
        <a href="#mission" className='absolute right-32 bottom-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
          </svg>
        </a>
      </motion.div>
      
      <div id="mission"></div> 
      <Section className='bg-dark text-white min-h-screen'> 
        <InfoTag id={1} tag="OUR MISSION"></InfoTag>
        <SectionHeading>Erase Warfare Asymmetry</SectionHeading>
        <SectionParagraph className="mb-10">
          We support our democracies by developing innovative hardware that will scale to meet radically changing frontlines. 
          Superior manufacturing and supply chain capabilities are key to winning the next generation of battles.
        </SectionParagraph>
        <div className='flex justify-center my-32'>
          <CircleGrid 
            rows={1} cols={7} spacingX={100} spacingY={100} 
            circleRadius={25}
            colorOn={colorPrimary} colorOff={"#FFFFFF"}
          ></CircleGrid>
        </div>
      </Section>   

      <div id="product"></div>  
      <Section >
        <InfoTag id={2} tag="OUR PRODUCT"></InfoTag>
        <SectionHeading>D1 Interceptor</SectionHeading>
        <div className='flex w-full justify-center mt-32'>
        <ImageTransition 
          firstImageUrl="./Drone/Drone No Skeleton.png"
          secondImageUrl="./Drone/Drone Skeleton.png"
          width={1000}
          height={500}
          alt1="Drone No Skeleton"
          alt2="Drone Skeleton"
        />
      </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          <div className=''>
            <Image
              src="./Drone/Drone Side.png"
              alt="Drone Side"
              width={500}
              height={500}
              className='relative'
            />
          </div>
          <div className="row-span-2">
            <h1 className='text-4xl my-24 '>Mass-manufacturable, jet-powered drones with no moving parts</h1>
            <li className='list-none text-4xl space-y-10 mb-24'>
              <ul>Range: <span className={fontMonoBold.className + " text-5xl"}>70 km</span></ul>
              <ul>Payload: <span className={fontMonoBold.className + " text-5xl"}>4 kg</span></ul>
              <ul>Top Speed: <span className={fontMonoBold.className + " text-5xl"}>300 km/h</span></ul>
            </li>
          </div>
          
          <div className=''>
            <Image
              src="./Drone/Drone Top.png"
              alt="Drone Top"
              width={500}
              height={500}
              className='relative'
            />
          </div>
          
        </div>
      </Section>
      
      
      <Section className='bg-dark text-white'>
        <div id="about"></div>  
        <InfoTag id={2} tag="OUR TEAM"></InfoTag>
        <SectionHeading>About Us</SectionHeading>
        <SectionParagraph className="mb-20">
          Caladan Industries is a cutting-edge defense manufacturing startup founded by a trio of innovative engineers from the University of Cambridge and Imperial College London. We specialize in developing cost-efficient, scalable hardware solutions for the defense sector.
        </SectionParagraph>
        <SectionParagraph className={"mb-20 " + fontMonoBold.className}>
            To learn more, email us at
          <a href="mailto:contact@caladan.industries">
            <span className='text-primary'> contact@caladan.industries</span>
          </a>
        </SectionParagraph>    
      </Section>
      
    </main>
  )
}