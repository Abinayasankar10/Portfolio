import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
const Education = () => {
    return(
    <div className="border-b border-neutral-900 pb-4">
    <motion.h2 
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0,y:-100}}
     transition={{duration:0.5}} className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  tracking-tight text-transparent my-20 text-center text-5xl">Education</motion.h2>
  <div>
  {EDUCATION.map((education,index)=>(
        <div key={index} className="mb-8 mx-6 flex flex-wrap lg:justify-center">
          <motion.div whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:1}} className="w-full lg:w-1/4"> 
          <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
  </motion.div>
  <motion.div  whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:100}}
       transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
    <h6 className="mb-2 font-semibold">
      {education.institute}
    </h6>
    <p className="mb-4 text-neutral-400">{education.description}</p>
    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{education.percentage}</span>
</motion.div>
</div>
 ))}
 </div>
 </div>
)
}

export default Education
