'use client'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Section, { InfoTag, SectionHeading, SectionParagraph } from '../components/Section'
import { serifLogo } from '@/lib/font'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Section>
          <InfoTag id={1} tag="OVERVIEW"></InfoTag>
          <SectionHeading>About Us</SectionHeading>
          <SectionParagraph className="mb-10">
            <p className="text-lg mb-4">
              Caladan Industries is a cutting-edge defense manufacturing startup founded by a trio of innovative engineers from Cambridge and Imperial. We specialize in developing cost-efficient, scalable hardware solutions for the defense sector.
            </p>
            <p className="text-lg">
              Our initial focus is on pulsejet engines for interception, leveraging our expertise in aerospace engineering and advanced materials to create efficient and cost-effective solutions.
            </p>
          </SectionParagraph>    
        </Section>

        <Section>
          <Image
          
              src="/engine.png"
              alt="Caladan Industries Hero"
              width={1000}
              height={400}
              priority
          />
        </Section>

        <Section className="bg-dark text-white">
          <InfoTag id={2} tag="MISSION STATEMENT"></InfoTag>
          <SectionHeading>Our Mission</SectionHeading>
          <SectionParagraph className="mb-10">
            <p className="text-lg mb-4">
              At Caladan Industries, our mission is to revolutionize defense manufacturing through innovative, cost-effective, and scalable solutions. We aim to enhance national security by providing cutting-edge technology that is both accessible and efficient.
            </p>
            <p className="text-lg">
              By focusing on pulsejet engines for interception, we're paving the way for a new era of defense capabilities that combine affordability with high performance.
            </p>
          </SectionParagraph>    
        </Section>
        
        <Section>
          <InfoTag id={3} tag="CONTACT US"></InfoTag>
          <SectionHeading>Contact</SectionHeading>
          <SectionParagraph className="mb-10">
            <p className="text-lg mb-4">
              We'd love to hear from you! Whether you're interested in our products, looking to collaborate, or just want to learn more about Caladan Industries, don't hesitate to get in touch.
            </p>
            <div className="text-lg">
              <p>Email</p> <a href="mailto:info@caladanindustries.com">info@caladanindustries.com</a>
            </div>
          </SectionParagraph>    
        </Section>
      </motion.div>
    </main>
  )
}