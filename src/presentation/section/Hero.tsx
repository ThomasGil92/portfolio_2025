import { BlurFade } from "@/components/ui/blur-fade";
import avatar from "../../../public/img/logo.png";
import Image from "next/image";

export function Hero() {
  return (
    <section id='hero'>
      <div className='gap-2 flex justify-between'>
        <div className='flex-col flex flex-1 space-y-1.5'>
          <BlurFade delay={0.25} inView>
            <h1 className='inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
              Hi, I&apos;m Thomas 👋
            </h1>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className='inline-block max-w-[600px] md:text-xl'>
              Software Engineer turned Entrepreneur. I love building things and
              helping people.
            </p>
          </BlurFade>
        </div>
        <div>
          <BlurFade delay={0.25} inView>
            <span className='relative flex overflow-hidden size-36 '>
              <Image alt='Avatar' src={avatar} className='mx-auto ' />
            </span>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
