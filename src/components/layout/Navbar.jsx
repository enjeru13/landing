import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_LINKS } from "../../data/content";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#15171b]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="px-4 md:px-10 mx-auto max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 text-text-main dark:text-white group"
          >
            <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight">
              TechAgency
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors relative group"
                >
                  {link.name}
                  {/* Pequeña línea animada bajo el link */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <Button variant="small" className="shadow-none hover:shadow-lg">
              Empezar Proyecto
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu (Full Screen Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#15171b] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-text-main dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full justify-center mt-4">
                Empezar Proyecto
              </Button>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
