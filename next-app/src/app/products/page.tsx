"use client"

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Lista } from "../components/ProductList";
import { Alerts } from "../components/Alerts";
import {WhatsiconFix} from "../components/Whatsapp";
import { Carousel } from "../components/Carousel";


export default function Home() {
  return (
    <>
     <WhatsiconFix/>
      <Header/>   
      <Alerts/>
      <div className="bg-white gap-y-3 pt-20">
      <Lista/> 
      </div>
      <Footer/>

      
    </>
  );
}
