import { Button } from "@/components/ui/button";
import { Mail, Send, BarChart3 } from "lucide-react";

export default function HeroSection() {
  const scrollToEmailSignup = () => {
    const element = document.getElementById("email-signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 from-travel-blue/80 to-travel-turquoise/70 bg-[#00000045]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Planifica tu viaje perfecto<br />
          <span className="text-travel-coral">con Inteligencia Artificial</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Dinos dónde quieres ir, con quién viajas y genera automáticamente un itinerario personalizado 
          lleno de actividades perfectas para tu grupo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToEmailSignup}
            className="bg-travel-coral text-white px-8 py-4 text-lg font-semibold hover:bg-travel-coral/90 transition-all transform hover:scale-105 shadow-lg"
            style={{display: 'none'}}
          >
            <Mail className="mr-2 h-5 w-5" />
            Mantente informado
          </Button>
          <Button 
            variant="outline"
            asChild
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white px-8 py-4 text-lg font-semibold hover:bg-white/30 transition-all"
          >
            <a href="mailto:informaciontraveltip@gmail.com">
              <Send className="mr-2 h-5 w-5" />
              Contáctanos
            </a>
          </Button>
        </div>
        
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-lg mb-4 text-[#3b3030]">
            <BarChart3 className="inline mr-2 h-5 w-5 text-travel-coral" />
            Acabamos de lanzar una encuesta para conocer mejor tus necesidades de viaje. 
            ¡Únete a nuestra comunidad para recibir actualizaciones!
          </p>
          <Button 
            asChild
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all"
          >
            <a href="https://forms.gle/3xoMcvpVkhSvSdpz7" target="_blank" rel="noopener noreferrer">
              <BarChart3 className="mr-2 h-5 w-5" />
              Participar en la encuesta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
