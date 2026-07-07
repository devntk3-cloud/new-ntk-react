import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import section3 from "../assets/section3.png";
// AJOUT DE L'IMPORT MANQUANT ICI :
import service_icon1_4 from "../assets/service_icon1_4.png"; 

export default function TarifsSection({ sectionVariant, fadeInUp }) {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariant}
      className="relative py-16 md:py-20 px-6 max-w-6xl  z-10 text-center"
    >
      <img className="absolute -top-[50px] right-0 object-contain max-w-[200px] md:max-w-xs pointer-events-none opacity-30 md:opacity-100" src={section3} alt="" />
      
      <div className="flex flex-col items-center relative z-10">
        {/* Nettoyage du style redondant en gardant ton rendu exact */}
        <div className="text-center" style={{ marginBottom: "50px" }}>
          <h2 className="text-2xl md:text-4xl font-bold">Choisissez votre niveau d'<span className="color-custom">ambition digitale</span></h2>
          <p className="text-white/60 mt-3 text-sm md:text-base ">Des offres transparentes, sans engagement démesuré,<br/> pensées pour générer du résultat.</p>
        </div>

        <motion.div 
          variants={fadeInUp}
          className="w-full bg-white/[0.02] border border-white/10 rounded-3xl flex flex-col lg:flex-row gap-8 justify-between text-left "
        >
          <div className="w-full lg:w-[45%] flex flex-col justify-between gap-4 pl-[30px] relative">
          <span className="absolute top-1/2 -rotate-90 left-[-50px] text-white/40 text-[35px] font-semibold -translate-y-1/2">Pack 1</span>
            <div className="flex flex-col items-start gap-[10px]">
              <img className="" src={service_icon1_4} alt="Icon pack" />
              <div className="text-xl font-bold uppercase color-custom mb-2">Visibilité & Fondations</div>
              <p className="text-sm text-white/60 leading-relaxed">Pour les entreprises prêtes à investir et à générer des <br/> demandes qualifiées.</p>
            </div>
            <div>
              <span className="font-medium text-xs text-white/50">À partir de</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white flex flex-wrap items-baseline gap-2 mt-4">
                490€ /mois <small className="font-medium text-xs text-white/50">ou projet ponctuel dès 1 500€</small>
              </span>
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex flex-col justify-between gap-6">
            <h3>Tout le Pack 1 inclus</h3>
            <ul className="space-y-3.5 text-sm">
              {[
                "Pilotage d'un canal d'acquisition principal (Google Ads ou Meta Ads)", 
                "Création de landing pages optimisées pour la conversion", 
                "Tracking avancé (GA4, Tag Manager) & Reporting mensuel de performance"
              ].map((feat, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle2 size={18} className="text-[#E7589A] shrink-0 mt-0.5" />
                  <span className="text-white/70">{feat}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <button className="w-full px-6 py-[14px] rounded-[43px] text-white font-medium bg-gradient-to-r from-[#E7589A] to-[#021F66] cursor-pointer hover:opacity-90 transition-all text-sm text-center">
                Demander le détail du Pack 1
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}