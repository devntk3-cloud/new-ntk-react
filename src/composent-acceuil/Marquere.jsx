import React from 'react';

export default function Marquere({ items = [], variant = "text" }) {
  
  // SÉCURITÉ COUPURE TEXTE : Si c'est du texte, on multiplie les éléments par 3
  // pour que la ligne soit plus large que l'écran et ne coupe jamais.
  let finalItems = items;
  if (variant === "text") {
    finalItems = [...items, ...items, ...items];
  }

  const renderItem = (item, idx, prefix) => {
    let content = item;
    if (typeof item === 'string') {
      content = <span>{item}</span>;
    }

    // On prépare la variable du point de séparation (votre logique exacte)
    let separator;
    if (variant === "text") {
      // Si c'est du texte, on affiche le point
      separator = <span className="w-2 h-2 rounded-full bg-[#E7589A] shrink-0" />;
    } else {
      // Sinon (le "else"), on met le point en invisible (opacity-0)
      separator = <span className="w-2 h-2 opacity-0 rounded-full bg-[#E7589A] shrink-0" />; 
    }

    return (
      <div key={`${prefix}-${idx}`} className="flex items-center gap-10 text-white font-medium text-sm md:text-base shrink-0">
        {content}
        {separator}
      </div>
    );
  };

  // Gestion de la classe de bordure sans ternaire
  let containerClasses = "w-full max-w-6xl bg-[#000101] py-4 overflow-hidden relative z-10 border-y border-[#E7589A]/30";
  if (variant === "image") {
    containerClasses = "w-full max-w-6xl bg-[#000101] py-4 overflow-hidden relative z-10 border-none";
  }

  return (
    <section className={containerClasses}>
      {/* Retrait du gap-10 ici pour supprimer définitivement la coupure visuelle */}
      <div className="flex whitespace-nowrap animate-marquee w-max">
        
        {/* Première liste (utilise désormais finalItems) */}
        <div className="flex items-center gap-10 pr-10 shrink-0">
          {finalItems.map((item, idx) => renderItem(item, idx, 'first'))}
        </div>

        {/* Deuxième liste identique (utilise désormais finalItems) */}
        <div className="flex items-center gap-10 pr-10 shrink-0" aria-hidden="true">
          {finalItems.map((item, idx) => renderItem(item, idx, 'second'))}
        </div>

      </div>
    </section>
  );
}