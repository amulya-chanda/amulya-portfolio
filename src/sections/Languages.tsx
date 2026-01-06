import { motion } from "framer-motion";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "React", icon: "/react.svg" },
  { name: "React Native", icon: "/nativescript.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "HTML", icon: "/html5.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "SCSS", icon: "/sass.svg" },
  { name: "Jest", icon: "/jest.svg" },
  { name: "Vite", icon: "/vite.svg" },
  { name: "WebDriverIO", icon: "/webdriverio.svg" },
  { name: "Webpack", icon: "/webpack.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "GitHub", icon: "/github.svg" },
];

const Languages = () => {
  return (
    <section
      id="technologies"
      className="min-h-screen bg-gradient-to-b from-[#020617] to-[#0b1020] text-white px-6 md:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Technologies
          <span className="block w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 place-items-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center
                border border-transparent group-hover:border-red-500
                transition-all duration-300 shadow-lg"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <p className="mt-4 text-gray-300 group-hover:text-white transition">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
