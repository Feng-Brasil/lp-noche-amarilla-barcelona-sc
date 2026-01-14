export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ffffff] font-sans selection:bg-[#ffcc00] selection:text-[#000000]">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-4 border-[#ffcc00]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-transparent z-10" />
          <img 
            src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/assets/img/Home_Deslogada_2024/bg-scroll-3.png" 
            alt="Estadio Monumental" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/assets/img/socios-logo-amarelo.svg" 
              alt="Socios BSC Logo" 
              className="h-24 md:h-32 w-auto drop-shadow-2xl"
            />
          </div>
          <div className="inline-block bg-[#ffcc00] text-[#000000] px-4 py-1 font-bold uppercase tracking-widest mb-6 rounded-sm">
            SE VIENE LA
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-[#ffcc00] mb-4 drop-shadow-2xl">
            NOCHE <span className="text-white">AMARILLA</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-medium text-[#999999] mb-10 leading-relaxed">
            ¡La fiesta del <span className="text-[#ffcc00]">Ídolo del Ecuador</span> te espera!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#unirse" 
              className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-black px-10 py-5 rounded-none uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,0,0,0.4)]"
            >
              Hacerme socio y vivir la Noche Amarilla
            </a>
          </div>
        </div>
      </section>

      {/* DESTAQUES DO EVENTO */}
      <section className="py-24 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic text-[#ffcc00] mb-4">Lo que te espera en nuestra casa</h2>
            <div className="h-1 w-24 bg-[#ff0000] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-[#ffcc00] bg-[#171717] hover:bg-[#1f1f1f] transition-colors">
              <span className="text-4xl mb-4 block">⚽</span>
              <h3 className="text-2xl font-bold mb-3 text-white">Presentación Oficial</h3>
              <p className="text-[#999999]">Conoce de cerca a las nuevas incorporaciones y al plantel que representará a la institución en los torneos de esta temporada.</p>
            </div>
            <div className="p-8 border-l-4 border-[#ffcc00] bg-[#171717] hover:bg-[#1f1f1f] transition-colors">
              <span className="text-4xl mb-4 block">⭐</span>
              <h3 className="text-2xl font-bold mb-3 text-white">Estrella Mundial</h3>
              <p className="text-[#999999]">Barcelona recebe a un crack mundial que se pone la amarilla para jugar con nosotros. Prepárate para una noche histórica que solo Barcelona te puede dar.</p>
            </div>
            <div className="p-8 border-l-4 border-[#ffcc00] bg-[#171717] hover:bg-[#1f1f1f] transition-colors">
              <span className="text-4xl mb-4 block">🎤</span>
              <h3 className="text-2xl font-bold mb-3 text-white">Show Especial</h3>
              <p className="text-[#999999]">Artistas internacionales, sorpresas y un show de fuegos artificiales para celebrar nuestra pasión. ¡Será una locura que nadie querrá que le cuenten!</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA EXCLUSIVA PARA SÓCIOS */}
      <section className="py-24 border-y border-[#333333]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1000" 
              alt="Afición Barcelona SC" 
              className="rounded-lg shadow-[20px_20px_0px_0px_rgba(255,204,0,1)] border border-[#ffcc00]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black uppercase italic text-[#ffcc00] mb-6">El privilegio de ser SOCIO BSC</h2>
            <p className="text-xl text-[#999999] mb-8 leading-relaxed">
              La Noche Amarilla es para todos, pero la experiencia completa es <span className="text-white font-bold italic underline decoration-[#ff0000]">exclusiva</span> para quienes llevan el club en la sangue.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-lg font-bold">
                <span className="text-[#ffcc00]">✓</span> Acceso asegurado a los partidos de LigaPro y Copa Ecuador
              </li>
              <li className="flex items-center gap-3 text-lg font-bold">
                <span className="text-[#ffcc00]">✓</span> Descuentos especiales en indumentaria y produtos oficiais
              </li>
              <li className="flex items-center gap-3 text-lg font-bold">
                <span className="text-[#ffcc00]">✓</span> Grandes beneficios en nuestra red de comercios aliados
              </li>
              <li className="flex items-center gap-3 text-lg font-bold">
                <span className="text-[#ffcc00]">✓</span> Experiencias únicas y exclusivas junto al Ídolo del Astillero
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROVAS DE VALOR (QUARTO SCROLL) */}
      <section className="py-24 bg-[#ffcc00] text-[#000000]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">PASA DE SER HINCHA A SER SOCIO</h2>
            <p className="text-xl font-bold opacity-80 uppercase tracking-widest italic">Únete a la familia más grande del Ecuador</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Pertenecer", desc: "Formar parte oficial de la historia del Club" },
              { title: "Prioridad", desc: "Asegura tu lugar en todos los partidos de local de LigaPro y Copa Ecuador" },
              { title: "Beneficios", desc: "Más de 10 marcas aliadas con descuentos exclusivos" },
              { title: "Protagonismo", desc: "Voz y voto como parte del Ídolo (desde el 2do año)" }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/5 p-6 border-2 border-black/10 rounded-sm">
                <h4 className="text-2xl font-black mb-2 italic uppercase">{item.title}</h4>
                <p className="font-bold leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="unirse" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ff0000]/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic text-white mb-8 drop-shadow-lg">
            ¿LISTO PARA HACER <span className="text-[#ffcc00]">HISTORIA?</span>
          </h2>
          <p className="text-2xl md:text-3xl font-medium text-[#999999] mb-12 max-w-3xl mx-auto italic">
            No dejes que te lo cuenten. Sé protagonista de la Noche Amarilla y del futuro del Ídolo.
          </p>
          <a 
            href="#" 
            className="inline-block bg-[#ffcc00] hover:bg-white text-black text-2xl font-black px-16 py-8 uppercase tracking-widest transition-all shadow-[0_10px_40px_rgba(255,204,0,0.3)]"
          >
            Hacerme socio ahora →
          </a>
          <p className="mt-8 text-[#999999] font-bold uppercase tracking-widest">
            #BarcelonaSC #IdoloDelEcuador #NocheAmarilla
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#000000] border-t border-[#333333] text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <img 
              src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/assets/img/socios-logo-amarelo.svg" 
              alt="Socios BSC Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-[#999999] text-sm max-w-md mx-auto">
            © 2024 Barcelona Sporting Club. Todos los derechos reservados. 
            El club más grande del Ecuador te espera.
          </p>
        </div>
      </footer>
    </main>
  );
}