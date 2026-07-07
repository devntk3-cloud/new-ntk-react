import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Leaf, Sun, TreePine, CheckCircle } from "lucide-react";
import contact_lmg from '../assets/contact.jpg';

export default function Apropos () {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative h-screen flex items-center justify-center items-center  overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:bg-black  before:z-10">

        <div className="absolute inset-0">
          <img
            src={contact_lmg}
            className="w-full h-full object-cover"
            alt="garden"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white gap-4 flex flex-col items-center ">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fff] border border-[#E7589A] px-6 md:px-10 py-[12px] md:py-[15px] rounded-[43px] mb-[10px"
          >
          <div className="  flex flex-col sm:flex-row items-center gap-2 md:gap-[40px] text-center text-sm md:text-base font-medium">
           Agence Webstratège 
            <ul className="flex flex-wrap justify-center gap-3 md:gap-[30px]"> 
                <li className="before:content-['|'] before:text-[#E7589A] before:mr-2 sm:before:mr-3 text-xs md:text-sm">France</li> 
                <li className="before:content-['•'] before:text-[#E7589A] before:mr-2 sm:before:mr-3 text-xs md:text-sm">Suisse</li> 
                <li className="before:content-['•'] before:text-[#E7589A] before:mr-2 sm:before:mr-3 text-xs md:text-sm">Madagascar</li>
              </ul>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center font-extrabold tracking-tight max-w-5xl leading-[1.2] md:leading-[1.15]"
          >
           Nous <span> Contacter </span>
            
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[#fff]/80 text-center text-sm sm:text-sm md:text-sm max-w-2xl font-light px-4"
          >
            Besoin d’assistance pour votre site web ou un projet de création en cours ? L’équipe de Netykom se tient prête à vous offrir un accompagnement sur mesure. Démarrer votre projet dès maintenant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 flex gap-4 justify-center"
          >
            <button className="px-8 md:px-10 py-[12px] md:py-[15px] rounded-[43px] text-white font-medium bg-gradient-to-r from-[#E7589A] to-[#021F66] cursor-pointer hover:opacity-90 transition-all duration-200 text-sm md:text-base">
              Nos services
            </button>
            <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Contactez-nous
            </button>
          </motion.div>
        </div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden md:block absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-xl text-white"
        >
          +120 projets réalisés
        </motion.div>
      </section>

      {/* =========================
          ABOUT SECTION
      ========================== */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            className="rounded-2xl shadow-lg"
            alt="about"
          />

          <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
            <TreePine size={28} />
          </div>
        </motion.div>

        {/* Text */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Qui sommes-nous ?
          </motion.h2>

          <p className="mt-4 text-gray-600">
            Nous sommes une équipe de passionnés spécialisés dans la création
            et l’entretien d’espaces verts modernes et durables.
          </p>

          <div className="mt-6 space-y-4">

            {[
              "Conception de jardins modernes",
              "Entretien professionnel",
              "Aménagement écologique",
              "Solutions sur mesure"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="text-green-500" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            En savoir plus
          </button>
        </div>
      </section>
    </div>
  );
}