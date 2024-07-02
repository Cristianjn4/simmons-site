import Banner from "@/app/assets/banner-rotativo-1.png";
import Bamboo from "@/app/assets/bamboo.png"
import Image from "next/image";

export function Carousel(){
    return(

        
        <div className="z-0">
            {/*<Image className="absolute right-0 w-96" src={Bamboo}></Image>*/}         
            <Image className=" w-full h-auto" src={Banner}></Image>
        </div>
    )
}