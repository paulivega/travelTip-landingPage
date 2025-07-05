import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToEmailSignup = () => {
    const element = document.getElementById("email-signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("como-funciona")}
              className="text-gray-700 hover:text-travel-turquoise transition-colors"
            >
              ¿Cómo funciona?
            </button>
            <button 
              onClick={() => scrollToSection("caracteristicas")}
              className="text-gray-700 hover:text-travel-turquoise transition-colors"
            >
              Características
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-travel-turquoise transition-colors"
            >
              Contacto
            </button>
            <Button 
              onClick={scrollToEmailSignup}
              className="bg-travel-coral text-white hover:bg-travel-coral/90"
            >
              Mantente informado
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("como-funciona")}
              className="block w-full text-left text-gray-700 hover:text-travel-turquoise transition-colors"
            >
              ¿Cómo funciona?
            </button>
            <button 
              onClick={() => scrollToSection("caracteristicas")}
              className="block w-full text-left text-gray-700 hover:text-travel-turquoise transition-colors"
            >
              Características
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left text-gray-700 hover:text-travel-turquoise transition-colors"
            >
              Contacto
            </button>
            <Button 
              onClick={scrollToEmailSignup}
              className="w-full bg-travel-coral text-white hover:bg-travel-coral/90"
            >
              Mantente informado
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
