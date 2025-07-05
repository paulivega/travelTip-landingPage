import Logo from "./logo";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="brightness-0 invert mb-4">
              <Logo className="h-8" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              TravelTip utiliza inteligencia artificial para crear itinerarios de viaje personalizados 
              que se adaptan perfectamente a las necesidades de tu grupo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-travel-turquoise transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-travel-turquoise transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-travel-turquoise transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-travel-turquoise transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("como-funciona")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ¿Cómo funciona?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("caracteristicas")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Características
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <div className="space-y-2">
              <a 
                href="mailto:informaciontraveltip@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                <Mail className="mr-2 h-4 w-4" />
                informaciontraveltip@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 TravelTip. Todos los derechos reservados. Hecho con ❤️ para viajeros.
          </p>
        </div>
      </div>
    </footer>
  );
}
