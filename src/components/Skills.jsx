 import {RiReactjsLine} from "react-icons/ri"
 import { FaPython } from "react-icons/fa";
 import { FaJava } from "react-icons/fa";
 import { SiPandas } from "react-icons/si";
 import { TbSql } from "react-icons/tb";
 import {motion} from "framer-motion"


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
    transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
    },
},

})



 const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">

     <motion.h1
     whileInView={{opacity: 1, y: 0}}
     initial = {{opacity:0, y: -100}}
     transition={{duration: 2.0}} 
     className="my-20 text-center text-4xl font-thin tracking-tight">Skills
     </motion.h1>
     <motion.div 
     whileInView={{opacity: 1, x:0}} 
     initial={{opacity:0, x:-100}}
     transition={{duration: 1.5}}
     className="flex flex-wrap items-center justify-center gap-4">
     <motion.div 
        variants={iconVariants(2.5)}
        initial= "initial"
        animate= "animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-gray-300"/>
         </motion.div>
         <motion.div 
          variants={iconVariants(3.0)}
          initial= "initial"
          animate= "animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaPython 
        className="text-7xl text-gray-300"/>
         </motion.div>  
         <motion.div 
          variants={iconVariants(5)}
          initial= "initial"
          animate= "animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaJava className="text-7xl text-gray-300"/>
         </motion.div>  
         <motion.div 
          variants={iconVariants(2)}
          initial= "initial"
          animate= "animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiPandas className="text-7xl text-gray-300"/>
         </motion.div>  
         <motion.div 
          variants={iconVariants(6)}
          initial= "initial"
          animate= "animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
        <TbSql className="text-7xl text-gray-300"/>
         </motion.div>     
        </motion.div>     
    </div>
  )
}

export default Skills
