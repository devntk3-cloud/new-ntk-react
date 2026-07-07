import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

const Counter = ({ from = 0, to = 350, duration = 1500, prefix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let current = from;
    const steps = duration / 10;
    const increment = (to - from) / steps;
    const interval = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= to) || (increment < 0 && current <= to)) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / steps);
    return () => clearInterval(interval);
  }, [from, to, duration, isInView]);

  return (
    <span ref={ref} className="text-5xl font-black text-white">
      {prefix}{count}
    </span>
  );
};

export default function StatsSection({ sectionVariant, staggerContainer, fadeInUp }) {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariant}
      className="py-20 px-6 z-10 relative flex flex-col items-center max-w-6xl "
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ils nous confient leur technique,
          <span className="color-custom"> nous <br />leur apportons la croissance</span>
        </h2>
      </div>

      {/* Conteneur de la grille avec stagger */}
      <motion.div 
        variants={staggerContainer}
        className="flex flex-col md:flex-row gap-6 pt-8 w-full "
      >
        {/* Bloc Bleu */}
        <motion.div 
          variants={fadeInUp}
          whileHover={{ y: -5 }}
          className="flex-1 bg-[#943FDE] rounded-3xl pl-[30px] pb-5 pr-0 flex min-h-[150px]"
        >
          <div className="justify-end flex flex-col flex-1">
            <span className="text-5xl text-start font-black text-[#ffffff]">
              +<Counter to={350} />
            </span>
            <p className="text-sm text-[#ffffff80] text-start mt-4">
              Sites web et plateformes livrés avec succès.
            </p>
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
          <div className="flex flex-col items-start justify-end flex-1">
            <img 
              src={about2}
              alt="Ressort 3D métallisé" 
              className="w-32 md:w-40 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-0"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="justify-center flex flex-col flex-1 -*">
            <span className="text-5xl text-start font-black text-[#ffffff]">
              <Counter to={80} />%
            </span>
            <p className="text-sm text-[#ffffff80] text-start mt-4">
              la sous-traitance pour des agences web en France et en Suisse.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bloc Inférieur */}
      <div className="w-full max-w-6xl mx-auto mt-6">
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
            <span className="text-5xl text-start font-black text-[#ffffff]">
              +<Counter to={10} />ans
            </span>
            <p className="text-sm text-[#ffffff80] text-start mt-4">
              D'expertise technique et stratégique cumulée.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}