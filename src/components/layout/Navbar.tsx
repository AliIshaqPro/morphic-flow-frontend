
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-purple">
            ThemeMorphic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile />
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="ghost">Login</Button>
              <Button className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks: React.FC<{ mobile?: boolean }> = ({ mobile = false }) => {
  const linkClass = mobile
    ? "text-white hover:text-theme-blue transition-colors py-2"
    : "text-white hover:text-theme-blue transition-colors";

  return (
    <>
      <Link to="/themes" className={linkClass}>
        Themes
      </Link>
      <Link to="/builder" className={linkClass}>
        Theme Builder
      </Link>
      <Link to="/pricing" className={linkClass}>
        Pricing
      </Link>
      <Link to="/blog" className={linkClass}>
        Blog
      </Link>
      <Link to="/support" className={linkClass}>
        Support
      </Link>
    </>
  );
};

export default Navbar;
