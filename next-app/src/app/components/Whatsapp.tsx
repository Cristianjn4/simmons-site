import WhatsIcon from "@/app/assets/whatsicon.png";
import Image from "next/image";

export function WhatsiconFix() {
    return(
        <div className="">
            
            <a className="flex fixed items-centerw-10 z-20 justify-between bottom-2 right-3" href="https://bit.ly/3XHDGQ6" target="_blank">
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500 top-6 left-28">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span></span>
            <Image className="w-32" 
            src={WhatsIcon}
            alt="Entre em contato pelo Whatsapp"
            >
                
            </Image>
            </a>
        </div>
    )
}