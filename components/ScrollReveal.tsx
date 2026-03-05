"use client";
import { motion } from "framer-motion";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }} // Añadimos esto por si querés que desaparezca al salir
      viewport={{ 
        once: false, 
        // 0px significa que se activa exactamente en el borde de la pantalla.
        // Si querés que se active ANTES de que entre, poné "50px 0px 50px 0px"
        margin: "50px 0px 50px 0px" 
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
}