import React from 'react';
/*import { Facebook, Instagram, Linkedin } from 'lucide-react';*/
import logoNetykom from "../assets/logo.png"; // Ajustez vos imports d'images
import object3d from "../assets/footer_img.png";     // L'élément 3D central
import Instagram from "../assets/Instagram.svg";  
import linkedin from "../assets/linkedin.svg";  
import Facebook from "../assets/Facebook.svg";  

export default function Footer() {
  return (
    <footer className="max-w-6xl marg_auto w-full bg-[#000101] text-white pt-12 pb-6 px-6 relative overflow-hidden border-t border-white/10">
      
      {/* Conteneur principal */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Ligne Supérieure : Logo, Élément 3D, Contacts */}
        <div className="flex flex-row justify-between md:items-center gap-8 items-center">
          
          {/* Bloc Gauche : Logo, Titre, Pays et Réseaux */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 w-full md:w-1/3">
            <img src={logoNetykom} alt="NETYKom Logo" className="w-[150px] object-contain" />
          </div>
          {/* Bloc Central : Élément 3D */}
          <div className="hidden md:flex justify-center items-center w-1/3">
            <img src={object3d} alt="Glass abstract element" className="" />
          </div>

          {/* Bloc Droit : Infos de contact */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-1 w-full md:w-1/3 font-medium text-sm md:text-base">
            <a href="mailto:contact@netykom.mg" className="text-white/60 hover:text-white text-xs md:text-sm mb-1">
              contact@netykom.mg
            </a>
            <p className="tracking-wider">+261 XX XX XX XX</p>
            <p className="tracking-wider">+33 X XX XX XX XX</p>
          </div>

        </div>

        {/* Ligne Médiane : Liens de Navigation / Menu */}
        <div className="flex justify-between md:items-start items-start flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-4 ">
              <div className="mt-4">
                    <h3 className="text-lg font-bold">Agence Webstratège</h3>
                    <p className="text-sm text-white/60 mt-1 flex gap-4">
                      France <span className="text-[#E7589A]">•</span> Suisse <span className="text-[#E7589A]">•</span> Madagascar
                    </p>
              </div>

                {/* Réseaux sociaux */}
                <div className="flex gap-6 mt-4 md:justify-start justify-center">
                  <a href="#" className="flex items-center justify-center  transition-colors">
                    <img src={Instagram} />
                  </a>
                  <a href="#" className="flex items-center justify-center transition-colors">
                   <img src={linkedin} />
                  </a>
                  <a href="#" className=" flex items-center justify-center transition-colors">
                    <img src={Facebook} />
                  </a>
                </div>
            </div>
          <div className="flex justify-between  w-full md:justify-end gap-8 md:gap-24 border-t border-white/5">
            
            {/* Colonne Nos Expertises */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#E7589A] font-bold text-lg tracking-wider">Nos expertises</h4>
              <ul className="flex flex-col gap-2 text-sm  md:text-sm text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Écosystème WordPress</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO & Content</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Acquisition (Ads)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CRM & Automation</a></li>
              </ul>
            </div>

            {/* Colonne Légal & Confiance */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#E7589A] font-bold text-lg tracking-wider">Légal & Confiance</h4>
              <ul className="flex flex-col gap-2 text-sm md:text-sm text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Charte Qualité & Sécurité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGV / CGU</a></li>
              </ul>
            </div>

          </div>
        </div>
        {/* Ligne Inférieure : Barres de Copyright (Bas de page) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-[10px] md:text-sm text-white/40">
          <div>
            Copyright 2026 <span className="mx-1">|</span> Créer par NETYKom <span className="mx-1">|</span> Tous droits réservés
          </div>
          <div className="text-center md:text-right">
            Conçu avec passion à Madagascar, déployé pour le monde
          </div>
        </div>

      </div>
    </footer>
  );
}