import {RiReactjsLine} from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa"; 
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaC } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
    duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
        className="bg-gradient-to-r from-violet-500 via-slate-400 to-green-500 bg-clip-text  tracking-tight text-transparent my-20 mx-6 text-center text-5xl">Technologies</motion.h1>      
      <motion.div
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
           <a href="https://react.dev/"target="_blank"><RiReactjsLine className="text-5xl text-cyan-400"/></a> 
        </motion.div >
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"target="_blank"></a> <FaHtml5 className="text-5xl text-red-500"/>
        </motion.div >
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"target="_blank"></a>  <FaCss3 className="text-5xl text-blue-400"/>
        </motion.div >
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
             <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"target="_blank"></a><FaJs className="text-5xl text-yellow-300"/>
        </motion.div >
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
           <a href="https://www.python.org/" target="_blank"><FaPython className="text-5xl text-blue-600"/></a>
        </motion.div >
        <motion.div  
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <a href="https://en.cppreference.com/w/c/language"target="_blank"></a> <FaC className="text-5xl text-white-600"/>
        </motion.div >
        <motion.div  
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <a href="https://dev.mysql.com/doc/" target="_blank"><FaDatabase className="text-5xl text-purple-400"/></a> 
        </motion.div >
       </motion.div> 
    </div>
  )
}

export default Technologies
