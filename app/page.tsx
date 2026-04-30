"use client";
import { useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { Play, Pause, MapPin, QrCode, MessageCircle } from "lucide-react";

export default function Invitacion() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <main className="bg-imagen-veteada w-full min-h-screen py-24 px-4">
      
      {/* 3. Reproductor nativo (invisible) */}
      <audio ref={audioRef} src="/Rapunzel.mp3" loop />
      
      {/* Contenedor central */}
      <div className="contenedor-centrado gap-30">
        
        {/* 1. F1 */}
        <ScrollReveal>
          <div className="element-center my-1">
            <Image src="/fotos/1.png" alt="Foto Principal Melody" width={300} height={400} className="img-card" />
          </div>
        </ScrollReveal>
        
        {/* 2. Firulete + Mis XV + Nombre */}
        <ScrollReveal>
          <div className="element-center my-1">
            <Image src="/firuletes1.png" alt="Decoración Melody" width={220} height={55} />
            <div className="my-8 text-center">
                <h1 className="text-3xl text-oro-rapunzel font-cuento">MIS XV AÑOS</h1>
                <h2 className="text-6xl text-oro-rapunzel font-garabateada mt-4">Melody Medina</h2>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Botón Play */}
        <ScrollReveal>
          <div className="my-1">
            <button 
              onClick={toggleMusic}
              className="flex items-center gap-3 bg-oro-rapunzel text-violeta-rapunzel px-10 py-5 rounded-full font-bold font-cuento transition-transform hover:scale-105 shadow-xl"
            >
                {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                {playing ? "PAUSAR MÚSICA" : "PLAY MÚSICA"}
            </button>
          </div>
        </ScrollReveal>

        {/* 4. Frase */}
        <ScrollReveal>
          <div className="text-center text-oro-rapunzel px-4 my-5 space-y-8">
            <p className="italic text-lg font-cuento">"Hay momentos inolvidables que se atesoran en el corazón..."</p>
            <p className="text-xl font-bold font-cuento">Mis 15 Años</p>
          </div>
        </ScrollReveal>

        {/* 5. Fecha */}
        <ScrollReveal>
          <div className="element-center my-5 text-center">
            <Image src="/Fotosprueba.png" alt="30 de Junio 2026" width={2000} height={2000} />
            <div className="text-3xl font-pinyon text-oro-rapunzel mt-8">30 . 06 . 2026</div>
          </div>
        </ScrollReveal>

        {/* 6. Lugar con GIF y texto */}
        <ScrollReveal>
          <div className="element-center my-10 text-center">
            <a href="https://maps.app.goo.gl/pJ4BGVdEapmocPk4A" target="_blank">
              <Image src="/ubicacion.gif" alt="Ubicación" width={300} height={300} className="img-card" />
            </a>
            <p className="mt-6 text-oro-rapunzel text-5xl font-pinyon font-medium">
              Benito de Miguel 872 <br/>Salón Osiris
            </p>
          </div>
        </ScrollReveal>

        {/* 7. Playlist */}
        <ScrollReveal>
          <div className="element-center my-10 text-center">
            <Image src="/fotos/3.png" alt="Foto Playlist" width={300} height={400} className="img-card" />
            <p className="mt-10 text-oro-rapunzel font-semibold text-lg font-cuento">Elegí la música que querés que suene</p>
            <button className="mt-6 bg-oro-rapunzel text-violeta-rapunzel px-10 py-4 rounded-full font-bold font-cuento shadow-lg">
              Agregar canción
            </button>
          </div>
        </ScrollReveal>

        {/* 8. QR */}
        <ScrollReveal>
          <div className="element-center my-5 gap-6 text-center">
            <Image src="/firuletes2.png" alt="Decoración QR" width={220} height={55} />
            <p className="text-oro-rapunzel text-lg font-cuento my-6">¡Compartí tus fotos!</p>
            <div className="bg-white p-4 rounded-2xl shadow-inner my-2"><QrCode size={120} className="text-violeta-rapunzel" /></div>
            <a href="https://wa.me/5492364543792?text=Hola%21%20Quiero%20confirmar%20mi%20asistencia%20a%20los%2015%20de%20Melody." className="flex items-center justify-center gap-3 bg-oro-rapunzel text-violeta-rapunzel px-10 py-5 rounded-full font-bold font-cuento shadow-lg mt-8">
              <MessageCircle size={22} /> Confirmar Asistencia
            </a>
          </div>
        </ScrollReveal>

        {/* 9. Final */}
        <ScrollReveal>
          <div className="element-center my-20 mb-32 text-center">
            <Image src="/fotos/6.png" alt="Foto Final Melody" width={300} height={400} className="img-card" />
            <Image src="/firuletes3.png" alt="Decoración Final" width={220} height={55} className="mt-16" />
            <Image src="/Sol.png" alt="Sol" width={120} height={120} className="mt-12" />
            <h3 className="text-6xl text-oro-rapunzel font-garabateada mt-10">Melody Mansilla</h3>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}