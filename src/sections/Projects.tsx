import byProjectImg from "../assets/byProject.png";
import watermelonProjectImg from "../assets/watermelon.png";
import vendigigProjectImg from "../assets/vendigig.png";
import sdexProjectImg from "../assets/sdex.png";

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Blue Yonder – Planning Space",
    category: "Enterprise Web Application",
    description:
      "Developed reusable micro-frontend components for the Planning Space module of Blue Yonder’s Supply Chain Management platform. Integrated REST APIs and ensured high performance and scalability.",
    tech: "React, TypeScript, Redux, Material UI, Jest",
    image: byProjectImg,
  },
  {
    title: "Watermelon (Web & Mobile App)",
    category: "B2B E-Commerce Platform",
    description:
      "Built buyer, supplier, and admin modules for a B2B marketplace similar to Flipkart. Developed features for both web and mobile applications with shared business logic.",
    tech: "React, React Native, Redux, TypeScript",
    image: watermelonProjectImg,
  },
  {
    title: "Vendigig",
    category: "Sales Enablement Platform",
    description:
      "Contributed to a freelancer marketplace platform by developing features, fixing bugs, and implementing a logging framework to improve application monitoring.",
    tech: "React Native, Redux",
    image: vendigigProjectImg,
  },
  {
    title: "SDEX",
    category: "Secure Data Exchange System",
    description:
      "Developed interactive UI screens with smooth animations for a secure document exchange platform used by educational institutions.",
    tech: "HTML, SCSS, JavaScript",
    image: sdexProjectImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 max-w-7xl mx-auto bg-[#020617]"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-white">My Projects</h2>
        <p className="mt-2 text-red-400 italic">
          Some Of My Professional Works
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden rounded-xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              transition-all duration-500 ease-in-out
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]
            "
          >
            <span
              className="
                absolute top-0 left-0 h-1 w-full bg-red-500
                scale-x-0 group-hover:scale-x-100
                origin-left transition-transform duration-300
              "
            />

            <img
              src={project.image}
              alt={project.title}
              className="
    h-48 w-full object-cover rounded-t-xl
    transition-transform duration-500 ease-out
    group-hover:scale-105
  "
            />
            <div
              className="
    absolute inset-0 bg-black/20
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
  "
            />

            <div className="p-6 relative">
              <p className="text-sm text-red-400 mb-1">{project.category}</p>

              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <div
                className="
      transform translate-y-4 opacity-0
      group-hover:translate-y-0 group-hover:opacity-100
      transition-all duration-500 ease-out
    "
              >
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <p className="text-xs text-cyan-400">{project.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
