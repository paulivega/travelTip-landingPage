import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      initial: "M",
      bgColor: "bg-travel-turquoise",
      testimonial: "Planificar un viaje con tres niños era una pesadilla. TravelTip creó un itinerario perfecto que mantuvo a toda la familia entretenida. ¡Increíble!"
    },
    {
      name: "Juan Carlos",
      role: "Aventurero",
      initial: "J",
      bgColor: "bg-travel-coral",
      testimonial: "Como mochilero, pensé que no necesitaba ayuda para planificar. TravelTip me mostró lugares increíbles que nunca habría descubierto solo."
    },
    {
      name: "Ana & Pedro",
      role: "Pareja",
      initial: "A",
      bgColor: "bg-travel-orange",
      testimonial: "Nuestra luna de miel fue perfecta gracias a TravelTip. Cada día tenía el equilibrio perfecto entre romance y aventura. ¡Recomendado al 100%!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros viajeros</h2>
          <p className="text-xl text-travel-gray max-w-3xl mx-auto">
            Experiencias reales de personas que han transformado sus viajes con TravelTip
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-travel-gray text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-travel-gray leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
