import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-montserrat',
});

export default function Home() {
  return (
    <main className={`${montserrat.className} min-h-screen bg-[#171717] text-[#ffffff] selection:bg-[#ffcc00] selection:text-[#000000]`}>
      {/* HERO SECTION - 1º SCROLL */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-4 border-[#ffcc00] bg-[#000000]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ffcc00]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ffcc00]/15 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-[#ffcc00]/10 blur-[150px] rounded-full" />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffcc00]/10 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <img 
            src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Janeiro/1401/BSC_Scroll1-NocheAmarilla.png" 
            alt="Estadio Monumental" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#ffcc00]/20 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#000000] to-transparent z-10" />

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="inline-block border border-[#ffcc00] text-[#ffcc00] px-6 py-1 font-bold uppercase tracking-[0.3em] mb-8 rounded-sm bg-[#ffcc00]/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,204,0,0.2)]">
            UNA NOCHE HISTÓRICA
          </div>
          
          <div className="mb-10 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-8 bg-[#ffcc00]/10 blur-3xl rounded-full opacity-50" />
              <img 
                src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Janeiro/1401/Logo_Noche_Amarilla_Full_Color_1.png" 
                alt="Noche Amarilla Logo" 
                className="relative w-full max-w-[320px] md:max-w-[600px] h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-bold text-[#cccccc] mb-10 leading-relaxed tracking-wide">
            El legado del <span className="text-[#ffcc00] font-extrabold">Ídolo del Ecuador</span> brilla más que nunca. Sé parte de la leyenda.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="#unirse" 
              className="group relative bg-gradient-to-r from-[#ffcc00] to-[#b8860b] text-black font-[800] px-12 py-6 rounded-none uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,204,0,0.3)] overflow-hidden"
            >
              <span className="relative z-10">HACERME SOCIO Y VIVIR LA HISTORIA</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </a>
          </div>
        </div>
      </section>

      {/* DESTAQUES DO EVENTO - 2º SCROLL */}
      <section className="py-24 bg-[#000000] text-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold uppercase text-[#ffcc00] mb-4">Lo que te espera en nuestra casa</h2>
            <div className="h-1 w-24 bg-[#ffcc00] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-[#ffcc00] bg-[#171717] hover:bg-[#262626] transition-colors">
              <span className="text-4xl mb-4 block">⚽</span>
              <h3 className="text-2xl font-bold mb-3 text-[#ffcc00]">Presentación Oficial</h3>
              <p className="text-[#cccccc] font-bold">Conoce de cerca a las nuevas incorporaciones y al plantel que representará a la institución en los torneos de esta temporada.</p>
            </div>
            <div className="p-8 border-l-4 border-[#ffcc00] bg-[#171717] hover:bg-[#262626] transition-colors">
              <span className="text-4xl mb-4 block">⭐</span>
              <h3 className="text-2xl font-bold mb-3 text-[#ffcc00]">Estrella Mundial</h3>
              <p className="text-[#cccccc] font-bold">Barcelona recebe a una estrella mundial que se pone la amarilla para jugar con nosotros. Prepárate para vivir una noche histórica, de esas que solo Barcelona puede regalarte.</p>
            </div>
            <div className="p-8 border-l-4 border-[#ffcc00] bg-[#171717] hover:bg-[#262626] transition-colors">
              <span className="text-4xl mb-4 block">🎤</span>
              <h3 className="text-2xl font-bold mb-3 text-[#ffcc00]">Show Especial</h3>
              <p className="text-[#cccccc] font-bold">Artistas internacionales, sorpresas y un espectacular show de fuegos artificiales para celebrar nuestra pasión. ¡Será uma locura que nadie querrá que le cuenten, todos querrán vivirla!</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FIXA DE ALTO IMPACTO - 3º SCROLL */}
      <section className="relative w-full py-20 bg-[#000000] border-y-4 border-[#ffcc00] overflow-hidden">
        {/* Elementos gráficos de fundo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#ffcc00] to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#ffcc00] to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffcc00] to-transparent" />
        </div>
        
        <div className="absolute top-5 left-10 text-[#ffcc00] opacity-30 text-2xl">★</div>
        <div className="absolute bottom-5 right-10 text-[#ffcc00] opacity-30 text-2xl">★</div>
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#ffcc00]/5 blur-[100px] rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-6xl uppercase tracking-tighter">
              ¡SOCIOS BSC TIENEN <br className="hidden md:block" />
              <span className="text-[#ffcc00] text-6xl md:text-8xl lg:text-9xl block my-4 drop-shadow-[0_0_30px_rgba(255,204,0,0.6)] font-[900]">
                100% DE DESCUENTO
              </span> 
              EN LA ENTRADA PARA VIVIR LA HISTÓRICA NOCHE AMARILLA!
            </h2>
            
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#ffcc00] to-transparent my-2" />
            
            <p className="text-xl md:text-3xl font-bold text-[#ffcc00] uppercase tracking-widest flex items-center gap-4">
              <span className="text-white">★</span>
              Haciéndote socio Amarillo, tienes 50% de descuento.
              <span className="text-white">★</span>
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA EXCLUSIVA PARA SÓCIOS - 4º SCROLL */}
      <section className="py-24 border-b border-[#333333]">
        <div className="container mx-auto px-4 flex flex-col md:gap-12 lg:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Janeiro/1401/A73I4712.jpg" 
              alt="Afición Barcelona SC" 
              className="rounded-lg shadow-[20px_20px_0px_0px_rgba(255,204,0,1)] border border-[#ffcc00] w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold uppercase text-[#ffcc00] mb-6">Beneficios de ser SOCIO BSC</h2>
            <p className="text-xl text-[#999999] mb-8 leading-relaxed font-bold">
              La Noche Amarilla es para todos, mas la experiencia completa es exclusiva para quienes llevan el Club en la sangre.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-lg font-bold">
                <span className="text-[#ffcc00]">✓</span> Asegura tu lugar en todos los partidos de local de LigaPro y Copa Ecuador
              </li>
              <li className="flex items-center gap-3 text-lg font-bold">
                <span className="text-[#ffcc00]">✓</span> Más de 10 marcas aliadas con descuentos exclusivos
              </li>
              <li className="flex items-center gap-3 text-lg font-bold">
                <span className="text-[#ffcc00]">✓</span> Experiencias únicas junto al Ídolo
              </li>
              <li className="flex items-center gap-3 text-lg font-bold">
                <span className="text-[#ffcc00]">✓</span> Formar parte oficial de la história del Club
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL - 5º SCROLL */}
      <section id="unirse" className="py-32 relative overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Janeiro/1401/BSC_Scroll1-NocheAmarilla.png" 
            alt="Estadio Monumental Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-[#000000]" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[60%] bg-[#ffcc00]/10 blur-[100px] rounded-full" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[60%] bg-[#ffcc00]/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[20%] bg-[#ffcc00]/5 blur-[80px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase text-white mb-8 drop-shadow-lg leading-[1.3] md:leading-[1.4]">
            ¿LISTO PARA HACER <span className="text-[#ffcc00]">HISTORIA?</span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-[#999999] mb-12 max-w-3xl mx-auto">
            No dejes que te lo cuenten. Sé protagonista de la Noche Amarilla y del futuro del Ídolo.
          </p>
          <a 
            href="#" 
            className="inline-block bg-[#ffcc00] hover:bg-white text-black text-2xl font-extrabold px-16 py-8 uppercase tracking-widest transition-all shadow-[0_10px_40px_rgba(255,204,0,0.3)]"
          >
            HACERME SOCIO AHORA →
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
          <p className="text-[#999999] text-sm max-w-md mx-auto font-bold">
            © 2024 Barcelona Sporting Club. Todos los derechos reservados. 
            El club más grande del Ecuador te espera.
          </p>
        </div>
      </footer>
    </main>
  );
}