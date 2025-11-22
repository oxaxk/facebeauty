import React from 'react';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}
          >
            Unser Team
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}
          >
            FACE BEAUTY BERLIN vereint mehrere spezialisierte Ärztinnen und Heilpraktikerinnen für Lippenunterspritzung, Russian Lips,
            Korrekturen sowie Permanent Make-up & Brows.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <div
            className="bg-white border rounded-2xl p-5 text-left shadow-sm"
            style={{ borderColor: '#F1E6DC' }}
          >
            <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#B08A6A' }}>
              Behandlung durch
            </p>
            <p className="font-semibold text-lg mb-1" style={{ color: '#4A331F' }}>
              Daria
            </p>
            <p className="text-sm opacity-80" style={{ color: '#4A331F' }}>
              Spezialisierte Heilpraktikerin für Russian Lips & Korrekturen.
            </p>
          </div>

          <div
            className="bg-white border rounded-2xl p-5 text-left shadow-sm"
            style={{ borderColor: '#F1E6DC' }}
          >
            <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#B08A6A' }}>
              Behandlung durch
            </p>
            <p className="font-semibold text-lg mb-1" style={{ color: '#4A331F' }}>
              Viktoria
            </p>
            <p className="text-sm opacity-80" style={{ color: '#4A331F' }}>
              Spezialisierte Heilpraktikerin mit Fokus auf natürliche, feminine Lippenformen.
            </p>
          </div>

          <div
            className="bg-white border rounded-2xl p-5 text-left shadow-sm"
            style={{ borderColor: '#F1E6DC' }}
          >
            <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#B08A6A' }}>
              Permanent Make-up durch
            </p>
            <p className="font-semibold text-lg mb-1" style={{ color: '#4A331F' }}>
              Tania
            </p>
            <p className="text-sm opacity-80" style={{ color: '#4A331F' }}>
              Heilpraktikerin spezialisiert auf Permanent Make-up & Brow-Design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
