import Link from "next/link";
import Image from 'next/image'
import { BezierDefinition, motion, useAnimate } from "framer-motion"
import { useEffect, useState } from "react";
import { fontPrimary, fontPrimaryBold } from "../lib/styles"

const easing1: BezierDefinition = [.11,.37,0,1]

function NavbarItem({url, text, delay} : { url : string, text: string, delay: number}) {
    
    const item = {
        initial: { opacity: 0, translateY: -70 },
        animate: { opacity: 1, translateY: 0 }
    }

    return (
        <motion.div
            initial= "initial"
            animate= "animate"
            variants={item}
            transition= {{ duration: 0.7, ease: [.11,.37,0,1], delay: delay}}
            className="p-5 group"
        >
            <Link 
            href={url}
            className={"text-center "+ fontPrimaryBold.className}
            >
                {text}
            </Link>
            <div className="h-[5px] bg-primary w-0 group-hover:w-[100%] transition-w duration-500"></div>
        </motion.div>
        
    )
}

export default function Navbar({delay} : {delay : number}) {

    const [isVisible, setIsVisible] = useState(true);
    const [isChange, setIsGreen] = useState(false);
    const [scope, animate] = useAnimate();
    const [lastScroll, setLastScroll] = useState(0);

    const hide = async () => {
        await animate(scope.current, 
            { "y" : "-110%" },
            { ease: easing1, duration: 0.5 }
        )
    }

    const reveal = async () => {
        await animate(scope.current,
            { "y" : 0  },
            { ease: easing1, duration: 0.5 }
        )
    }

    const handleScroll = () => {
        const scroll = window.scrollY;
         
        const shouldBeVisible = scroll < lastScroll;
        setLastScroll(scroll);

        const shouldBeGreen = scroll >= screen.height * 0.1;
        setIsGreen(shouldBeGreen);

        // console.log(scroll, shouldBeGreen);

        if (shouldBeVisible === isVisible) return;
        setIsVisible(shouldBeVisible);
        if (shouldBeVisible) {
            reveal()
        } else {
            hide()
        } 
      };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible, handleScroll])
    
    useEffect(() => {
        const scroll = window.scrollY;
        const shouldBeGreen = scroll >= screen.height * 0.1;
        setIsGreen(shouldBeGreen);
    }, [])

    const stagger = 0.3

    // useEffect(() => {
    //     handleScroll()
    // }, []);

    return (
        <motion.div 
            className={`
                fixed min-w-full 
                flex justify-center 
                z-[100]
                transition-colors duration-500 ${isChange ? "bg-white" : ""}
            `}
            ref={scope}
        >
            <div className="flex min-h-[8em] w-[90%] items-center justify-between
            ">
                <motion.h1 
                    className={`
                    text-4xl tracking-wider text-white text-center
                    ` + fontPrimary.className}
                    initial={{ opacity: 0, translateY: -70 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition = {{
                        delay: delay
                    }}
                >
                    <Image
                        src={isChange ? "./Logo.png" : "./Logo Light.png"}
                        alt="Caladan Industries Logo"
                        width={200}
                        height={50}
                        priority
                    />
                </motion.h1>
                <motion.div className={"flex " + (isChange ? " text-black" : " text-white")}
                    transition = {{
                        delay: delay
                    }}
                >
                    <NavbarItem url="#mission" text="Mission" delay={delay}></NavbarItem>
                    <NavbarItem url="#product" text="Product" delay={delay}></NavbarItem>
                    <NavbarItem url="#contact" text="Contact" delay={delay+stagger}></NavbarItem>
                </motion.div>
            </div>
        </motion.div>
    )
}