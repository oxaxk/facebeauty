export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Analyse & Beratung',
      description: 'Gemeinsame Bewertung Ihrer Lippenform, Anatomie und gewünschten Ergebnisse.',
      icon: 'ri-search-eye-line'
    },
    {
      number: '02',
      title: 'Form- & Volumenplanung',
      description: 'Wir bestimmen die ideale Technik (z. B. Russian Lips) und Menge (0,5–2 ml).',
      icon: 'ri-pencil-ruler-line'
    },
    {
      number: '03',
      title: 'Injektionstechnik',
      description: 'Präzise, schonende Behandlung mit hochwertigen Fillern (Stylage/Juvederm).',
      icon: 'ri-hearts-line'
    },
    {
      number: '04',
      title: 'Aftercare & Kontrolle',
      description: 'Pflegehinweise, Abschwell-Tipps & optionaler Kontrolltermin nach Bedarf.',
      icon: 'ri-hand-heart-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
            Ablauf Ihrer Lippenbehandlung
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}>
            Klar strukturierter Ablauf für natürliche, feminine und harmonische Lippen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-white border-2 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ borderColor: '#4A331F' }}>
                  <i className={`${step.icon} text-2xl`} style={{ color: '#4A331F' }}></i>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
                {step.title}
              </h3>
              
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }} className="opacity-80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="https://wa.me/491727984521"
            className="inline-flex items-center px-8 py-4 bg-white border-2 font-semibold text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
            style={{ borderColor: '#4A331F', color: '#4A331F' }}
          >
            <i className="ri-calendar-line mr-3 text-xl"></i>
            WhatsApp-Beratung anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
