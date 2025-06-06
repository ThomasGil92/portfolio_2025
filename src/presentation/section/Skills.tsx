import { BlurFade } from "@/components/ui/blur-fade";
import { SkillCard } from "@/presentation/components/SkillCard";

const skills = {
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "📜" },
    { name: "HTML5", icon: "🖥️" },
    { name: "CSS3", icon: "🎨" },
    { name: "Next.js", icon: "⏭️" },
    { name: "Svelte", icon: "💫" },
    { name: "Redux", icon: "🔄" },
    { name: "GraphQL", icon: "📊" },
    { name: "Sass", icon: "🎀" },
    { name: "Tailwind CSS", icon: "🌬️" },
    { name: "Bootstrap", icon: "🎨" },
    { name: "Shadcn UI", icon: "🎨" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "NestJs", icon: "🐱" },
  ],

  Databases: [
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "💾" },
    { name: "Firebase", icon: "🔥" },
    { name: "SQLite", icon: "💿" },
    { name: "NeonDB", icon: "🌊" },
    { name: "Supabase", icon: "⚡" },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "CI/CD", icon: "🔄" },
  ],
  "Tools & Other": [
    { name: "Git", icon: "🔀" },
    { name: "Jest", icon: "🧪" },
    { name: "Cypress", icon: "🧪" },
    { name: "Jira", icon: "📝" },
    { name: "Figma", icon: "🎨" },
    { name: "VS Code", icon: "💻" },
    { name: "Windsurf", icon: "💻" },
    { name: "Cursor", icon: "💻" },
    { name: "Postman", icon: "📬" },
    { name: "Webpack", icon: "📦" },
    { name: "ESLint", icon: "🔍" },
    { name: "Prettier", icon: "✨" },
    { name: "Notion", icon: "📝" },
    { name: "Framer Motion", icon: "💫" },
  ],
};

export function Skills() {
  return (
    <section
      id='skills'
      className='pt-8 pb-2 rounded drop-shadow-xl bg-gray-50 dark:bg-gray-900'
    >
      <div className='container mx-auto px-4'>
        <BlurFade delay={0.25} inView>
          <h2 className='text-2xl font-bold mb-6'>Skills</h2>
        </BlurFade>
        <div className='grid md:grid-cols-1 gap-8'>
          {Object.entries(skills).map(([category, items]) => (
            <BlurFade key={category} delay={0.25} inView>
              <SkillCard category={category} items={items} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
