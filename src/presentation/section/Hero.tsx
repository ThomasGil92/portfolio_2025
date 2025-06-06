import { BlurFade } from "@/components/ui/blur-fade";
import avatar from "../../../public/img/logo.png";
import Image from "next/image";

export function Hero() {
  return (
    <section id='hero' className='py-8 md:py-12 lg:py-16'>
      <div className='mx-auto'>
        <div className='flex flex-col-reverse items-center md:flex-row md:justify-between gap-2 '>
          <div className='flex-1 text-center md:text-left space-y-4 md:space-y-6'>
            <BlurFade delay={0.25} inView>
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight'>
                Hi, I&apos;m Thomas <span className='inline-block animate-wave'>👋</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <p className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0'>
                Software Engineer turned Entrepreneur. I love building things and
                helping people.
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
