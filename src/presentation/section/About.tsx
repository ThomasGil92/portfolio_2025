import { BlurFade } from "@/components/ui/blur-fade";

export function About() {
  return (
    <section
      id='about'
      className='mt-10 container mx-auto px-6 py-8 rounded-2xl border border-white/15 bg-background/20 backdrop-blur-lg shadow-2xl'
    >
      <BlurFade delay={0.25} inView>
        <h2 className='text-2xl font-bold px-2 text-neutral-900 dark:text-white'>About me</h2>
        <div className='p-2 pt-4'>
          <p>
            I come from a background in the restaurant industry, and in 2018, I
            transitioned into web development. I started building my own
            projects following my studies in web development on Udemy and
            OpenClassrooms.
          </p>
          <p>
            With over fifteen clients under my belt, I contribute to the
            architecture of your projects, track your product needs, and develop
            your features.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
