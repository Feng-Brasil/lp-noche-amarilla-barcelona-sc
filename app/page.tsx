export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ffffff] font-sans selection:bg-[#ffcc00] selection:text-[#000000]">
      {/* HERO SECTION - 1º SCROLL (MODIFICADO PARA PRETO/OURO PREMIUM) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-4 border-[#ffcc00] bg-[#000000]">
        {/* Background com partículas e brilho */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffcc00]/10 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <img 
            src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/assets/img/Home_Deslogada_2024/bg-scroll-3.png" 
            alt="Estadio Monumental" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
        </div>

        {/* Detalhes de brilho dourado nas bordas */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#ffcc00]/20 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#000000] to-transparent z-10" />

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#ffcc00]/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/assets/img/socios-logo-amarelo.svg" 
                alt="Socios BSC Logo" 
                className="relative h-24 md:h-32 w-auto drop-shadow-[0_0_15px_rgba(255,204,0,0.5)]"
              />
            </div>
          </div>
          
          <div className="inline-block border border-[#ffcc00] text-[#ffcc00] px-6 py-1 font-bold uppercase tracking-[0.3em] mb-6 rounded-sm bg-[#ffcc00]/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,204,0,0.2)]">
            UNA NOCHE HISTÓRICA
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4 drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#999999]">NOCHE</span> <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffcc00] via-[#fff3a0] to-[#b8860b] drop-shadow-[0_0_30px_rgba(255,204,0,0.4)]">AMARILLA</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-[#cccccc] mb-10 leading-relaxed tracking-wide">
            El legado del <span className="text-[#ffcc00] font-bold">Ídolo del Ecuador</span> brilla más que nunca. Sé parte de la leyenda.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="#unirse" 
              className="group relative bg-gradient-to-r from-[#ffcc00] to-[#b8860b] text-black font-black px-12 py-6 rounded-none uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,204,0,0.3)] overflow-hidden"
            >
              <span className="relative z-10">Hacerme socio y vivir la historia</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </a>
          </div>
        </div>
      </section>

      {/* DESTAQUES DO EVENTO - 2º SCROLL */}
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

      {/* EXPERIÊNCIA EXCLUSIVA PARA SÓCIOS - 3º SCROLL */}
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
                <span className="text-[#ffcc00]">✓</span> Descuentos especiais en indumentaria y produtos oficiais
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

      {/* PROVAS DE VALOR - 4º SCROLL */}
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

      {/* CTA FINAL - 5º SCROLL */}
      <section id="unirse" className="py-32 relative overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 bg-[#ff0000]/5 z-0"></div>
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