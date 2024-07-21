import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
// import {FaSquareXTwitter} from "react-icons/fa"
import { FaBeer } from 'react-icons/fa';
const Navbar = () => {
  return (
  <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <h1 className="text-3xl font-thin bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text tracking-tight text-transparent">AB</h1>
        {/* <img src={logo} alt="logo" /> */}
    </div>
    <div className="flex items-center justify-center gap-4 text-3xl text-white">
        <a href="https://www.linkedin.com/in/aryan-barot-73092322b/" target="_blank" rel="noopener noreferrer">
          
          <FaLinkedin />
          </a>
        <a href="https://github.com/aaronbarought" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
    </div>
  </nav>
  )
}

export default Navbar
