import { motion } from "framer-motion";
import aboutImg from "../assets/coding.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-[#020617] to-[#0b1020] text-white px-6 md:px-20 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={aboutImg}
              alt="Workspace"
              className="rounded-2xl shadow-2xl max-h-[420px] object-cover"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Professional Summary
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Software Engineer with over{" "}
              <span className="text-white font-medium">
                3 years of experience
              </span>{" "}
              in building responsive, high-performance, and user-focused web
              applications. I specialize in transforming complex requirements
              into clean, intuitive interfaces while writing scalable,
              maintainable, and performance-optimized code.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently working at{" "}
              <span className="text-white font-medium">
                Design Labs Private Limited
              </span>
              , where I specialize in developing scalable web applications using
              React, React Native, TypeScript and modern frontend technologies.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I have a strong eye for UI/UX and enjoy collaborating closely with
              designers and backend teams to deliver polished, production-ready
              features. I continuously stay up to date with evolving web
              standards and technologies.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
                <h4 className="text-3xl font-bold text-primary">3+</h4>
                <p className="text-gray-400 mt-1">Years Experience</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
                <h4 className="text-3xl font-bold text-primary">5+</h4>
                <p className="text-gray-400 mt-1">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
