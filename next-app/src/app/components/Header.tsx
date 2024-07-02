import Logo from "@/app/assets/Slogo.png";
import Image from "next/image";
import { Search } from "./Search";

export function Header(){
    return (
        <header className="block fixed flex item-center w-full h-20 z-10 pt-10 px-4 h-40 bg-gradient-to-b from-gray-800 to-transparent">
            <div className="w-full max-w-[1246] px-[20px] mx-auto ">
                <div className="flex items-center m-5 gap-14 justify-between ">
                    
                    <div className="flex items-center gap-14 ">
                        <Image className="w-12" src={Logo}></Image>

                        <ul className="flex items-center gap-12">

                        <li>
                        <a href="/" className="flex items-center gap-3">Home</a>
                        </li>

                        <li>
                            <a href="/products" className="flex items-center gap-3">Produtos</a>
                            <a/>
                        </li>

                        <li>
                            <a href="/" className="flex items-center gap-3">Fale Conosco</a>
                        </li>
                        
                        <li>
                            <a href="/" className="flex items-center gap-3">FAQ</a>
                        </li>

                        <li>
                            <a href="/" className="flex items-center gap-3">Chegue até nós</a>                            
                        </li>

                        </ul>
                    </div>
                     

                    <div className="flex items-center gap-3 pr-56">
                    <Search/>
                        <button className="pr-3">
                        <span>
                        <svg className="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                        </span>
                        </button>

                        <button>
                        <span>
                        <svg className="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />  <line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </span>
                        </button>
                    </div>
                    

                </div>
            </div>
        </header>
    )
}