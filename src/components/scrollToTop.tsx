import { useEffect, useState } from "react";
import scrollTopIcon from "../assets/arrow.png";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        flex items-center justify-center
        w-12 h-12 rounded-xl
        bg-[#e74c3c]
        shadow-lg
        transition-all duration-300 ease-out
        hover:scale-110
        cursor-pointer
        ${
          visible
            ? "opacity-100 translate-y-0 pulse"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      {/* <img src={} alt="Scroll to top" className="w-6 h-6" /> */}
      <ArrowUp size={22} className="text-white" />
    </button>
  );
};

export default ScrollToTop;
