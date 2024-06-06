import { motion } from "framer-motion";
import {PROJECTS} from "../constants";
import resumeImg from "../assets/resume1.jpg";
const Resume = () => {
  return (
    <><div>
    <motion.h2 
whileInView={{opacity:1,y:0}}
initial={{opacity:0,y:-100}}
transition={{duration:0.5}}
className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent my-20 text-center ">My Resume</motion.h2>
</div >
<div className="mb-8 mx-6 flex flex-wrap lg:justify-center">
<motion.div 
                     whileInView={{opacity:1,x:0}}
                     initial={{opacity:0,x:-100}}
                     transition={{duration:0.5}}
                    className="w-full lg:w-1/4">
                        <img  src={resumeImg}
                        width={300}
                        height={300}
                        alt="resume"
                        className="mb-6 rounded"/>
      </motion.div>
      <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:100}}
       transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
      <a className="mb-10 font-semibold " href="https://drive.google.com/file/d/1d2j4ST_FkUa9IsglG2mhZxrmf1XSvOa1/view?usp=drive_link" target="_blank">View Resume</a>
        </motion.div>
      </div>
</>
    
    
   
  )
}

export default Resume
