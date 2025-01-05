import Image from "next/image";
import image from '../assets/images/sanisa_logo.jpg';

export default function Avatar() {
    return (
        <div 
            className="rounded-full p-2 w-fit" 
            style={{
                backgroundColor: "#fef1e8", // Color dentro del fondo de la imagen
            }}
        >
            <Image 
                src={image} 
                className="w-32 h-32 rounded-full" // Tamaño de la imagen
                alt="Sanisa logo" 
            />
        </div>
    );
}
