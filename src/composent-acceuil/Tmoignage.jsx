import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Tmoignage({ sectionVariant }) {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariant}
      className="py-12 md:py-20 px-6 max-w-4xl mx-auto text-center z-10 relative"
    >
      <div className="flex justify-center mb-4 md:mb-6 text-netyPink/40">
        <Quote size={40} className="md:w-12 md:h-12" fill="currentColor" />
      </div>
      <p className="text-base sm:text-lg md:text-[24px] font-medium leading-relaxed font-black bg-gradient-to-b from-[#ffffff80] to-[#99999933]_0% bg-clip-text text-[#f6f6f68f] px-2 ">
        Netykom a dépassé son rôle de prestataire technique. Aujourd'hui, ils pilotent notre acquisition et notre CRM. Notre coût par lead a baissé de 30% en 4 mois. C'est un vrai binôme stratégique.
      </p>
      <div className="mt-6 text-xs md:text-sm text-white/60 flex flex-col sm:flex-row justify-center items-center gap-2">
        <span className="font-bold text-white">Cédric Liam</span> 
        <span className="hidden sm:inline text-white/30">|</span> 
        <span>Directeur Marketing / Agence Partenaires</span>
      </div>
    </motion.section>
  );
}