import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Noche Amarilla 2026',
  description: 'Noche Amarilla 2026 - Socios BSC',
  icons: {
    icon: 'https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Janeiro/2101_logobarcelona/logobarcelona21012026.png',
  },
};

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
                className="relative w-full max-w-[280px] md:max-w-[600px] h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
          
          <p className="max-w-2xl mx-auto text-lg md:text-2xl font-bold text-[#cccccc] mb-10 leading-relaxed tracking-wide px-4">
            El legado del <span className="text-[#ffcc00] font-extrabold">Ídolo del Ecuador</span> brilla <br className="hidden md:block" /> más que nunca.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4">
            <a 
              href="#unirse" 
              className="w-full md:w-auto group relative bg-gradient-to-r from-[#ffcc00] to-[#b8860b] text-black font-[800] px-8 md:px-12 py-5 md:py-6 rounded-none uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,204,0,0.3)] overflow-hidden text-sm md:text-base"
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
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#ffcc00] mb-4">Lo que te espera en nuestra casa</h2>
            <div className="h-1 w-24 bg-[#ffcc00] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border-l-4 border-[#ffcc00] bg-[#171717] hover:bg-[#262626] transition-colors">
              <span className="text-4xl mb-4 block">⚽</span>
              <h3 className="text-2xl font-bold mb-3 text-[#ffcc00]">Presentación Oficial</h3>
              <p className="text-[#cccccc] font-bold">Conoce de cerca a las nuevas incorporaciones y al plantel que defenderá los colores del Ídolo en esta temporada. El inicio de un nuevo sueño, todos juntos.</p>
            </div>
            <div className="p-8 border-l-4 border-[#ffcc00] bg-[#171717] hover:bg-[#262626] transition-colors">
              <span className="text-4xl mb-4 block">🎤</span>
              <h3 className="text-2xl font-bold mb-3 text-[#ffcc00]">Show Especial</h3>
              <p className="text-[#cccccc] font-bold">Artistas internacionales, sorpresas y un impresionante show de fuegos artificiales para celebrar nuestra pasión. Será una locura que nadie va a querer que le cuenten, todos querrán vivirla.</p>
            </div>
            <div className="p-8 border-l-4 border-[#ffcc00] bg-[#171717] hover:bg-[#262626] transition-colors md:col-span-2">
              <span className="text-4xl mb-4 block">💎</span>
              <h3 className="text-2xl font-bold mb-3 text-[#ffcc00]">Experiencias Exclusivas</h3>
              <p className="text-[#cccccc] font-bold">Palco Pilsener, Parrillas Socios BSC y mucho más para disfrutar la Noche Amarilla como solo un socio pode hacerlo. Una experiencia a otro nivel, junto al Ídolo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL HIGHLIGHT - 3º SCROLL */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-[#ffcc00] border-y-2 border-[#000000]/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">🎟️</span>
            <span className="text-[#000000] font-extrabold tracking-[0.2em] text-sm md:text-base uppercase">
              SOLO SOCIOS BSC TIENEN
            </span>
          </div>

          <div className="max-w-4xl w-full text-center space-y-4">
            <h2 className="flex flex-col items-center">
              <span className="text-[#000000] text-7xl md:text-8xl lg:text-9xl font-extrabold leading-none" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                100%
              </span>
              <span className="text-[#000000] text-base md:text-2xl lg:text-3xl font-bold tracking-tight uppercase mt-2">
                DE DESCUENTO EN SU ENTRADA
              </span>
            </h2>

            <div className="pt-8">
              <a 
                href="#unirse" 
                className="inline-block bg-[#000000] hover:bg-[#171717] text-[#ffcc00] text-lg md:text-2xl font-black px-8 md:px-16 py-4 md:py-6 transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-b-4 border-[#333333] active:border-b-0 active:translate-y-1"
              >
                QUIERO SER SOCIO AHORA
              </a>
            </div>

            <div className="pt-4">
              <p className="text-[10px] md:text-sm font-normal text-[#000000] uppercase">
                *Socio Amarillo tiene 50% de descuento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS - 4º SCROLL */}
      <section className="py-24 bg-[#171717] border-b border-[#333333]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img 
                src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Janeiro/1401/A73I4712.jpg" 
                alt="Beneficios Socio" 
                className="rounded-lg shadow-2xl border-2 border-[#ffcc00]/30 w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#ffcc00] mb-6 uppercase leading-tight">
                Y MUCHOS MÁS BENEFICIOS POR SER SOCIO
              </h2>
              <ul className="space-y-4">
                {[
                  "Asegura tu lugar en todos los partidos de local de LigaPro y Copa Ecuador",
                  "Zapping incluido sin costo adicional",
                  "Más de 10 marcas aliadas con descuentos exclusivos",
                  "Experiencias únicas junto al Ídolo",
                  "Sé parte oficial de la historia del Club"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#ffcc00] font-bold text-xl">✓</span>
                    <span className="text-[#cccccc] font-bold text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - 5º SCROLL */}
      <section id="unirse" className="py-24 md:py-32 relative overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Janeiro/1401/BSC_Scroll1-NocheAmarilla.png" 
            alt="Estadio Monumental Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-[#000000]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="flex flex-col items-center font-extrabold uppercase text-white mb-8 drop-shadow-lg">
            <span className="text-2xl md:text-5xl tracking-tight mb-2">¿LISTO PARA HACER</span>
            <span className="text-5xl md:text-9xl text-[#ffcc00] leading-none" style={{ fontFamily: 'Arial Black, sans-serif' }}>HISTORIA?</span>
          </h2>
          <p className="text-lg md:text-3xl font-bold text-[#999999] mb-12 max-w-3xl mx-auto">
            No dejes que te lo cuenten. Sé protagonista de la Noche Amarilla y del futuro del Ídolo.
          </p>
          <a 
            href="#" 
            className="inline-block bg-[#ffcc00] hover:bg-white text-black text-lg md:text-2xl font-extrabold px-10 md:px-16 py-6 md:py-8 uppercase tracking-widest transition-all shadow-[0_10px_40px_rgba(255,204,0,0.3)]"
          >
            HACERME SOCIO AHORA →
          </a>
          <p className="mt-8 text-sm md:text-base text-[#999999] font-bold uppercase tracking-widest">
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
              className="h-12 md:h-16 w-auto"
            />
          </div>
          <p className="text-[#999999] text-xs md:text-sm max-w-md mx-auto font-bold">
            © 2024 Barcelona Sporting Club. Todos los derechos reservados. 
            El club más grande del Ecuador te espera.
          </p>
        </div>
      </footer>
    </main>
  );
}