import Image from "next/image";
import image from '../assets/images/Sanisa_sin_fondo.png';

export default function Loader() {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[#eacbcb]">
            <div className="animate-pulse h-300 w-300 flex justify-center items-center">
                <Image src={image} alt="Loading..." width={550} height={550}/>
            </div>
        </div>
    )
}