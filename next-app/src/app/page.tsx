"use client"

import Image from "next/image";

import { Header } from "./components/Header";
import { Alerts } from "./components/Alerts";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { WhatsiconFix } from "./components/Whatsapp";
import { BaseSection } from "./components/BaseSection";
import { VideoFull } from "./components/Video";
import { Depoimentos } from "./components/Depoimentos";
import { BaseSectionInv } from "./components/BaseSectionInv";
import { Categorias } from "./components/Categorias";
import { CarouselBody } from "./components/CarouselBody";


export default function Home() {
  return (
    <>
      <WhatsiconFix/>
      <Header/>   
      <Alerts/>
      <Carousel/>
      <BaseSection/>
      <Depoimentos/>
      <BaseSectionInv/>
      <CarouselBody/>
      <Categorias/>
      <VideoFull/>
      <Footer/>
    </>
  );
}
