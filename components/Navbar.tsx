'use client'
import { serifLogo } from '@/lib/font'
import { motion } from 'framer-motion'
import Link from 'next/link'

const BarItem = (
  {title} : {title: string}
) => {
  return (
    <motion.li whileHover={{ scale: 1.05 }}>
      <Link className='text-xl' href={"#" + title.toLowerCase()}>{title}</Link>
    </motion.li>
  )
}

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white p-4"
    >
      <div className={"container mx-auto my-2 flex justify-between items-center " + serifLogo.className}>
        <div className="text-3xl mx-4">
          Caladan Industries
        </div>
        
        <ul className="flex space-x-8 mr-4">
          <BarItem title="About"></BarItem>
          <BarItem title="Mission"></BarItem>
          <BarItem title="Contact"></BarItem>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar