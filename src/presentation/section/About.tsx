import { BlurFade } from "@/components/ui/blur-fade";

export function About() {
  return (
    <section id='about' className='mt-8'>
      <BlurFade delay={0.25} inView>
        <h2 className='text-2xl font-bold'>À propos</h2>
        <div className='text-muted-foreground'>
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
