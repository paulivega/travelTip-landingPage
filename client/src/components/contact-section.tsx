import { Button } from "@/components/ui/button";
import { Mail, BarChart3, Rocket, Send } from "lucide-react";

export default function ContactSection() {
  const scrollToEmailSignup = () => {
    const element = document.getElementById("email-signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          ¿Tienes preguntas? ¡Hablemos!
        </h2>
        <p className="text-xl text-travel-gray mb-12">
          Estamos aquí para responder todas tus dudas sobre TravelTip y ayudarte a planificar 
          el viaje de tus sueños.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-travel-turquoise text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Escríbenos</h3>
            <p className="text-travel-gray mb-6">
              Contáctanos directamente y te responderemos en menos de 24 horas.
            </p>
            <a 
              href="mailto:informaciontraveltip@gmail.com"
              className="inline-flex items-center text-travel-turquoise font-semibold hover:text-travel-blue transition-colors"
            >
              <Send className="mr-2 h-5 w-5" />
              informaciontraveltip@gmail.com
            </a>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="bg-travel-coral text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Encuesta</h3>
            <p className="text-travel-gray mb-6">
              Ayúdanos a crear la mejor experiencia de viaje respondiendo nuestra encuesta.
            </p>
            <a 
              href="https://forms.gle/3xoMcvpVkhSvSdpz7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-travel-coral font-semibold hover:text-travel-orange transition-colors"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Participar en la encuesta
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-travel-turquoise/10 to-travel-coral/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para revolucionar tus viajes?
          </h3>
          <p className="text-travel-gray mb-6">
            Únete a miles de viajeros que ya confían en la inteligencia artificial 
            para crear experiencias inolvidables.
          </p>
          <Button 
            onClick={scrollToEmailSignup}
            className="bg-travel-coral text-white hover:bg-travel-coral/90"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Comenzar ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
