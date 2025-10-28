"use client";
import { useState } from "react";
import { Play, X } from "lucide-react";
import ReactPlayer, { YouTubeConfig } from "react-player/youtube";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

// Inline components to avoid module resolution issues
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

const Button = ({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Simplified Dialog implementation
const Dialog = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      <div
        className='fixed inset-0 bg-black/50 backdrop-blur-sm'
        onClick={() => onOpenChange(false)}
      />
      <div className='relative z-50 w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl'>
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={className}>{children}</div>;

// Card component with proper types
const Card = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`rounded-lg border bg-white shadow-sm overflow-hidden ${className}`}
    {...props}
  />
);

const CardHeader = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-4 ${className}`} {...props} />
);

const CardTitle = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props} />
);

const CardContent = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-4 pt-0 ${className}`} {...props} />
);

const CardFooter = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-4 pt-0 ${className}`} {...props} />
);

type WorkItem = {
  id: string;
  title: string;
  description: string;
  type: "article" | "video";
  url: string;
  thumbnailUrl: string;
  date: string;
  technologies: string[];
};

export const LatestWorks = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setCurrentVideo(url);
    // Remove any existing fullscreen class from previous videos
    document
      .querySelectorAll(".video-fullscreen")
      .forEach((el) => el.classList.remove("video-fullscreen"));
  };

  const closeVideo = () => {
    setCurrentVideo(null);
    // Exit fullscreen when closing the video
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .catch((err) => console.error("Error exiting fullscreen:", err));
    }
  };

  const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const playerContainer = e.currentTarget.querySelector(".react-player");
    if (playerContainer && !document.fullscreenElement) {
      playerContainer.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    }
  };
  const works: WorkItem[] = [
    {
      id: "3",
      title: "Next.js + Clean Architecture",
      description:
        "In my latest YouTube video, I explain how to apply Clean Architecture to your Next.js projects.",
      type: "video",
      url: "https://www.youtube.com/watch?v=4orxqlvjKhc",
      thumbnailUrl: "https://i3.ytimg.com/vi/4orxqlvjKhc/maxresdefault.jpg",
      date: "2024-01-14",
      technologies: ["Next.js", "TypeScript", "Clean Architecture", "Redux"],
    },
    {
      id: "1",
      title:
        "Mastering Next.js with Clean Architecture, Redux, TDD & BDD (Part 1/6 — Introduction)",
      description:
        "Building a scalable, testable, and maintainable Next.js application is challenging. Without a solid architecture, technical debt quickly accumulates, ...",
      type: "article",
      url: "https://medium.com/@tgil849/mastering-next-js-with-clean-architecture-redux-tdd-bdd-part-1-6-introduction-1f892d697d7e",
      thumbnailUrl:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*yYkitaR24SuFNXYyTxL1xA.gif",
      date: "2025-03-11",
      technologies: ["Next.js", "Redux", "TDD", "BDD", "Vitest", "Cucumber"],
    },
    {
      id: "2",
      title: "Next.js + OpenAI | Résumeur de vidéo Youtube",
      description:
        "Watch how I built this video summary with NextJs and OpenAI.",
      type: "video",
      url: "https://www.youtube.com/watch?v=WS5MbxXuuBE",
      thumbnailUrl: "https://i3.ytimg.com/vi/WS5MbxXuuBE/maxresdefault.jpg",
      date: "2024-11-12",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    },
    // Add more works as needed
  ];

  return (
    <section
      id='latest-works'
      className='w-full mt-10 container mx-auto px-6 py-10 rounded-2xl border border-white/15 bg-background/20 backdrop-blur-lg shadow-2xl text-neutral-200'
    >
      <BlurFade delay={0.25} inView>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white'>
              Latest Works
            </h2>
            <p className='max-w-[700px] text-neutral-300 md:text-xl'>
              Check out some of my recent projects and articles
            </p>
          </div>

          <div className='grid grid-cols-1  lg:grid-cols-2 gap-6 mt-12'>
            {works.map((work) => (
              <BlurFade key={work.id} delay={0.25 * 1.5} inView>
                <Card className='overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                  <div
                    className='relative aspect-video overflow-hidden cursor-pointer'
                    onClick={() => work.type === "video" && openVideo(work.url)}
                  >
        <img
                      src={work.thumbnailUrl}
                      alt={work.title}
                      fill
                      sizes='(max-width: 1024px) 100vw, 50vw'
                      className='object-cover transition-transform group-hover:scale-105'
                    />
                    {work.type === "video" && (
                      <div className='absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors'>
                        <div className='bg-primary text-primary-foreground rounded-full p-3 group-hover:scale-110 transition-transform'>
                          <Play className='h-6 w-6' />
                        </div>
                      </div>
                    )}
                  </div>
                  <CardHeader className='p-4'>
                    <CardTitle className='text-xl line-clamp-2'>
                      <a
                        href={work.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline'
                      >
                        {work.title}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='p-4 pt-0 space-y-3'>
                    <p className='text-neutral-300 line-clamp-2'>
                      {work.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {work.technologies.map((tech) => (
                        <span
                          key={tech}
                          className='inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-neutral-200 border border-border'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className='p-4 pt-0 text-sm text-neutral-300'>
                    <div className='flex items-center gap-2'>
                      {new Date(work.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </CardFooter>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
      <Dialog open={!!currentVideo} onOpenChange={closeVideo}>
        <DialogContent className='p-0 bg-transparent'>
          <Button
            onClick={closeVideo}
            variant='ghost'
            size='icon'
            className='absolute -right-2 -top-2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/60'
          >
            <X className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </Button>
          <div
            className='aspect-video w-full max-w-4xl cursor-pointer video-fullscreen'
            onClick={handleVideoClick}
          >
            <ReactPlayer
              url={currentVideo || ""}
              width='100%'
              height='100%'
              controls
              playing
              playsinline
              config={
                {
                  playerVars: {
                    showinfo: 1,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 0, // Force fullscreen on mobile
                  },
                  embedOptions: {},
                  preload: true,
                } as YouTubeConfig
              }
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
