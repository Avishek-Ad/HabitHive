import { motion } from "framer-motion";
import aboutImage from "../../assets/AboutUsImage.webp";
import { useContext } from "react";
import { scrollState } from "../../context/ScrollContext";

function AboutUs() {
  const { aboutRef } = useContext(scrollState);
  return (
    <motion.div ref={aboutRef} initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Team Image Placeholder */}
          <div className="w-3/4 sm:w-full lg:w-1/2 bg-gray-100 h-64 sm:h-80 rounded-lg flex items-center justify-center">
            <img
              src={aboutImage}
              alt="Team Image"
              className="w-full h-full rounded"
            />
          </div>

          {/* Mission Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              At HabitHive, we're passionate about helping people build lasting
              positive habits. Our platform is designed to make habit tracking
              simple, engaging, and effective.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-blue-500 text-xl">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span className="text-gray-700">Founded in 2025</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 text-xl">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span className="text-gray-700">1M+ Active Users</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 text-xl">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span className="text-gray-700">Global Community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
