import { motion } from 'framer-motion';
import ricing_shape from "../assets/pricing-shape.webp";
import service1 from "../assets/service.svg";
import service2 from "../assets/service2.svg";

export default function ApprocheSection({ sectionVariant, staggerContainer, fadeInUp }) {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariant}
      className="py-16 md:py-20 px-6 max-w-6xl mx-auto z-10 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Un site web ne devrait <br /> <span className="color-custom">jamais être un centre de coûts</span>
          </h2>
          <div className="flex justify-center w-full">
            <img 
              src={ricing_shape} 
              alt="Ressort 3D" 
              className="w-full max-w-xs md:max-w-sm object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        <motion.div variants={staggerContainer} className="flex flex-col gap-6 md:gap-[25px]">
          <motion.div variants={fadeInUp} className="backdrop-blur-xl bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col items-start gap-4">
            <img src={service1} alt="Icon" />
            <div>
              <h3 className="text-[#fff] text-lg font-bold color-custom mb-2">L'approche classique</h3>
              <p className="text-[#fff] text-sm leading-relaxed">Un beau site livré, puis abandonné. Zéro trafic, zéro lead, un prestataire qui attend votre prochain appel.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="backdrop-blur-xl border border-[#021F66] bg-[#021F66]/90 p-6 rounded-2xl flex flex-col items-start gap-4">
            <img src={service2} alt="Icon" />
            <div>
              <h3 className="text-[#fff] text-lg font-bold color-custom mb-2">L'approche de netykom</h3>
              <p className="text-[#fff] text-sm leading-relaxed">Un écosystème pensé pour la conversion. Nous alignons votre technologie, votre visibilité et votre acquisition sur un unique objectif.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}