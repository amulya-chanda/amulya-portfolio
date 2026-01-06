import { motion } from "framer-motion";
import divamiLogo from "../assets/divami.png";
import blueYonderLogo from "../assets/BYLogo.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-[#020617] to-[#0b1020] text-white px-6 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light italic text-center mb-16"
        >
          My Experiences
        </motion.h2>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.01 }}
            className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 top-0 w-1 bg-red-500"
            />

            <div className="p-8 md:p-12 grid md:grid-cols-4 gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="w-24 h-24 rounded-xl bg-black/40 flex items-center justify-center">
                  <img
                    src={divamiLogo}
                    alt="Divami Design Labs"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-semibold text-red-400">
                  Divami Design Labs
                </h3>

                <p className="text-sm text-red-300">
                  Software Engineer | Dec 2022 – Present
                </p>

                <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2 pt-2">
                  <li>
                    Frontend Engineer with{" "}
                    <span className="text-white">3+ years of experience</span>
                    building scalable and user-centric web applications.
                  </li>
                  <li>
                    Contributed to multiple enterprise-grade web and mobile
                    applications, delivering scalable, high-performance, and
                    user-centric solutions using modern frontend technologies
                    like.
                    <span className="text-white">
                      {" "}
                      React, TypeScript, Redux, HTML, SCSS
                    </span>
                    .
                  </li>
                  <li>
                    Collaborated closely with designers, backend engineers, and
                    product managers in an Agile environment.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.01 }}
            className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 top-0 w-1 bg-red-500"
            />

            <div className="p-8 md:p-12 grid md:grid-cols-4 gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="w-32 h-40 md:w-36 md:h-44 rounded-xl bg-black/40 flex items-center justify-center">
                  <img
                    src={blueYonderLogo}
                    alt="Blue Yonder"
                    className="w-20 h-32 md:w-24 md:h-40 object-contain"
                  />
                </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-semibold text-red-400">
                  Blue Yonder
                </h3>

                <p className="text-sm text-red-300">
                  Software Engineer – Frontend | Product-Based Company
                </p>

                <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2 pt-2">
                  <li>
                    Worked for Blue Yonder, a leading product-based company as a
                    Contract worker, contributing to enterprise applications
                    with{" "}
                    <span className="text-white"> 1+ year of experience</span>
                  </li>
                  <li>
                    Contributed to the{" "}
                    <span className="text-white">Planning Space module </span>
                    of a large-scale supply chain management application.
                  </li>
                  <li>
                    Built and enhanced features using
                    <span className="text-white">
                      {" "}
                      React, Redux, and TypeScript
                    </span>
                    .
                  </li>
                  <li>
                    Focused on performance, scalability, and clean code
                    following modern frontend best practices.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
