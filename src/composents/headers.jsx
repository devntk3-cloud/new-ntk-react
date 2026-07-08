import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Si tu as installé lucide-react pour le menu mobile
import { useState } from 'react';
import logo from "../assets/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-6xl marg_auto sticky  top-0 left-0 w-full z-[999] backdrop-blur-md bg-darkBg/60 border-b border-white/[0.05] text-white  px-6 " >
      <div className=" mx-auto flex justify-between items-center">
        
        {/* LOGO (Gauche) */}
        <Link to="/new-ntk-react" className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-netyPink to-netyBlue bg-clip-text text-transparent">
          <img className="w-[150px]" src={logo}/>
        </Link>

        {/* LIENS DU MENU (Centre - Caché sur mobile) */}
        <div className="hidden md:flex items-center space-x-8 text-sm gap-8 font-medium text-gray-300 ">
          <Link to="/new-ntk-react" className="hover:text-netyPink transition-colors duration-200">Accueil</Link>
          <Link to="/notre-approche" className="hover:text-netyPink transition-colors duration-200">Notre approche</Link>
          <Link to="/services" className="hover:text-netyPink transition-colors duration-200">Services & Tarifs</Link>
          <Link to="/portfolio" className="hover:text-netyPink transition-colors duration-200">Réalisations</Link>
        </div>

        {/* BOUTON D'ACTION (Droite - Style bouton violet brillant de la maquette) */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="px-8 md:px-10 py-[12px] md:py-[15px] rounded-[43px] text-white font-medium bg-gradient-to-r from-[#E7589A] to-[#021F66] cursor-pointer hover:opacity-90 transition-all duration-200 text-sm md:text-base"
          >
            Nous accompagner
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile déroulant */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-darkBg/95 backdrop-blur-lg border-b border-white/[0.1] py-4 px-6 flex flex-col space-y-4 bg-black gap-[30px] md:bg-transparent md:gap-10">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-netyPink transition-colors">Accueil</Link>
          <Link to="/notre-approche" onClick={() => setIsOpen(false)} className="hover:text-netyPink transition-colors">Notre approche</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-netyPink transition-colors">Services & Tarifs</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-netyPink transition-colors">Réalisations</Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="px-8 md:px-10 py-[12px] md:py-[15px] rounded-[43px] text-white font-medium bg-gradient-to-r from-[#E7589A] to-[#021F66] text-center cursor-pointer hover:opacity-90 transition-all duration-200 text-sm md:text-base"
          >
            Nous accompagner
          </Link>
        </div>
      )}
    </nav>
  );
}