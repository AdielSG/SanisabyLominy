import React from 'react';
import { MapPin } from 'lucide-react';

function goTo(goToLink) {
  window.open(goToLink, "_blank")
}

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-pink-50 w-full p-4 shadow-md">
          <div className="flex justify-center items-center gap-6 text-sm">
            <button
            className="flex items-center gap-2 hover:opacity-75 transition-opacity">
              <MapPin size={30} className="text-gray-700" />
              <span className="font-medium">
                <span className="text-gray-700">Santo Domingo</span>
                {' '}
                {/* <span className="text-gray-700">Francisco segura Sandoval, Los Mina</span> */}
              </span>
            </button>
    
            <div className="h-4 w-px bg-gray-300" />
    
            <button
            onClick={() => goTo("https://maps.app.goo.gl/aJqMbd6cHe9ML5ZK7")}
            className="flex items-center gap-2 hover:opacity-75 transition-opacity">
              <MapPin size={30} className="text-gray-700" />
              <span className="font-medium">
                <span className="text-gray-700">4842 Broadway, New York, NY 10034</span>
                {' '}
                {/* <span className="text-gray-700">RD</span> */}
              </span>
            </button>
          </div>
        </footer>
      );
};

export default Footer;