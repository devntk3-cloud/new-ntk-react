import { motion } from 'framer-motion';
import image_ from "../assets/image_.png";
import image_1 from "../assets/image_1.png";
export default function CtaSection({ sectionVariant }) {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariant}
      className="py-12 px-6 z-10 relative max-w-6xl mx-auto"
    >
      <div className="backdrop-blur-2xl bg-[#000101]/90 border border-white/20 rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xl">
        <div className="md:col-span-8 space-y-4 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
            Prêt à aligner votre site web sur <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-netyPink to-netyPurple bg-clip-text text-transparent color-custom">vos objectifs de chiffre d'affaires ?</span>
          </h2>
          <button className="w-full sm:w-auto px-8 py-[14px] cursor-pointer rounded-[43px] text-white text-sm font-medium bg-gradient-to-r from-[#E7589A] to-[#021F66]">
            Démarrer mon diagnostic stratégique offert
          </button>
        </div>
        <div className="md:col-span-4 flex justify-center">
          <div className="bg-white/5 rounded-full border border-white/10 flex items-center justify-center p-4">
            <img src={image_} alt="Astronaute" className="" />
            <div className="absolute right-[40px] top-0 w-[425px]">
             <img src={image_1} alt="Astronaute" className="  object-contain" />
             </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}