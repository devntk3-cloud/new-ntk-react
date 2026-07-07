import { motion } from 'framer-motion';
import img1 from "../assets/Hero-section.png";

export default function HeroSection({ fadeInUp, staggerContainer }) {
  const marqueeItems = [
    "Même fuseau horaire que Paris (GMT+3)",
    "Le bras armé de +50 agences européennes",
    "100% Conforme RGPD",
  ];

  return (
    <>
      {/* SECTION HERO */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-cover bg-center max-w-6xl mx-auto"  
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="px-6 flex flex-col justify-center pt-[150px] md:pt-[250px] pb-[100px] md:pb-[150px] items-center gap-[30px] md:gap-[40px]">
          
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
            <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Découvrir nos solutions
            </button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}