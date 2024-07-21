import { CONTACT } from "../constants"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-l-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 2}}
        className="my-20 text-center text-4xl font-thin tracking-tight">Contact Me</motion.h2>
        <div className="flex items-center justify-center gap-4 text-5xl text-white">
        <a href="https://www.linkedin.com/in/aryan-barot-73092322b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com/aaronbarought" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
    </div>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: 100}}
        transition={{duration: 1}}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
        

      </div>
    </div>
  )
}

export default Contact
