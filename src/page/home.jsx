import HeroSection from '../composent-acceuil/hero';
import ApprocheSection from '../composent-acceuil/Approche';
import ExcellenceSection from '../composent-acceuil/Excellence';
import TarifsSection from '../composent-acceuil/Tarifs';
import StatsSection from '../composent-acceuil/Stats';
import TestimonialSection from '../composent-acceuil/Tmoignage';
import ExpertiseSection from '../composent-acceuil/Expertise';
import CtaSection from '../composent-acceuil/Cta';
import Marquere from '../composent-acceuil/Marquere';
import '../css-custom/style.css';
import Actual_Textiles_LOGO from "../assets/Actual-Textiles-LOGO.png";
import logo_KC from "../assets/logo_KC.png";
import logo_madabrousse from "../assets/logo_madabrousse.png";
import Logo_Ryze from "../assets/Logo_Ryze.png";
import logo_id_motor from "../assets/logo-id-motor.png";
import Logo_Le_Village_Maquettes_Bateaux from "../assets/Logo_Le_Village_Maquettes_Bateaux.png";
import jos_tours_logo from "../assets/jos_tours_logo.png";
import Ellipse_10 from "../assets/Ellipse_10.png";

// Variantes d'animation globales passées aux sous-composants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

export default function Accueil() {
  const itemsTextes = ["Livraison gratuite dès 50€", "Support client 24/7", "Satisfait ou remboursé"];
  
  const itemsImages = [
    <img src={Actual_Textiles_LOGO} alt="Logo" className="w-full object-cover" />,
    <img src={logo_KC} alt="Logo" className="w-full object-cover" />,
    <img src={logo_madabrousse} alt="Logo" className="w-full object-cover" />,
    <img src={Logo_Ryze} alt="Logo" className="w-full object-cover" />,
    <img src={logo_id_motor} alt="Logo" className="w-full object-cover" />,
    <img src={Logo_Le_Village_Maquettes_Bateaux} alt="Logo" className="w-full object-cover" />,
    <img src={jos_tours_logo} alt="Logo" className="w-full object-cover" />
  ];
  return (
    <div className="bg-darkBg text-white min-h-screen overflow-hidden relative">
      <HeroSection fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <Marquere items={itemsTextes}/>
      <ApprocheSection sectionVariant={sectionVariant} staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
      <ExcellenceSection sectionVariant={sectionVariant} staggerContainer={staggerContainer} /*fadeInUp={fadeInUp}*/ />
      <TarifsSection sectionVariant={sectionVariant} fadeInUp={fadeInUp} />
      <StatsSection sectionVariant={sectionVariant} staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
      <section className="max-w-6xl relative"><img src={Ellipse_10} className="top-[-650px] absolute right-0 w-[500px] z-50 rotate-[-180deg]"  /></section>
      <Marquere items={itemsImages} variant="image"/>
      <TestimonialSection sectionVariant={sectionVariant} />
      <ExpertiseSection sectionVariant={sectionVariant} staggerContainer={staggerContainer} fadeInUp={fadeInUp} />
      <section className="max-w-6xl relative"><img src={Ellipse_10} className="top-[-500px] absolute left-0 w-[500px]"  /></section>
      <CtaSection sectionVariant={sectionVariant} />
    </div>
  );
}