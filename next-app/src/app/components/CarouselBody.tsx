import Fill from "@/app/assets/Rectangle 28.png";
import Image from "next/image";

export function CarouselBody(){
    return(
        <div>
            <Image
                className="w-full"
                src={Fill}
                alt='carousel'>
            </Image>
        </div>
    )
}