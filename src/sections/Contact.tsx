const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 max-w-6xl mx-auto bg-[#020617]"
    >
      <h2 className="text-center text-4xl font-light text-white mb-16">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>

      <div
        className="
          relative rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          transition-all duration-500 ease-in-out
          hover:-translate-y-2
          hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]
          p-10 text-center
        "
      >
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          I’m always open to discussing new opportunities, frontend roles, or
          interesting projects. Let’s connect!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:amulyachanda205@gmail.com?subject=Portfolio%20Contact&body=Hi%20Amulya,%0A%0AI%20would%20like%20to%20connect%20regarding%20..."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-lg
              bg-red-500 text-white font-medium
              transition-all duration-300
              hover:bg-red-600 hover:scale-105
            "
          >
            Message on Gmail
          </a>
          <a
            href="https://www.linkedin.com/in/amulya-ch-995450213/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-lg
              border border-cyan-400 text-cyan-400 font-medium
              transition-all duration-300
              hover:bg-cyan-400 hover:text-black hover:scale-105
            "
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
