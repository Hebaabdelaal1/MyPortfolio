import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaAngular, FaReact, FaGithub, FaSass, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFirebase, SiNextdotjs, SiMaterialdesign } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "95%", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS", level: "90%", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", level: "85%", icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: "TypeScript", level: "80%", icon: <SiTypescript className="text-blue-400 text-2xl" /> },
  { name: "Angular", level: "85%", icon: <FaAngular className="text-red-600 text-2xl" /> },
  { name: "React", level: "90%", icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: "React Native", level: "80%", icon: <FaReact className="text-indigo-400 text-2xl" /> },
  { name: "Material-UI", level: "90%", icon: <SiMaterialdesign className="text-blue-300 text-2xl" /> },
  { name: "Tailwind CSS", level: "85%", icon: <SiTailwindcss className="text-teal-400 text-2xl" /> },
  { name: "GitHub", level: "90%", icon: <FaGithub className="text-gray-300 text-2xl" /> },
  { name: "SASS", level: "80%", icon: <FaSass className="text-pink-400 text-2xl" /> },
  { name: "Bootstrap", level: "85%", icon: <FaBootstrap className="text-purple-500 text-2xl" /> },
  { name: "Firebase", level: "75%", icon: <SiFirebase className="text-yellow-500 text-2xl" /> },
  { name: "REST APIs", level: "80%", icon: <MdApi className="text-green-400 text-2xl" /> },
  { name: "Next.js", level: "70%", icon: <SiNextdotjs className="text-white text-2xl" /> },
];

const Aboutme = () => {
  return (
<section id="about" className="bg-gray-900 text-gray-300 min-h-screen px-6 md:px-20 flex flex-col justify-start">


<motion.div
  className="max-w-3xl text-left space-y-6 mt-10"
  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2 }} 
>
  <h1 className="text-xl md:text-6xl font-extrabold text-white">
    I'm <span className="text-indigo-400 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Heba Abdelaal</span>
  </h1>

  <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
    Frontend Developer
  </h2>

  <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
    Passionate Front-End Developer skilled in <span className="text-indigo-400 font-semibold">Angular</span>, <span className="text-cyan-400 font-semibold">React</span>, 
    and web technologies including HTML, CSS, JavaScript, and TypeScript. I specialize in building responsive, user-friendly web applications with clean, efficient code and dynamic interfaces. With experience in React Native and Material-UI, I strive to deliver seamless user experiences while continuously learning and growing in the field of web development.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-start">
    <a
      href="/public/CV/Heba Abdelaal Abdelgaber.pdf"
      download
      className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
    >
      Download CV
    </a>
    <a
      href="#contact"
      className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition"
    >
      Contact Me
    </a>
  </div>
</motion.div>



<section  className="py-16 bg-gray-900 text-white">
  <div className="max-w-5xl mx-auto px-6">
    <motion.div

  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2 }} 
>

        <h2  className="text-4xl font-extrabold text-center mb-12"> 
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
            Education
          </span>
    </h2>


    <div className="grid md:grid-cols-2 gap-8">
      

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <p className="text-sm text-indigo-400 font-medium mb-2">
          Dec 2024 – Apr 2025
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">
          Information Technology Institute (ITI), Sohag Branch
        </h3>
        <p className="text-gray-300">
           Sohag – Egypt  
          <br />
          Intensive Code Camp – <span className="text-indigo-300 font-semibold">Front-End and Cross-Platform Mobile Development</span>
        </p>
      </div>


      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <p className="text-sm text-indigo-400 font-medium mb-2">
          Dec 2023 – Apr 2024
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">
          Information Technology Institute (ITI), Sohag Branch
        </h3>
        <p className="text-gray-300">
           Sohag – Egypt  
          <br />
          Intensive Code Camp – <span className="text-indigo-300 font-semibold">Full-Stack Web Development using .NET</span>
        </p>
      </div>

    </div>
</motion.div>
  </div>
  
</section>


    <motion.div

  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2}} 
>
  <div id='skills' className="max-w-7xl  pt-8 px-4">
    <h2  className="text-4xl font-extrabold text-center mb-12"> 
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
            Skills
          </span>
        </h2>

  <p className="mb-10 text-gray-400 text-center">
    A focused stack for building fast, accessible, pixel–perfect interfaces.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
    {skills.map((skill, i) => (
      <div
        key={i}
        className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full h-full"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {skill.icon}
            <span className="text-white font-medium">{skill.name}</span>
          </div>
          <span className="text-blue-400 font-semibold">{skill.level}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: skill.level }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>
</motion.div>
    </section>
  );
};

export default Aboutme;
