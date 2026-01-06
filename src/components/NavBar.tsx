import { useState } from "react";
import { motion } from "framer-motion";

const sections: string[] = [
  "home",
  "about",
  "technologies",
  "experience",
  "skills",
  "projects",
  "contact",
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full bg-black text-white z-50"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-primary font-bold text-lg">Amulya Chanda</h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {sections.map((s) => (
            <li
              key={s}
              onClick={() => scrollTo(s)}
              className="cursor-pointer hover:text-primary capitalize"
            >
              {s}
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-black px-6 pb-6 space-y-4">
          {sections.map((s) => (
            <li
              key={s}
              onClick={() => scrollTo(s)}
              className="cursor-pointer hover:text-primary capitalize"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
