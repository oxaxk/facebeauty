export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Aylin K.',
      rating: 5,
      text: 'Meine Russian Lips sind perfekt geworden – volle, aber natürliche Form. Schwellung ging schnell zurück. 10/10.',
      image: null
    },
    {
      name: 'Svetlana P.',
      rating: 5,
      text: 'Ich hatte asymmetrische Lippen. Die Korrektur war unglaublich professionell. Endlich perfekte Form.',
      image: null
    },
    {
      name: 'Meryem A.',
      rating: 5,
      text: 'Sehr sanfte Behandlung. Die Artistin hat mir alles erklärt und genau nach Wunsch umgesetzt.',
      image: null
    },
    {
      name: 'Lara N.',
      rating: 5,
      text: 'Meine 0,5 ml sehen so natürlich aus. Genau das, was ich wollte. Studio ist super sauber.',
      image: null
    },
    {
      name: 'Daria S.',
      rating: 5,
      text: 'Ich komme extra aus Potsdam her. Ergebnisse jedes Mal perfekt, besonders Russian Lips.',
      image: null
    },
    {
      name: 'Olga M.',
      rating: 5,
      text: 'Korrektur + neue Form = beste Entscheidung. Endlich keine alten Klumpen mehr. Sehr professionell.',
      image: null
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F4E8D0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
            Was Kundinnen über ihre Lippenbehandlung sagen
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}>
            Echte Erfahrungen zu Russian Lips, Lippenaufbau & Korrekturen – klare Ergebnisse, natürliche Formen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <i className="ri-user-line text-xl text-gray-400"></i>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: '#4A331F' }}>{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400"></i>
                    ))}
                  </div>
                </div>
              </div>
              
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }} className="opacity-80 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex mr-4">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-2xl" style={{ color: '#4A331F' }}>4.9/5</div>
              <div className="text-sm opacity-80" style={{ color: '#4A331F' }}>Google Reviews – Lippenbehandlungen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
