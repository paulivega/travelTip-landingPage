import { MapPin, Users, Sparkles } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: MapPin,
      title: "1. Dinos tu destino",
      description: "Introduce dónde quieres viajar y las fechas de tu viaje. Nuestro sistema reconoce miles de destinos en todo el mundo.",
      bgColor: "bg-travel-turquoise"
    },
    {
      icon: Users,
      title: "2. Describe tu grupo",
      description: "Cuéntanos con quién viajas: familia, amigos, pareja. Especifica edades, intereses y necesidades especiales.",
      bgColor: "bg-travel-coral"
    },
    {
      icon: Sparkles,
      title: "3. Recibe tu itinerario",
      description: "Nuestra IA genera un itinerario personalizado con actividades, restaurantes y experiencias perfectas para tu grupo.",
      bgColor: "bg-travel-orange"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-travel-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Cómo funciona TravelTip?</h2>
          <p className="text-xl text-travel-gray max-w-3xl mx-auto">
            Nuestra inteligencia artificial analiza tus preferencias y crea el itinerario perfecto en segundos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${step.bgColor} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-travel-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
