import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import hero_object_ from "../assets/hero_object_.png";
import Ellipse_10 from "../assets/Ellipse_10.png";
import service_icon1 from "../assets/service-icon1-3 1.png";
import Rectangle_7 from "../assets/Rectangle_7.png";
import service1 from "../assets/service.svg";
import service2 from "../assets/service2.svg";
export default function ExpertiseSection({ sectionVariant, staggerContainer, fadeInUp }) {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariant}
      className="py-16 md:py-20 px-6 max-w-6xl mx-auto relative z-10"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Votre profil, notre <span className="color-custom">expertise</span></h2>
          <div className="relative max-w-xs md:max-w-sm">
            <img src={hero_object_} alt="Expertise illustration" className="w-full h-auto" />
            <div className=""></div>
          </div>
        </div>
          
        <motion.div 
          variants={staggerContainer}
          className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-10"
        >
          {[
            { num: "01/", icon: service_icon1, image: Rectangle_7, title: "Vous êtes une entreprise en Europe (FR, CH, BE)", desc: "Vous cherchez un partenaire stratégique capable de comprendre votre marché et de piloter votre ROI, avec la réactivité d'une équipe locale.", titre_btn: "Découvrir notre accompagnement Europe" },
            { num: "02/", icon: service1, image: '', title: "Vous êtes une Agence Web / Com", desc: "Vous cherchez un pôle de production externe, fiable, scalable et parfaitement rodé aux standards européens pour déléguer vos projets techniques.", titre_btn: "Découvrir notre offre de production" },
            { num: "03/", icon: service2, image: '', title: "Vous êtes une entreprise à Madagascar", desc: "Vous voulez dominer votre marché local en appliquant les standards internationaux d'acquisition digitale et de conversion.", titre_btn: "Voir nos succès locaux" }
          ].map((step, idx) => {
            
            {/* Gestion de la couleur de fond sans ternaire */}
            let bgClass = "bg-[#E7589A4F]";
            if (idx === 0) {
              bgClass = "bg-[#021F66]";
            }

            return (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="flex gap-4 md:gap-2 relative group items-center"
              >
                {/* Application dynamique de la variable bgClass */}
                <div className={`-rotate-90 !px-[50px] ${bgClass} w-[25%] !py-[10px] rounded-full text-xs md:text-sm flex items-center justify-center text-[#fff]`}>
                  {step.num}
                </div>
                
                <div className="flex flex-col gap-2 items-start relative w-full">
                  <img src={step.icon} alt={`${step.title} icon`} className="" />
                  <h3 className="font-bold text-base md:text-lg text-white group-hover:text-netyPink transition-colors">{step.title}</h3>
                  <p className="text-white/60 text-xs md:text-sm max-w-md leading-relaxed">{step.desc}</p>
                  <button className="text-[#E7589A] text-xs md:text-sm font-semibold hover:underline mt-2 flex cursor-pointer items-center gap-1">
                    {step.titre_btn} <ArrowRight size={14} />
                  </button>
                  
                  {step.image && (
                    <div className="hidden sm:block absolute right-[25px] -bottom-[100px] max-w-[100px] opacity-[0.9] group-hover:opacity-100 transition-opacity">
                      <img className="object-contain" src={step.image} alt="Step decorative visual" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>   
    </motion.section>
  );
}