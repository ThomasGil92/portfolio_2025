import { BlurFade } from "@/components/ui/blur-fade";
import avatar from "../../../public/img/Gemini_Generated_Image_tb3zo5tb3zo5tb3z.png";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id='hero'
      className='py-10 md:py-14 lg:py-20 container mx-auto px-6 rounded-2xl border border-white/15 bg-background/20 backdrop-blur-lg shadow-2xl text-dark'
    >
      <div className='mx-auto'>
        <div className='flex flex-col-reverse items-center md:flex-row md:justify-between gap-2 '>
          <div className='flex-1 text-center md:text-left space-y-4 md:space-y-6'>
            <BlurFade delay={0.25} inView>
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight'>
                Hi, I&apos;m Thomas <span className='inline-block animate-wave'>👋</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <p className='text-lg sm:text-xl text-dark max-w-2xl mx-auto md:mx-0'>
                Hi, I’m Thomas — a full‑stack developer passionate about building
                crisp UIs and robust backends.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.25} inView>
            <div className='relative w-52 h-52 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden '>
              <Image 
                alt='Avatar' 
                src={avatar} 
                fill
                sizes='(max-width: 768px) 8rem, (max-width: 1024px) 9rem, 10rem'
                className='object-cover hover:scale-105 transition-transform duration-500'
                priority
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
