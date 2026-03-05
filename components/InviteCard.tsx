"use client";
import { motion } from "framer-motion";

export default function InviteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-sm mx-auto p-8 rounded-[40px] bg-white border-4 border-primary shadow-2xl"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-primary">XV Años</h1>
        <p className="text-2xl text-secondary mt-2">Adriana López</p>
      </div>

      {/* Quote */}
      <div className="bg-skin/30 p-6 rounded-3xl mb-8 border border-secondary text-center">
        <p className="text-primary italic">
          "Un día lleno de luces, magia y sueños..."
        </p>
      </div>

      {/* CTA */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-4 bg-accent text-white font-bold rounded-full shadow-lg"
      >
        Confirmar Asistencia
      </motion.button>
    </motion.div>
  );
}