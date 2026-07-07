import React, { useRef, useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'; // Import manquant pour les animations
import contact_lmg from '../assets/contact.jpg';
// Assurez-vous d'importer votre image correctement ici :
// import contact_lmg from '../assets/contact-bg.jpg'; 


export default function ContactSection() {
  const formRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Envoi de l'e-mail pour VOUS
    emailjs.sendForm(
      'service_w45xrqi',   
      'template_xib6p0b', 
      formRef.current, 
      '1XyHYL9WYOd9MXDZJ'
    )
    .then(() => {
      // 2. Envoi automatique de l'e-mail au CLIENT
      return emailjs.sendForm(
        'service_w45xrqi',   
        'template_9go4g69', 
        formRef.current, 
        '1XyHYL9WYOd9MXDZJ'
      );
    })
    .then(() => {
        // Ce code s'exécute quand les DEUX e-mails ont bien été envoyés
        alert('Votre message a bien été envoyé et un e-mail de confirmation vous a été adressé !');
        formRef.current.reset(); 
    })
    .catch((error) => {
        alert("Une erreur s'est produite lors de l'envoi...");
        console.error(error.text);
    });
  };

  return (
    <> {/* Ajout d'un Fragment pour envelopper les deux sections */}
      <div className="relative h-screen flex items-center justify-center items-center  overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-55 before:z-10">
        <section className="max-w-6xl">
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
            className="text-[#fff] border border-[#E7589A] px-6 md:px-10 py-[12px] md:py-[15px] rounded-[43px] mb-[10px]"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-[40px] text-center text-sm md:text-base font-medium">
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
            className="text-[#fff]/80 text-center text-sm max-w-2xl font-light px-4"
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
      </div>

      <section className="max-w-6xl w-full bg-[#000101] py-20 px-6 relative z-10 overflow-visible mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-0 relative">
          
          {/* BLOC GAUCHE - Infos de contact */}
          <div className="w-full lg:w-[55%] bg-[#021F66] rounded-3xl p-8 md:p-12 lg:pr-24 flex flex-col justify-center border border-white/5 relative z-10 lg:translate-x-6">
            <span className="text-[#E7589A] text-xs font-bold tracking-widest uppercase mb-2 block">
              Des questions ?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              CONTACTEZ <span className="text-[#E7589A]">NOUS !</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-md">
              N'hésitez pas à nous contacter pour plus d'informations, nous sommes là pour y répondre rapidement.
            </p>

            <div className="flex flex-col gap-6">
              {/* Téléphone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E7589A]/10 border border-[#E7589A]/30 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#E7589A]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs font-medium">Téléphone</span>
                  <a href="tel:+261384632611" className="text-white font-semibold text-sm md:text-base hover:text-[#E7589A] transition-colors">
                    +261 38 46 326 11
                  </a>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E7589A]/10 border border-[#E7589A]/30 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[#E7589A]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs font-medium">Mail</span>
                  <a href="mailto:tafita@netykom.com" className="text-white font-semibold text-sm md:text-base hover:text-[#E7589A] transition-colors">
                    tafita@netykom.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BLOC DROIT - Le Formulaire */}
          <div className="w-full lg:w-[45%] bg-[#F8FAFC] text-[#050B14] rounded-3xl p-8 md:p-10 shadow-2xl relative z-20 lg:translate-y-12 border border-black/5 bg-gradient-to-tr from-white via-[#F8FAFC] to-white">
            
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
              {/* Nom */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-800">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="user_nom"
                  required 
                  className="w-full h-11 px-4 rounded-md border border-[#8B2356] bg-white focus:outline-none focus:ring-2 focus:ring-[#E7589A]/20 transition-all text-sm"
                />
              </div>

              {/* Prénom */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-800">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="user_prenom"
                  required 
                  className="w-full h-11 px-4 rounded-md border border-[#8B2356] bg-white focus:outline-none focus:ring-2 focus:ring-[#E7589A]/20 transition-all text-sm"
                />
              </div>

              {/* Téléphone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-800">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  name="user_phone"
                  required 
                  className="w-full h-11 px-4 rounded-md border border-[#8B2356] bg-white focus:outline-none focus:ring-2 focus:ring-[#E7589A]/20 transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-800">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="user_email"
                  required 
                  className="w-full h-11 px-4 rounded-md border border-[#8B2356] bg-white focus:outline-none focus:ring-2 focus:ring-[#E7589A]/20 transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-800">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  className="w-full p-4 rounded-md border border-[#8B2356] bg-white focus:outline-none focus:ring-2 focus:ring-[#E7589A]/20 transition-all text-sm resize-y"
                />
              </div>

              {/* Consentement Checkbox */}
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-xs font-bold text-gray-800">
                  Consent <span className="text-red-500">*</span>
                </label>
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    required 
                    className="w-4 h-4 mt-0.5 accent-[#8B2356] cursor-pointer rounded border-gray-300"
                  />
                  <label htmlFor="consent" className="text-[11px] leading-tight text-gray-600 cursor-pointer">
                    Oui, j'accepte la <a href="#" className="text-blue-600 hover:underline">politique de confidentialité</a> et les <a href="#" className="text-blue-600 hover:underline">conditions générales</a>.
                  </label>
                </div>
              </div>

              {/* Faux Bloc ReCAPTCHA */}
              <div className="mt-2 p-3 bg-white border border-gray-200 shadow-sm rounded flex items-center justify-between max-w-[260px]">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="captcha" className="w-6 h-6 border-2 border-gray-300 rounded cursor-pointer accent-green-600" />
                  <label htmlFor="captcha" className="text-xs font-medium text-gray-700 cursor-pointer select-none">
                    Je ne suis pas un robot
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center shrink-0">
                  <span className="text-[9px] text-gray-400 font-bold tracking-tight">reCAPTCHA</span>
                  <span className="text-[7px] text-gray-400">Privacy - Terms</span>
                </div>
              </div>

              {/* Bouton Soumettre */}
              <button 
                type="submit" 
                className="mt-4 w-fit px-8 py-3 bg-gradient-to-r from-[#8B2356] to-[#200A3B] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:opacity-95 transition-opacity shadow-lg shadow-[#8B2356]/20 cursor-pointer"
              >
                Contactez-nous
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}