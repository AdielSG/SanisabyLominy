"use client"


export default function CardLink({ link }) {
  function goTo(goToLink) {
    window.open(goToLink, "_blank")
  }

  return (
    <button 
      onClick={() => goTo(link.url)} // Llamar la función con el enlace correcto
      className="px-8 py-2.5 
      bg-pink-50 text-black-50 font-medium text-center
      hover:bg-pink-100 transition-colors duration-200 
      mx-auto w-auto min-w-[300px] text-md flex items-center gap-2"
    >
      {/* Ícono a la izquierda */}
      {link.icon}
      <span className="flex-grow text-center">{link.text}</span>
    </button>
  );
}
