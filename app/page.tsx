"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { Play, Pause, QrCode, MessageCircle } from "lucide-react";

export default function Invitacion() {
  const [playing, setPlaying] = useState(false);
  const [showAliasModal, setShowAliasModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2026-06-30T21:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <main className="bg-imagen-veteada w-full min-h-screen py-24 px-4">
      <audio ref={audioRef} src="/Rapunzel.mp3" loop />

      <div className="contenedor-centrado gap-30">
        {/* 1. F1 */}
        <ScrollReveal>
          <div className="element-center my-1">
            <Image
              src="/fotos/1.png"
              alt="Foto Principal Melody"
              width={300}
              height={400}
              className="img-card"
            />
          </div>
        </ScrollReveal>

        {/* 2. Firulete + Mis XV + Nombre */}
        <ScrollReveal>
          <div className="element-center my-1">
            <Image
              src="/firuletes1.png"
              alt="Decoración Melody"
              width={220}
              height={55}
            />

            <div className="my-8 text-center">
              <h1 className="text-3xl text-oro-rapunzel font-cuento">
                MIS XV AÑOS
              </h1>
              <h2 className="text-6xl text-oro-rapunzel font-garabateada mt-4">
                Melody Mansilla
              </h2>
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
              {playing ? (
                <Pause size={20} fill="currentColor" />
              ) : (
                <Play size={20} fill="currentColor" />
              )}

              {playing ? "PAUSAR MÚSICA" : "PLAY MÚSICA"}
            </button>
          </div>
        </ScrollReveal>

        {/* 4. Frase */}
        <ScrollReveal>
          <div className="text-center text-oro-rapunzel px-4 my-5 space-y-8">
            <p className="italic text-lg font-cuento">
              &ldquo;Hay momentos inolvidables que se atesoran en el
              corazón...&rdquo;
            </p>
            <p className="text-xl font-bold font-cuento">Mis 15 Años</p>
          </div>
        </ScrollReveal>

        {/* 5. Fecha */}
        <ScrollReveal>
          <div className="element-center my-5 text-center">
            <Image
              src="/Fecha.png"
              alt="1 de Julio 2026"
              width={2000}
              height={2000}
            />

            <div className="text-3xl font-pinyon text-oro-rapunzel mt-8">
              04 . 07 . 2026 <br />
              21:30 hs
            </div>
          </div>
        </ScrollReveal>

        {/* Contador */}
        <ScrollReveal>
          <div className="element-center my-10 text-center">
            <p className="text-oro-rapunzel text-lg font-cuento mb-5">
              Faltan
            </p>

            <div className="grid grid-cols-4 gap-2 w-full max-w-[360px] mx-auto">
              {[
                { label: "DÍAS", value: timeLeft.days },
                { label: "HS", value: timeLeft.hours },
                { label: "MIN", value: timeLeft.minutes },
                { label: "SEG", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center border border-oro-rapunzel/60 rounded-2xl px-2 py-4 bg-black/30 shadow-lg"
                >
                  <span className="text-2xl text-oro-rapunzel font-cuento font-bold leading-none">
                    {String(item.value).padStart(2, "0")}
                  </span>

                  <span className="text-[9px] tracking-[0.2em] text-oro-rapunzel font-cuento mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 6. Lugar con GIF y texto */}
        <ScrollReveal>
          <div className="element-center my-10 text-center">
            <a
              href="https://maps.app.goo.gl/pJ4BGVdEapmocPk4A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ubicacion.gif"
                alt="Ubicación"
                width={300}
                height={300}
                className="img-card"
              />
            </a>

            <p className="mt-6 text-oro-rapunzel text-5xl font-pinyon font-medium">
              Benito de Miguel 872 <br />
              Salón Osiris
            </p>
          </div>
        </ScrollReveal>

        {/* 7. Playlist */}
        <ScrollReveal>
          <div className="element-center my-10 text-center">
            <Image
              src="/fotos/3.png"
              alt="Foto Playlist"
              width={300}
              height={400}
              className="img-card"
            />

            <p className="mt-10 text-oro-rapunzel font-semibold text-lg font-cuento">
              Elegí la música que querés que suene
            </p>
            <a href="https://youtube.com/playlist?list=PLKQTJ1Ct3r4o55oUQghh5OUrn5DQLKwPi&si=ApyS3IW1a6R7vJxY">
              <button  className="mt-6 bg-oro-rapunzel text-violeta-rapunzel px-10 py-4 rounded-full font-bold font-cuento shadow-lg">
              Agregar canción
              </button>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="element-center my-5 gap-6 text-center">
            <Image
              src="/rapunzel.png"
              alt="Decoración QR"
              width={450}
              height={55}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="element-center my-5 gap-6 text-center">
            <div className="element-center gap-2">
              <Image
                src="/vestimenta.png"
                alt="Código de vestimenta"
                width={150}
                height={150}
                className="vestimenta-img"
              />

              <p className="text-oro-rapunzel text-xl font-montserrat leading-tight mt-1 mb-6">
                Código de vestimenta <br />
                <span className="text-2xl">Elegante Sport</span>
                <span className="text-2xl">Se reservan los colores azules, <br /> y lilas(morados) para la quincieañera</span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAliasModal(true)}
              className="gift-button"
            >
              <Image
                src="/regalo.png"
                alt="Regalo CBU"
                width={190}
                height={190}
                className="gift-float"
              />
            </button>

            <p className="text-oro-rapunzel text-xl font-bold font-cuento">
              Si querés dejarme <br />un regalito, te dejo acá
            </p>

            {showAliasModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
                onClick={() => setShowAliasModal(false)}
              >
                <div
                  className="alias-modal"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setShowAliasModal(false)}
                    className="absolute right-4 top-3 text-oro-rapunzel text-2xl"
                  >
                    ×
                  </button>

                  <p className="text-oro-rapunzel font-pinyon text-4xl mb-4">
                    Para mi regalito
                  </p>

                  <p className="text-oro-rapunzel font-cuento text-sm tracking-[0.25em] uppercase mb-2">
                    Alias
                  </p>

                  <p className="text-oro-rapunzel font-cuento text-2xl font-bold">
                    melomansilla
                  </p>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* 8. QR */}
        <ScrollReveal>
          <div className="element-center my-5 gap-6 text-center">
            <Image
              src="/firuletes2.png"
              alt="Decoración QR"
              width={220}
              height={55}
            />
            <a href="https://drive.google.com/drive/folders/1gRbbDJDi6NpgAYDdl_BAe78hT6ebzgut">
              <p className="text-oro-rapunzel text-lg font-cuento my-6">
              ¡Compartí tus fotos!
              </p>
            

              <div className="bg-transparent p-4 rounded-2xl shadow-inner my-2">
                <button
                  type="button"
                  className="qr-button"
                >
                  <Image
                    src="/urlqr.png"
                    alt="qr drive"
                    width={190}
                    height={190}
                    className="gift-float"
                  />
                </button>
              </div>
            </a>
            
            <a
              href="https://wa.me/5492364543792?text=Hola%21%20Quiero%20confirmar%20mi%20asistencia%20a%20los%2015%20de%20Melody."
              className="flex items-center justify-center gap-3 bg-oro-rapunzel text-violeta-rapunzel px-10 py-5 rounded-full font-bold font-cuento shadow-lg mt-8"
            >
              <MessageCircle size={22} />
              Confirmar Asistencia
            </a>
          </div>
        </ScrollReveal>

        {/* 9. Final */}
        <ScrollReveal>
          <div className="element-center my-20 mb-32 text-center">
            <Image
              src="/fotos/6.png"
              alt="Foto Final Melody"
              width={300}
              height={400}
              className="img-card"
            />

            <Image
              src="/firuletes3.png"
              alt="Decoración Final"
              width={220}
              height={55}
              className="mt-16"
            />

            <Image
              src="/Sol.png"
              alt="Sol"
              width={120}
              height={120}
              className="mt-12"
            />

            <h3 className="text-6xl text-oro-rapunzel font-garabateada mt-10">
              Melody Mansilla
            </h3>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}