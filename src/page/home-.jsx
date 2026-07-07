import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from "react";
import { 
  Monitor, 
  Cpu, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Quote 
} from 'lucide-react';

import img1 from "../assets/Hero-section.png";
import ricing_shape from "../assets/pricing-shape.webp";
import service1 from "../assets/service.svg";
import service2 from "../assets/service2.svg";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import section3 from "../assets/section3.png";
import service_icon1 from "../assets/service-icon1-3 1.png";
import service_icon1_4 from "../assets/service_icon1_4.png";
import service_icon1_2 from "../assets/service_icon1_2.png";
import Ellipse_10 from "../assets/Ellipse_10.png";
import Rectangle_7 from "../assets/Rectangle_7.png";
import hero_object_ from "../assets/hero_object_.png";
import image_ from "../assets/image_.png";
import image_1 from "../assets/image_1.png";

import '../css-custom/style.css';

// Variantes d'animation globales
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Animation d'entrée douce pour chaque section entière
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
  }
};

const Counter = ({ from = 0, to = 350, duration = 1500, prefix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let current = from;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = (to - from) / steps;

    const interval = setInterval(() => {
      current += increment;

      if ((increment > 0 && current >= to) || (increment < 0 && current <= to)) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [from, to, duration, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-[#ffffff]">
      {prefix}{count}
    </span>
  );
};

export default function Accueil() {
  return (
    <div className="bg-darkBg text-white min-h-screen overflow-hidden relative">
      
      {/* ==========================================
          HALOS LUMINEUX D'ARRIÈRE-PLAN
          ========================================== */}
      <div className="absolute top-20 left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-netyPink/10 blur-[80px] md:blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-40 right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-netyBlue/10 blur-[80px] md:blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[1800px] left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[500px] rounded-full bg-netyPurple/5 blur-[100px] md:blur-[150px] pointer-events-none z-0" />

      {/* ==========================================
          1. HERO SECTION (Animation automatique au chargement)
          ========================================== */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-cover bg-center" 
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center pt-[150px] md:pt-[250px] pb-[100px] md:pb-[150px] items-center gap-[30px] md:gap-[40px]">
          
          <motion.div 
            variants={fadeInUp}
            className="text-[#fff] border border-[#E7589A] px-6 md:px-10 py-[12px] md:py-[15px] rounded-[43px] mb-[10px]"
          >
            <span className="flex flex-col sm:flex-row items-center gap-2 md:gap-[40px] text-center text-sm md:text-base font-medium">
              Agence Webstratège 
              <ul className="flex flex-wrap justify-center gap-3 md:gap-[30px]"> 
                <li className="before:content-['|'] before:text-[#E7589A] before:mr-2 sm:before:mr-3 text-xs md:text-sm">France</li> 
                <li className="before:content-['•'] before:text-[#E7589A] before:mr-2 sm:before:mr-3 text-xs md:text-sm">Suisse</li> 
                <li className="before:content-['•'] before:text-[#E7589A] before:mr-2 sm:before:mr-3 text-xs md:text-sm">Madagascar</li>
              </ul>
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center font-extrabold tracking-tight max-w-5xl leading-[1.2] md:leading-[1.15]"
          >
            <span className="text-[#fff]">Ne cherchez plus une agence web.</span><br className="hidden md:block"/>
            <span className="text-[#fff]"> Trouvez votre partenaire de croissance digitale</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-[#fff]/80 text-center text-sm sm:text-sm md:text-sm max-w-2xl font-light px-4"
          >
            Nous concevons des plateformes web sur-mesure de haute performance pour propulser votre chiffre d'affaires et asseoir votre autorité.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 mt-6 px-4"
          >
            <button className="px-8 md:px-10 py-[12px] md:py-[15px] rounded-[43px] text-white font-medium bg-gradient-to-r from-[#E7589A] to-[#021F66] cursor-pointer hover:opacity-90 transition-all duration-200 text-sm md:text-base">
              Démarrer un projet
            </button>
            <button className="px-8 py-[12px] md:py-[15px] text-sm font-semibold rounded-full bg-white/5 border border-[#fff] hover:bg-white/10 cursor-pointer transition-all duration-200">
              Découvrir nos solutions
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* ==========================================
          2. SECTION : APPROCHE & RESSORT 3D
          ========================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariant}
        className="py-16 md:py-20 px-6 max-w-7xl mx-auto z-10 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Un site web ne devrait <br /> <span className="color-custom">jamais être un centre de coûts</span>
            </h2>
            <div className="flex justify-center w-full">
              <img 
                src={ricing_shape}
                alt="Ressort 3D métallisé" 
                className="w-full max-w-xs md:max-w-sm object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="flex flex-col gap-6 md:gap-[25px]"
          >
            {/* Carte Approche 1 */}
            <motion.div variants={fadeInUp} className="backdrop-blur-xl bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col sm:flex-col items-start gap-4 md:gap-[40px]">
              <div className=""><img src={service1} alt="Icon"  /></div>
              <div>
                <h3 className="text-[#fff] text-lg font-bold color-custom mb-2 md:mb-[15px]">L'approche classique</h3>
                <p className="text-[#fff] text-sm leading-relaxed">Un beau site livré, puis abandonné. Zéro trafic, zéro lead, un prestataire qui attend votre prochain appel.</p>
              </div>
            </motion.div>

            {/* Carte Approche 2 */}
            <motion.div variants={fadeInUp} className="backdrop-blur-xl border border-[#021F66] bg-[#021F66]/90 p-6 rounded-2xl flex flex-col sm:flex-col items-start gap-4 md:gap-[25px]">
              <div className=""><img src={service2} alt="Icon" /></div>
              <div>
                <h3 className="text-[#fff] text-lg font-bold color-custom mb-2 md:mb-[15px]">L'approche de netykom</h3>
                <p className="text-[#fff] text-sm leading-relaxed">Un écosystème pensé pour la conversion. Nous alignons votre technologie (WordPress), votre visibilité (SEO) et votre acquisition (Ads/CRM) sur un unique objectif : votre retour sur investissement.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ==========================================
          3. SECTION : EXCELLENCE OPÉRATIONNELLE
          ========================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariant}
        className="relative py-16 md:py-20 px-6 max-w-7xl mx-auto z-10 text-center"
      >
        <div className="flex flex-col gap-6 md:gap-[25px] relative">
          <img className="absolute top-[-300px] md:top-[-500px] h-[800px] md:h-[1500px] left-0 pointer-events-none opacity-40 md:opacity-100" src={Ellipse_10} alt="" />
          
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 relative z-10">
            L'excellence opérationnelle, <span className="color-custom">à 1h de Paris</span>
          </h2>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left relative z-10"
          >
            {[
              { icon: service_icon1, title: "Culture & Langue", desc: "Une équipe 100% francophone. Nous comprenons les subtilités de vos marchés (France, Suisse, Belgique) et les enjeux business locaux. Zéro friction, zéro malentendu." },
              { icon: service_icon1_4, title: "Le secret de notre qualité", desc: "Nous sommes le pôle de production externe de dizaines d'agences web françaises et suisses. Ce qui est assez bon pour eux est notre standard quotidien pour vous." },
              { icon: service_icon1_2, title: "La fluidité du GMT+3", desc: "Le décalage horaire idéal. Vos projets avancent pendant que vous dormez, et nos équipes sont alignées sur vos heures de bureau pour les points stratégiques." },
              { icon: service_icon1, title: "Sécurité & Continuité", desc: "Fini le freelance isolé. Vous bénéficiez de la résilience d'une agence de 12 experts (développeurs, traffic managers, stratégistes) et d'une rigueur RGPD absolue." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="flex flex-col gap-6 rounded-xl border border-[#ffffff80] p-[20px] bg-darkBg/60 cursor-pointer backdrop-blur-sm p-[15px] hover:border-[#E7589A]/50 transition-all duration-300"
              >
                <div className="">
                  <img src={item.icon} alt={item.title} className="" />
                </div>
                <h3 className="font-bold text-base color-custom">{item.title}</h3>
                <p className="text-sm mt-2 leading-relaxed text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ==========================================
          4. SECTION : PACKS & TARIFS
          ========================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariant}
        className="relative py-16 md:py-20 px-6 max-w-7xl mx-auto z-10 text-center"
      >
        <img className="absolute -top-[50px] right-0 object-contain max-w-[200px] md:max-w-xs pointer-events-none opacity-30 md:opacity-100" src={section3} alt="" />
        
        <div className="flex flex-col items-center relative z-10">
          <div className="text-center mb-10 md:mb-12" style={{ marginBottom: "50px" }}>
            <h2 className="text-2xl md:text-4xl font-bold">Choisissez votre niveau d'<span className="color-custom">ambition digitale</span></h2>
            <p className="text-white/60 mt-3 text-sm md:text-base ">Des offres transparentes, sans engagement démesuré,<br/> pensées pour générer du résultat.</p>
          </div>

          <motion.div 
            variants={fadeInUp}
            className="w-full bg-white/[0.02] border border-white/10 p-6 md:p-10 rounded-3xl flex flex-col lg:flex-row gap-8 justify-between text-left max-w-4xl"
          >
            <div className="w-full lg:w-[45%] flex flex-col justify-between gap-4">
              <div className="flex flex-col items-start gap-[10px]">
                <img className="" src={service_icon1_4}/>
                <div className="text-xl font-bold uppercase color-custom mb-2">Visibilité & Fondations</div>
                <p className="text-sm text-white/60 leading-relaxed">Pour les entreprises prêtes à investir et à générer des demandes qualifiées.</p>
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

      {/* ==========================================
          5. SECTION : GRILLE DE STATISTIQUES
          ========================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariant}
        className="py-20 px-6 z-10 relative flex flex-col  items-center"
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ils nous confient leur technique,<span className="color-custom"> nous <br/>leur apportons la croissance</span></h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          className="flex flex-col md:flex-row gap-6 pt-8 max-w-5xl mx-auto"
        >
          {/* Bloc Bleu */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="flex-1 bg-[#943FDE] rounded-3xl pl-[30px] pb-5 pr-0 flex min-h-[150px]"
          >
            <div className="justify-end flex flex-col flex-1">
              <span className="text-5xl text-start font-black text-[#ffffff]">+<Counter to={350} /></span>
              <p className="text-sm text-[#ffffff80] text-start mt-4">Sites web et plateformes livrés avec succès.</p>
            </div>
            <div className="flex justify-end items-end">
              <img 
                src={about1}
                alt="Ressort 3D métallisé" 
                className="w-32 md:w-40 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </motion.div>

          {/* Bloc Rose */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="flex-1 bg-[#E7589A] rounded-3xl px-8 flex min-h-[150px]"
          >
            <div className="flex flex-col items-start justify-end flex-1 pb-5">
              <img 
                src={about2}
                alt="Ressort 3D métallisé" 
                className="w-32 md:w-40 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-4"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="justify-center flex flex-col flex-1 pb-5">
              <span className="text-5xl text-start font-black text-[#ffffff]"><Counter to={80} />%</span>
              <p className="text-sm text-[#ffffff80] text-start mt-4">la sous-traitance pour des agences web en France et en Suisse.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bloc Inférieur */}
        <div className="max-w-5xl mx-auto mt-6">
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="rounded-3xl px-8 pt-8 flex justify-between min-h-[150px]"
          >
            <div className="flex flex-col items-end justify-end">
              <img 
                src={about3}
                alt="Ressort 3D métallisé" 
                className="w-[100%] object-cover drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="justify-center flex flex-col">
              <span className="text-5xl text-start font-black text-[#ffffff]">+<Counter to={10} />ans</span>
              <p className="text-sm text-[#ffffff80] text-start mt-4">D'expertise technique et stratégique cumulée.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ==========================================
          6. SECTION : TÉMOIGNAGE CITATION
          ========================================== */}
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

      {/* ==========================================
          7. SECTION : ÉTAPES / EXPERTISE
          ========================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariant}
        className="py-16 md:py-20 px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Votre profil, notre <span className="color-custom">expertise</span></h2>
            <div className="relative max-w-xs md:max-w-sm">
              <img src={hero_object_} alt="Expertise illustration" className="w-full h-auto" />
              <img className="absolute -top-[15px] left-0 w-full h-[120%] pointer-events-none opacity-30" src={Ellipse_10} alt="" />
            </div>
          </div>
           
          <motion.div 
            variants={staggerContainer}
            className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-10"
          >
            {[
              { num: "1", icon: service_icon1, image: Rectangle_7, title: "Vous êtes une entreprise en Europe (FR, CH, BE)", desc: "Vous cherchez un partenaire stratégique capable de comprendre votre marché et de piloter votre ROI, avec la réactivité d'une équipe locale.", titre_btn: "Découvrir notre accompagnement Europe" },
              { num: "2", icon: service1, image: '', title: "Vous êtes une Agence Web / Com", desc: "Vous cherchez un pôle de production externe, fiable, scalable et parfaitement rodé aux standards européens pour déléguer vos projets techniques.", titre_btn: "Découvrir notre offre de production" },
              { num: "3", icon: service2, image: '', title: "Vous êtes une entreprise à Madagascar", desc: "Vous voulez dominer votre marché local en appliquant les standards internationaux d'acquisition digitale et de conversion.", titre_btn: "Voir nos succès locaux" }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="flex gap-4 md:gap-6 relative group items-start"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-darkBg border border-white/20 text-xs md:text-sm font-bold flex items-center justify-center text-gray-400 group-hover:border-netyPink group-hover:text-netyPink transition-colors duration-300 shrink-0">
                  {step.num}
                </div>
                <div className="flex flex-col gap-2 items-start relative w-full">
                  <img src={step.icon} alt="Icon" className="" />
                  <h3 className="font-bold text-base md:text-lg text-white group-hover:text-netyPink transition-colors">{step.title}</h3>
                  <p className="text-white/60 text-xs md:text-sm max-w-md leading-relaxed">{step.desc}</p>
                  <button className="text-[#E7589A] text-xs md:text-sm font-semibold hover:underline mt-2 flex cursor-pointer items-center gap-1">
                    {step.titre_btn} <ArrowRight size={14} />
                  </button>
                  {step.image && (
                    <div className="hidden sm:block absolute right-[25px] -bottom-[100px] max-w-[100px] opacity-[0.9] group-hover:opacity-100 transition-opacity">
                      <img className="object-contain" src={step.image} alt="" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>   
      </motion.section>

      {/* ==========================================
          8. SECTION : CTA PRE-FOOTER
          ========================================== */}
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
            <div className="pt-2">
              <button className="w-full sm:w-auto px-8 py-[14px] rounded-[43px] text-white text-sm md:text-base font-medium bg-gradient-to-r from-[#E7589A] to-[#021F66] cursor-pointer hover:opacity-90 transition-all">
                Démarrer mon diagnostic stratégique offert
              </button>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white/5 rounded-full border border-white/10 flex items-center justify-center p-4">
              <img src={image_} alt="Astronaute" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}