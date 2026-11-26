import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Dna,
  FlaskConical,
  Laptop,
  Mail,
  MessageCircle,
  Microscope,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "Gene Editing Evidence Atlas",
    category: "Academic project",
    description: "More information about this project will be added here.",
    icon: Dna,
  },
  {
    title: "Academic projects",
    category: "Project space",
    description: "A place for coursework, research questions, and future academic work.",
    icon: FlaskConical,
  },
  {
    title: "AI & innovation",
    category: "Project space",
    description: "A place for future ideas exploring AI, digital tools, and biotechnology.",
    icon: Sparkles,
  },
];

const skills = [
  { label: "Biotechnology", icon: Dna },
  { label: "Scientific Research", icon: Microscope },
  { label: "AI Tools", icon: Sparkles },
  { label: "Digital Literacy", icon: Laptop },
  { label: "Communication", icon: MessageCircle },
  { label: "Basic Data Science", icon: BarChart3 },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arpita Rai | Biotechnology Student Portfolio" },
      {
        name: "description",
        content:
          "Meet Arpita Rai, a first-year B.Sc. Biotechnology student interested in science, research, artificial intelligence, and innovation.",
      },
      { property: "og:title", content: "Arpita Rai — Biotechnology Student Portfolio" },
      {
        property: "og:description",
        content:
          "Meet Arpita Rai, a first-year B.Sc. Biotechnology student interested in science, research, artificial intelligence, and innovation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:px-8 md:flex-row md:items-center md:justify-between md:py-4">
          <a href="#home" className="flex w-fit items-center gap-3" aria-label="Arpita Rai, home">
            <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-primary font-sans text-sm font-bold text-primary-foreground">
              AR
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg leading-tight text-foreground">Arpita Rai</span>
              <span className="text-xs text-muted-foreground">B.Sc. Biotechnology</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {navigation.map((item) => (
              <a className="site-nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-6xl scroll-mt-28 items-center gap-6 px-5 py-8 sm:gap-14 sm:px-8 sm:py-16 md:py-20 lg:grid-cols-[1.05fr_0.8fr] lg:gap-20 lg:py-24"
        >
          <div className="rise-in">
            <p className="section-kicker">First-year B.Sc. Biotechnology student</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.08] text-foreground sm:mt-6 sm:text-6xl lg:text-7xl">
              Hello, I’m
              <span className="mt-1 block text-primary">Arpita Rai.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground sm:mt-6">
              I’m a biotechnology student interested in science, technology, AI, and the ideas that
              can shape what comes next.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-8">
              <Button asChild size="lg" className="h-12 px-5 tracking-normal">
                <a href="#projects">
                  View projects <ArrowDownRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-5 tracking-normal">
                <a href="#contact">
                  Get in touch <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="mt-10 hidden flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5 text-sm text-muted-foreground sm:flex">
              <span className="inline-flex items-center gap-2">
                <Dna className="size-4 text-accent-foreground" aria-hidden="true" />
                Biology
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="size-4 text-accent-foreground" aria-hidden="true" />
                Technology &amp; ideas
              </span>
            </div>
          </div>

          <figure className="rise-in rise-in-delay mx-auto w-full max-w-md">
            <div className="hero-image-frame">
              <img
                className="portfolio-photo"
                src="/images/biotechnology-lab.jpg"
                alt="Green seedlings growing in clear laboratory culture vessels beside biotechnology tools."
                fetchPriority="high"
              />
            </div>
            <figcaption className="mt-4 hidden items-center justify-between gap-4 text-sm sm:flex">
              <span className="font-medium text-foreground">Curiosity, grounded in science.</span>
              <span className="text-right text-muted-foreground">Biology × technology</span>
            </figcaption>
          </figure>
        </section>

        <section id="about" className="scroll-mt-28 bg-secondary/55 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="section-kicker">About</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
                A curious mind, learning one question at a time.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
              <p>
                I’m Arpita Rai, a first-year B.Sc. Biotechnology student building a strong foundation
                in the life sciences.
              </p>
              <p>
                I’m especially interested in biotechnology, scientific research, artificial
                intelligence, and learning new digital skills. I’m curious about how these fields
                can meet to open up new ways of asking questions and understanding the world.
              </p>
              <p className="border-l-2 border-accent-foreground pl-5 text-foreground">
                Science gives me questions to explore; technology gives me new ways to explore them.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Projects"
              title="A space for ideas to take shape."
              description="Selected work and future project spaces across biotechnology, academic learning, and AI."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {projects.map((project) => {
                const ProjectIcon = project.icon;

                return (
                  <article
                    className="project-card flex min-h-64 flex-col border border-border bg-card p-6"
                    key={project.title}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-secondary text-secondary-foreground">
                        <ProjectIcon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="pt-1 text-right text-xs font-medium text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl leading-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 bg-secondary/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Skills"
              title="A foundation for what’s next."
              description="Areas I’m studying, practicing, and building on as I grow in biotechnology."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => {
                const SkillIcon = skill.icon;

                return (
                  <div
                    className="skill-card flex min-h-20 items-center gap-4 border border-border bg-background px-5 py-4"
                    key={skill.label}
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-secondary text-secondary-foreground">
                      <SkillIcon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-medium text-foreground">{skill.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 bg-primary py-20 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="section-kicker text-primary-foreground/70">Contact</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
              <div>
                <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-5xl">
                  Let’s connect over science and new ideas.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/75">
                  I’m glad to connect with fellow students, curious minds, and people working across
                  science and technology.
                </p>
              </div>
              <div className="grid justify-items-start gap-5 border-t border-primary-foreground/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div>
                  <p className="text-sm font-medium text-primary-foreground/70">Email</p>
                  <p className="mt-2 break-words font-display text-xl">arpita.26bbin0314@jecrc.edu.in</p>
                </div>
                <Button asChild variant="secondary" size="lg">
                  <a href="mailto:arpita.26bbin0314@jecrc.edu.in">
                    <Mail aria-hidden="true" /> Email Arpita
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Arpita Rai</span>
            <span aria-hidden="true"> · </span>
            Biotechnology student portfolio
          </p>
          <a className="inline-flex w-fit items-center gap-2 font-medium text-primary" href="#home">
            Back to top <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}