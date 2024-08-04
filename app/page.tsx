'use client'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Section, { InfoTag, SectionHeading, SectionParagraph } from '../components/Section'

import Image from 'next/image'
import { serifLogo } from '@/lib/font'
import Intro_Anim from '@/components/Intro'

export default function Home() {
  return (
    <main className="min-h-screen bg-white -z-50">
      <Navbar delay={2.5}/>
      <div className='absolute w-full min-h-screen min-w-full'>
        <Image
            src="./fire.png"
            alt="Caladan Industries Hero"
            fill={true}
            priority
            className='brightness-60'
        />
      </div>
      <div className='relative min-h-screen'>
        <h2 className='text-9xl text-white h-[2em] pt-[2.2em] pl-[50px]'>
          DEMOCRATISE HARDWARE
        </h2>
      </div>
      

      <Section>
        <div id="mission"></div>  
        <InfoTag id={1} tag="OUR MISSION"></InfoTag>
        <SectionHeading>Mission Statement</SectionHeading>
        <SectionParagraph className="mb-10">
          We support our democracies by developing innovative hardware that will scale to meet radically changing frontlines. 
          Superior manufacturing and supply chain capabilities are key to winning the next generation of battles.
        </SectionParagraph>
        <Image
            src="./engine.png"
            alt="Caladan Industries Hero"
            width={1000}
            height={400}
            priority
        />
      </Section>   

      <Section className='bg-dark text-white'>
        <div id="about"></div>  
        <InfoTag id={2} tag="OVERVIEW"></InfoTag>
        <SectionHeading>About Us</SectionHeading>
        <SectionParagraph className="mb-10">
          Caladan Industries is a cutting-edge defense manufacturing startup founded by a trio of innovative engineers from Cambridge and Imperial. We specialize in developing cost-efficient, scalable hardware solutions for the defense sector.
        </SectionParagraph>
        <SectionParagraph className="mb-10">
          Our initial focus is on pulsejet engines for interception, leveraging our expertise in aerospace engineering and advanced materials to create superior, cost-effective solutions.
        </SectionParagraph>
      </Section>
      
      <Section>
        <div id="contact"></div>  
        <InfoTag id={3} tag="CONTACT US"></InfoTag>
        <SectionHeading>Contact</SectionHeading>
        <SectionParagraph className="mb-10">
            To learn more about our offerings, email us below.
        </SectionParagraph>    
        <SectionParagraph>
          Email
          <a href="mailto:contact@caladanindustries.com">
            <span className='text-primary'> contact@caladanindustries.com</span>
          </a>
        </SectionParagraph>
          
      </Section>
      
      <Intro_Anim delay={2}></Intro_Anim>
    </main>
  )
}