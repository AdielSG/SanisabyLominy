"use client";

import Image from "next/image";
import Avatar from "../components/Avatar";
import { Instagram, Music, Phone, Youtube } from "lucide-react";
import CardLink from "@/components/CardLink";
import Share from "@/components/Share";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Home() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen">
      {!showContent ? (
        <Loader />
      ) : (
        <div className="w-screen h-screen"
          style={{
            backgroundColor: "#eacbcb", // Color de fondo similar al de la imagen
          }}
        >
          <br />
          {/* Avatar */}
          <div className="flex justify-center items-center pt-4">
            <Avatar />
          </div>

          <br />

          {/* Títulos */}
          <div className="text-center font-medium text-lg mt-4 pb-4">
            <h1
              style={{
                color: "white",
                fontFamily: "'Prata', serif",
                fontSize: "3rem", // Tamaño grande para "Sanisa"
                fontWeight: "bold",
              }}
            >
              SANISA
            </h1>
            <h2
              style={{
                color: "white",
                fontSize: "1.2rem", // Tamaño más pequeño para "BY LOMINY"
              }}
            >
              BY LOMINY
            </h2>
          </div>

          <br />

          {/* Enlaces */}
          <div className="flex flex-col items-center gap-4">
            {links.map((link) => (
              <CardLink link={link} key={link.text} />
            ))}
          </div>

          <br />
          <div className="justify-center">
            <h1
              style={{
                color: "white",
                fontFamily: "'Hero'",
                fontSize: "1rem", // Tamaño grande para "Sanisa"
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              #MADEWITHLOVE
            </h1>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
}

const links = [
  {
    url: "https://wa.link/c5anam",
    text: "Whatsapp USA",
    icon: <FaWhatsapp className="h-5 w-5 text-black-50" />,
  },
  {
    url: "https://wa.link/upwj9t",
    text: "Whatsapp RD",
    icon: <FaWhatsapp className="h-5 w-5 text-black-50" />,
  },
  {
    url: "https://www.instagram.com/sanisabylominy/",
    text: "Instagram",
    icon: <Instagram className="h-5 w-5 text-black-50" />,
  },
  {
    url: "https://www.tiktok.com/@sanisabylomi3",
    text: "Tik Tok",
    icon: <FaTiktok className="h-5 w-5 text-black-50" />,
  },
];
