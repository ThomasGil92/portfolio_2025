"use client";

import { LogoCarousel } from "@/components/ui/logo-carousel";
import Image from "next/image";
import IP from "../../../public/img/IP.png";
import Podo from "../../../public/img/podologue.png";
import Theodo from "../../../public/img/theodo.webp";
import Quintyss from "../../../public/img/quityss.png";
import Oclock from "../../../public/img/oclock.png";
import Cartoon from "../../../public/img/cartoonely.webp";
import Bpi from "../../../public/img/bpi.png";
import ThreeWA from "../../../public/img/3wa.png";
import CAMPA from "../../../public/img/Logo_CAMPA_Gradient.svg";
import IFTB from "../../../public/img/iftb.webp";
import { BlurFade } from "@/components/ui/blur-fade";

function IPLogo() {
  return <Image src={IP} alt='Integrative phenomics' />;
}

function PodoLogo() {
  return <Image src={Podo} alt='Podologue' />;
}

function TheodoLogo() {
  return <Image src={Theodo} alt='Theodo' />;
}

function QuintyssLogo() {
  return <Image src={Quintyss} alt='Quintyss' />;
}
function OclockLogo() {
  return <Image src={Oclock} alt='Oclock' />;
}
function CartoonLogo() {
  return <Image src={Cartoon} alt='Cartoon' />;
}
function BpiLogo() {
  return <Image src={Bpi} alt='Bpi' />;
}
function ThreeWALogo() {
  return (
    <div
      className='w-100 h-100'
      style={{
        backgroundImage: `url(${ThreeWA.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
}
function CAMPALogo() {
  return <Image src={CAMPA} alt='CAMPA' />;
}
function IFTBLogo() {
  return (
    <div
      className='w-100 h-100'
      style={{
        backgroundImage: `url(${IFTB.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
}

// Массив с логотипами
const allLogos = [
  { name: "Integrative Phenomics", id: 1, img: IPLogo },
  { name: "Podologue", id: 2, img: PodoLogo },
  { name: "Theodo", id: 3, img: TheodoLogo },
  { name: "Quintyss", id: 4, img: QuintyssLogo },
  { name: "Oclock", id: 5, img: OclockLogo },
  { name: "Cartoonely", id: 6, img: CartoonLogo },
  { name: "Bpi", id: 7, img: BpiLogo },
  { name: "3WA", id: 8, img: ThreeWALogo },
  { name: "CAMPA", id: 9, img: CAMPALogo },
  { name: "IFTB", id: 10, img: IFTBLogo },
];
export function Banner() {
  return (
    <section id='banner' className='mt-8'>
      <BlurFade delay={0.25} inView>
        <LogoCarousel columnCount={3} logos={allLogos} />
      </BlurFade>
    </section>
  );
}
