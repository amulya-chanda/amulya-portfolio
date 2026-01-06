import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#0b1020] to-[#020617] text-white px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              FRONTEND
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              DEVELOPER
            </span>
          </h1>

          <p className="text-gray-300 max-w-lg">
            I’m{" "}
            <span className="text-primary font-semibold">Amulya Chanda</span>, A
            Frontend Developer who enjoys crafting responsive user interfaces
            and staying updated on the latest web technologies to enhance the
            user experience.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/amulya-ch-995450213/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.135 1.445-2.135 2.938v5.668H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.6 0 4.267 2.37 4.267 5.451v6.292zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.51 20.452H3.164V9h3.346v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.206 24 24 23.226 24 22.271V1.729C24 .774 23.206 0 22.225 0z" />
              </svg>
            </a>

            <a
              href="https://github.com/amulya-chanda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <title>GitHub</title>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          <a
            href="/AmulyaResume.docx"
            download="AmulyaResume.docx"
            className="inline-block mt-4 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:border-white hover:text-white transition"
          >
            Download My CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-500 blur-2xl opacity-40" />
            <img
              src={profileImg}
              alt="Amulya Chanda"
              className="relative w-72 h-80 md:w-96 md:h-[28rem] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
