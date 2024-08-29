import { useRevealOnView } from "../lib/animConstants";
import {  fontMono, fontMonoBold } from "../lib/styles";
import { motion } from "framer-motion";



export function InfoTag({id, tag, className=""} : {id: number, tag: string, className?: string}) {
    return (
        <motion.div className={`
            flex items-center text-primary  ` + className}
        >
            <h1
                className={"text-2xl " + fontMonoBold.className}
            >{tag}</h1>
        </motion.div>
    )
}

export function SectionHeading({
    children,
    className=""
  }: Readonly<{
    children: React.ReactNode;
    className?: string
  }>) {
    

    return (
        <motion.h1
            className={fontMonoBold.className + " text-6xl mt-4 mb-10 "+ className}
        >{children}</motion.h1>
    )
  }

export function SectionParagraph({
    children,
    className
  }: Readonly<{
    children: React.ReactNode;
    className?: string
  }>) {
    return (
        <p className={className + " text-left text-2xl " + fontMono.className}>
            {children}
        </p>
    )
}

export default function Section({
    children,
    className=""
  }: Readonly<{
    children: React.ReactNode;
    className?: string
  }>) {

    const scope = useRevealOnView();
    return (
        <div
            className={`
                px-40 min-w-full py-20
                box-border z-10 
                flex flex-col justify-center ` + className}
        >
            <motion.div 
                className="z-10 relative"
                ref={scope}>
                {children}
            </motion.div>
        </div>
    )
}