"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import IP from "../../../public/img/IP.png";
import Podo from "../../../public/img/podologue.png";
import Quintyss from "../../../public/img/quityss.png";
import Oclock from "../../../public/img/oclock.png";
import Bpi from "../../../public/img/bpi.png";
import ThreeWA from "../../../public/img/3wa.png";
import CAMPA from "../../../public/img/Logo_CAMPA_Gradient.svg";
import IFTB from "../../../public/img/iftb.webp";
import { BlurFade } from "@/components/ui/blur-fade";

interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo: any;
  purpose: string;
  description: string[];
  technologies: string[];
}

export function WorkXp() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const workExperiences: WorkExperience[] = [
    {
      id: "3",
      company: "CAMPA",
      role: "Fullstack developer",
      period: "February 2025 - Present",
      logo: CAMPA,
      purpose:
        "Digital solutions and billing systems for the agricultural sector",
      description: [
        "Creation of a reusable frontend template with integrated authentication and role management using Next-Auth and Keycloak.",
        "Development of a multi-tenant client directory and role administration app with standardized UI components and state management patterns.",
        "Creation of an admin-only page builder with custom widgets (e.g., product cards, vendor blocks).",
        "Development of an intelligent document extraction (OCR) platform",
        "Full-Stack EDM Application - Electronic document management system with automated email collection via IMAP, secure storage on S3, and advanced search interface",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "NestJs",
        "Next-Auth",
        "Keycloak",
        "Redux",
        "AWS Textract",
        "AWS S3",
      ],
    },
    {
      id: "5",
      company: "O'clock",
      role: "Fullstack trainer",
      period: "2022 - 2024",
      logo: Oclock,
      purpose: "Professional training in web development",
      description: [
        "Training for web development students",
        "Educational follow-up and individual coaching",
        "Training program adaptation to students' needs",
        "Project management and technical support",
      ],
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "Redux",
        "MongoDB",
        "Git",
        "Svelte.js",
        "Directus",
      ],
    },
    {
      id: "1",
      company: "3WA",
      role: "Frontend trainer",
      period: "2022",
      logo: ThreeWA,
      purpose: "Professional training in web development",
      description: ["Training for web development apprentices"],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
    },
    {
      id: "2",
      company: "IFTB",
      role: "Frontend developer",
      period: "2023",
      logo: IFTB,
      purpose: "Cryptocurrency training school",
      description: [
        "Development of the information and registration page for a cryptocurrency-focused school",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: "4",
      company: "Integrative Phenomics",
      role: "Fullstack developer",
      period: "2022 - 2023",
      logo: IP,
      purpose: "Health and nutrition applications",
      description: [
        "Development of a web application for analysis, advice, and delivery of menus tailored to each user's gut microbiota.",
        "Development of a web application for nutrition professionals.",
        "Development of the showcase website for Integrative Phenomics + Blog",
      ],
      technologies: [
        "React",
        "NextJs",
        "Node",
        "TypeScript",
        "Styled Components",
        "Rest API",
      ],
    },
    {
      id: "8",
      company: "Quintyss limited",
      role: "Frontend developer",
      period: "2022 - 2023",
      logo: Quintyss,
      purpose: "Content management systems",
      description: [
        "Development of several components using data storage on AWS.",
        "Implementation of TinyMCE rich text editor with image upload and video insertion features.",
        "Integration with protected API for secure data storage on AWS",
      ],
      technologies: ["React", "TypeScript", "AWS", "TinyMCE", "REST API"],
    },
    {
      id: "6",
      company: "Bpi",
      role: "Frontend developer",
      period: "2021",
      logo: Bpi,
      purpose:
        "French public bank that supports the financing and development of businesses",
      description: [
        "Development of a secure authentication interface",
        "Development of a multilingual account creation page with form validation",
      ],
      technologies: ["React", "Redux", "SASS", "i18n"],
    },
    {
      id: "7",
      company: "Chrysomele Podologie",
      role: "Frontend developer",
      period: "2021",
      logo: Podo,
      purpose: "Medical office",
      description: [
        "Development of a web application for a podology clinic",
        "Development of a WordPress website for a podiatry clinic with custom theme and plugins",
        "Writing of technical specifications and documentation",
        "Deployment and hosting setup",
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "jQuery"],
    },
  ];

  return (
    <section className='mt-8 w-full container mx-auto px-4 rounded-2xl border border-white/20 bg-background/40 backdrop-blur-md shadow-lg'>
      <BlurFade delay={0.25} inView>
        <>
          <h2 className='text-2xl font-bold mb-6'>Work Experience</h2>

          <div className='space-y-2'>
            {workExperiences.map((exp) => (
              <BlurFade key={exp.id} delay={0.25} inView>
                <div
                  key={exp.id}
                  className='border border-gray-200 rounded-lg overflow-hidden transition-all'
                >
                  <div
                    className='flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer'
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className='flex items-center space-x-4'>
                      <div className='w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden'>
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={100}
                          height={100}
                          className='object-contain'
                        />
                      </div>
                      <div>
                        <div
                          className='flex items-center gap-2'
                          onMouseEnter={() => setHoveredTitle(exp.id)}
                          onMouseLeave={() => setHoveredTitle(null)}
                        >
                          <h3 className='font-medium inline-block'>
                            {exp.company}
                          </h3>
                          <button
                            className='p-1 h-6 w-6 rounded-full hover:bg-gray-200 inline-flex items-center justify-center transition-all duration-200'
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(exp.id);
                            }}
                          >
                            <div className='relative h-4 w-4'>
                              <ChevronDown
                                className={`absolute h-4 w-4 transition-all duration-200 transform ${
                                  expandedItem === exp.id
                                    ? "rotate-360 opacity-100"
                                    : hoveredTitle === exp.id
                                    ? "rotate-270 opacity-100"
                                    : "rotate-270 opacity-0"
                                }`}
                              />
                            </div>
                          </button>
                        </div>
                        <p className='text-sm text-gray-500'>{exp.role}</p>
                      </div>
                    </div>
                    <span className='text-sm text-gray-500'>{exp.period}</span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedItem === exp.id
                        ? "max-h-[100vh] opacity-100 border-t border-gray-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className='px-4 pb-4 pt-2 text-gray-600 text-sm space-y-4'>
                      <div>
                        <h4 className='font-medium text-gray-800 mb-1'>
                          The company
                        </h4>
                        <p className='text-gray-600'>{exp.purpose}</p>
                      </div>

                      <div>
                        <h4 className='font-medium text-gray-800 mb-2'>
                          Key Responsibilities
                        </h4>
                        <ul className='space-y-2'>
                          {exp.description.map((desc, idx) => (
                            <li key={idx} className='flex items-start'>
                              <span className='text-gray-500 mr-2 mt-0.5'>
                                •
                              </span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className='font-medium text-gray-800 mb-2'>
                          Technologies
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className='px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </>
      </BlurFade>
    </section>
  );
}
