 import aboutImg from "../assets/about.jpg"; 
 import {ABOUT_TEXT} from "../constants";
 import { motion } from "framer-motion";
 const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4"> 
         <motion.h1 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent my-20 text-center text-4xl">About
         <span className="text-neutral-500"> Me</span>
       </motion.h1>
       <div className="flex flex-wrap">
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8"> 
        <div className="flex items-center justify-center">
        <img className="rounded-2xl w-2/3 h-2/3" src={aboutImg} alt="about"/>
            </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/3">
              <div className="flex justify-center lg:justify-start">
                <p className="my-2 maxw-w-xl py-6">{ABOUT_TEXT}</p>
              </div>
            </motion.div>
       </div>
    </div>
  );
};

export default About;
