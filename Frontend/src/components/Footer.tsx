import { motion } from "framer-motion";
import { GiHabitatDome } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col justify-center items-center gap-5 bg-neutral-900 pt-10 text-gray-400 text-base">
      <div className="flex justify-between w-11/12 sm:w-3/4 gap-2">
        <div>
          <div className="flex gap-2 items-center mb-5">
            <GiHabitatDome className="w-8 h-8 text-white" />
            <h1 className="text-white font-medium">HabitHive</h1>
          </div>
          <p>Build better habits, one day at a time.</p>
        </div>
        <div>
          <h1 className="text-white font-medium mb-5">Product</h1>
          <h1>Features</h1>
          <h1>Pricing</h1>
          <h1>FAQ</h1>
        </div>
        <div>
          <h1 className="text-white font-medium mb-5">Company</h1>
          <h1>About</h1>
          <h1>Blog</h1>
          <h1>Careers</h1>
        </div>
        <div>
          <h1 className="text-white font-medium mb-5">Connect</h1>
          <div className="flex gap-2 text-white sm:flex-row flex-col flex-justify-center items-center">
            <FaXTwitter className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaLinkedin className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="border-t-2 border-slate-600 w-3/4 text-center py-5">
        <p> © {new Date().getFullYear()} HabitHive. All rights reserved.</p>
      </div>
    </motion.div>
  );
}

export default Footer;
