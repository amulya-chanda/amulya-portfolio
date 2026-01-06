import frontEndImg from "../assets/frontEnd.png";
import programmingImg from "../assets/programming.png";
import webTechImg from "../assets/webTechnologies.png";

const skills = [
  {
    title: "Front-end Development",
    description:
      "Expertise in building scalable and responsive user interfaces using React, TypeScript, and modern frontend tools.",
    image: frontEndImg,
  },
  {
    title: "Web Technologies",
    description:
      "Hands-on experience with HTML, CSS, SCSS, JavaScript, Webpack, Vite, Jest, and WebDriverIO.",
    image: webTechImg,
  },
  {
    title: "Competitive Programming",
    description:
      "Strong problem-solving skills developed through algorithmic challenges, focusing on time complexity, optimization, and clean logic.",
    image: programmingImg,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 max-w-6xl mx-auto bg-[#020617]"
    >
      <h2 className="text-center text-4xl font-light text-white mb-16">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      <div className="space-y-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden rounded-xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              transition-all duration-500 ease-in-out
              max-h-[150px] hover:max-h-[220px]
              hover:-translate-y-2
            "
          >
            <span
              className="
                absolute top-0 left-0 h-1 w-full
                bg-red-500
                scale-x-0 group-hover:scale-x-100
                origin-left
                transition-transform duration-300
              "
            />

            <div className="p-8 flex gap-6">
              <img
                src={skill.image}
                alt={skill.title}
                className="w-20 h-20 object-contain shrink-0"
              />

              <div>
                <h3
                  className="
                    text-2xl font-semibold text-white
                    transition-colors duration-300
                    group-hover:text-red-400
                  "
                >
                  {skill.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
