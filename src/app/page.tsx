import { Hero } from "@/presentation/section/Hero";
import { About } from "@/presentation/section/About";
import { WorkXp } from "@/presentation/section/WorkXp";
import { Skills } from "@/presentation/section/Skills";
import { LatestWorks } from "@/presentation/section/LatestWorks";
import { GHRepos } from "@/presentation/section/GHRepos";
import { Contact } from "@/presentation/section/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkXp />
      <Skills />
      <LatestWorks />
      <GHRepos />
      <Contact />
    </>
  );
}
