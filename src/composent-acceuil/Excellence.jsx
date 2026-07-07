import { motion } from 'framer-motion';
import Ellipse_10 from "../assets/Ellipse_10.png";
import service_icon1 from "../assets/service-icon1-3 1.png";
import service_icon1_4 from "../assets/service_icon1_4.png";
import service_icon1_2 from "../assets/service_icon1_2.png";

export default function ExcellenceSection({ sectionVariant, staggerContainer, fadeInUp }) {
  const items = [
    { icon: service_icon1, title: "Culture & Langue", desc: "Une équipe 100% francophone. Nous comprenons les subtilités de vos marchés." },
    { icon: service_icon1_4, title: "Le secret de notre qualité", desc: "Nous sommes le pôle de production externe de dizaines d'agences web." },
    { icon: service_icon1_2, title: "La fluidité du GMT+3", desc: "Le décalage horaire idéal. Vos projets avancent pendant que vous dormez." },
    { icon: service_icon1, title: "Sécurité & Continuité", desc: "Vous bénéficiez de la résilience d'une agence de 12 experts." }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariant}
      className="relative py-16 md:py-20 px-6 max-w-6xl mx-auto z-10 text-center"
    >
      <div className="flex flex-col gap-6 md:gap-[25px] relative">
        <img className="absolute top-[-300px] md:top-[-500px] h-[800px] md:h-[1500px] left-0 pointer-events-none opacity-40 md:opacity-100" src={Ellipse_10} alt="" />
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 relative z-10">
          L'excellence opérationnelle, <span className="color-custom">à 1h de Paris</span>
        </h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left relative z-10"
        >
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="flex flex-col gap-6 rounded-xl border border-[#ffffff80] p-[20px] bg-darkBg/60 cursor-pointer backdrop-blur-sm p-[15px] hover:border-[#E7589A]/50 transition-all duration-300"
            >
              <img src={item.icon} alt={item.title} className="w-fit" />
              <h3 className="font-bold text-base color-custom">{item.title}</h3>
              <p className="text-sm mt-2 leading-relaxed text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}