import { Brain, Heart, Check } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Inteligencia Artificial Avanzada",
      description: "Nuestro algoritmo analiza millones de datos de viajes, reseñas y preferencias para crear el itinerario perfecto que se adapta a las necesidades únicas de tu grupo.",
      points: [
        "Análisis de preferencias grupales",
        "Optimización de rutas y tiempos",
        "Recomendaciones personalizadas"
      ],
      bgColor: "bg-travel-turquoise/10",
      iconColor: "bg-travel-turquoise",
      checkColor: "text-travel-turquoise",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Heart,
      title: "Experiencias Grupales Únicas",
      description: "Creamos experiencias que unen a tu grupo. Desde aventuras familiares hasta escapadas románticas, cada itinerario está diseñado para crear recuerdos inolvidables.",
      points: [
        "Actividades para todas las edades",
        "Equilibrio perfecto entre aventura y relajación",
        "Experiencias locales auténticas"
      ],
      bgColor: "bg-travel-coral/10",
      iconColor: "bg-travel-coral",
      checkColor: "text-travel-coral",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Características que te van a encantar</h2>
          <p className="text-xl text-travel-gray max-w-3xl mx-auto">
            Descubre por qué TravelTip es la revolución en la planificación de viajes
          </p>
        </div>
        
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`${feature.bgColor} rounded-2xl p-8`}>
                  <div className="flex items-center mb-6">
                    <div className={`${feature.iconColor} text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-travel-gray text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center text-travel-gray">
                        <Check className={`${feature.checkColor} mr-3 h-5 w-5`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
