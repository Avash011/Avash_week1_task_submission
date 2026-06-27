import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GradientText } from "@/components/GradientText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contact = {
  name: "Avash Mainali",
  role: "Frontend Developer & UI/UX Designer",
  email: "avashm010@gmail.com",
  phone: "+977-9849398262",
  location: "Kathmandu, Nepal",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

const navItems = ["About", "Projects", "Skills", "Education", "Contact"];

const projects = [
  {
    title: "Mental Health Monitoring Website",
    description:
      "A responsive mental wellness platform concept with mood tracking, self-assessment flows, supportive resources, and clear visual feedback.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663792780752/Ucc8pgBk85Sc7aQa3Dvbxp/mental-health-project-Ldx92EGqDzBdSSWtTk2rEV.webp",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern portfolio interface focused on clean typography, responsive sections, project storytelling, and direct contact paths.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663792780752/Ucc8pgBk85Sc7aQa3Dvbxp/hero-background-3fAmXW2dabewF8jVXSotNU.webp",
  },
  {
    title: "Penalty Scoring Game",
    description:
      "An interactive football penalty game prototype with angle and power controls, score tracking, and object-oriented Java structure.",
    tags: ["Java", "Swing", "OOP", "Game Logic"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663792780752/Ucc8pgBk85Sc7aQa3Dvbxp/penalty-game-project-6q6SN4hH8LtKKTJwzaQ34p.webp",
  },
];

const skillGroups = [
  {
    category: "Frontend Development",
    summary: "Building responsive, maintainable interfaces for the web.",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Accessibility"],
    icon: Code2,
  },
  {
    category: "UI/UX Design",
    summary: "Designing layouts that are clear, usable, and visually consistent.",
    items: ["Figma", "Wireframes", "Design Systems", "Prototyping", "User Flow", "Visual Design"],
    icon: Palette,
  },
  {
    category: "Programming",
    summary: "Solving problems with structured logic and clean implementation.",
    items: ["Java", "C", "OOP", "Data Structures", "Algorithms", "Debugging"],
    icon: Zap,
  },
];

const education = [
  ["BCSIT", "Bachelor of Computer Science and Information Technology", "Pokhara University, Nepal", "Currently pursuing - 4th semester", "2024 - Present"],
  ["+2 Computer Science", "Higher Secondary in Science", "Nepal", "Completed", "2022"],
  ["SEE", "Secondary Education Examination", "Nepal", "Completed", "2020"],
];

const services = [
  "Responsive portfolio and business websites",
  "Landing pages with polished interaction design",
  "UI cleanup for existing web projects",
  "Student and beginner-friendly web project support",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-foreground/70 md:text-lg">{body}</p> : null}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mailHref = useMemo(() => {
    const subject = encodeURIComponent("Portfolio inquiry");
    const body = encodeURIComponent("Hi Avash,\n\nI saw your portfolio and would like to discuss a project.");
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }, []);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Portfolio message from ${name || "a visitor"}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <motion.header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl" initial={{ y: -80 }} animate={{ y: 0 }}>
        <nav className="container flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Avash Mainali home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-sm font-bold text-accent">AM</span>
            <span className="font-semibold"><GradientText colors="from-cyan-400 to-purple-500">Avash Mainali</GradientText></span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent">{item}</a>
            ))}
          </div>
          <a href={mailHref} className="hidden md:block"><Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90"><Mail className="mr-2 h-4 w-4" />Hire Me</Button></a>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {menuOpen ? (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container grid gap-2 py-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-card hover:text-accent" onClick={() => setMenuOpen(false)}>{item}</a>
              ))}
            </div>
          </div>
        ) : null}
      </motion.header>

      <main id="home">
        <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
          <div className="absolute inset-0 -z-10 opacity-35" style={{ backgroundImage: "linear-gradient(90deg, rgba(15,23,42,0.96), rgba(15,23,42,0.78), rgba(15,23,42,0.96)), url(https://d2xsxph8kpxj0f.cloudfront.net/310519663792780752/Ucc8pgBk85Sc7aQa3Dvbxp/hero-background-3fAmXW2dabewF8jVXSotNU.webp)", backgroundPosition: "center", backgroundSize: "cover" }} />
          <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl">
              <motion.div variants={fadeUp}><Badge className="mb-6 border-accent/40 bg-accent/15 text-accent"><Sparkles className="mr-2 h-3.5 w-3.5" />Available for frontend and UI projects</Badge></motion.div>
              <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">I build clean interfaces that are <GradientText>simple to use</GradientText>.</motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-foreground/75 md:text-xl">I am Avash Mainali, a BCSIT student from Kathmandu focused on frontend development, UI/UX design, and practical web projects that look polished and work smoothly on every screen.</motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#projects"><Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">View Projects<ArrowRight className="ml-2 h-4 w-4" /></Button></a>
                <a href={mailHref}><Button size="lg" variant="outline" className="w-full border-accent/50 hover:border-accent sm:w-auto"><Send className="mr-2 h-4 w-4" />Start a Conversation</Button></a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
                {[
                  { icon: Github, label: "GitHub", href: contact.github },
                  { icon: Linkedin, label: "LinkedIn", href: contact.linkedin },
                  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
                  { icon: Phone, label: contact.phone, href: `tel:${contact.phone}` },
                ].map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/70 px-4 py-3 text-sm text-foreground/80 transition-colors hover:border-accent/50 hover:text-accent"><Icon className="h-4 w-4" />{label}</a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 0.6 }} className="rounded-2xl border border-border bg-card/70 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
              <div className="flex items-center gap-4 border-b border-border pb-5"><div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent text-2xl font-bold text-accent-foreground">AM</div><div><p className="text-xl font-bold">{contact.name}</p><p className="text-sm text-foreground/65">{contact.role}</p></div></div>
              <div className="grid gap-4 py-6">{[["Focus", "Frontend, UI/UX, responsive websites"], ["Currently", "BCSIT student, 4th semester"], ["Location", contact.location]].map(([label, value]) => <div key={label} className="flex items-start justify-between gap-4"><span className="text-sm text-foreground/55">{label}</span><span className="max-w-56 text-right text-sm font-medium">{value}</span></div>)}</div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-5">{[["3+", "Projects"], ["10+", "Skills"], ["100%", "Responsive"]].map(([value, label]) => <div key={label} className="rounded-lg bg-background/70 p-3 text-center"><p className="text-xl font-bold text-accent">{value}</p><p className="mt-1 text-xs text-foreground/55">{label}</p></div>)}</div>
            </motion.div>
          </div>
        </section>

        <motion.section id="about" className="border-t border-border py-20" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="container">
            <SectionHeading eyebrow="About" title="A practical developer with a design-first mindset." body="I care about readable content, clear actions, strong visual hierarchy, and layouts that stay reliable on smaller screens." />
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <motion.div variants={fadeUp} className="space-y-5 text-lg leading-8 text-foreground/75"><p>My work combines frontend development and UI/UX thinking. I use React, Tailwind CSS, JavaScript, HTML, and CSS to turn ideas into complete interfaces with polished spacing, responsive behavior, and accessible structure.</p><p>I am currently building project experience while studying computer science. This portfolio highlights web interfaces, design work, and programming projects that show my ability to learn, structure code, and finish practical products.</p></motion.div>
              <motion.div variants={fadeUp} className="grid gap-3">{services.map((service) => <div key={service} className="flex items-center gap-3 rounded-lg border border-border bg-card/55 p-4"><CheckCircle2 className="h-5 w-5 flex-none text-accent" /><span className="text-foreground/80">{service}</span></div>)}</motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" className="border-t border-border py-20" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="container">
            <SectionHeading eyebrow="Projects" title="Selected work with clear purpose and presentation." body="These projects show frontend layout, UI design, interactivity, and programming fundamentals across web and Java-based work." />
            <div className="grid gap-6 lg:grid-cols-3">{projects.map((project) => <motion.article key={project.title} variants={fadeUp} whileHover={{ y: -6 }} className="group overflow-hidden rounded-xl border border-border bg-card/60 transition-colors hover:border-accent/50"><div className="aspect-[16/10] overflow-hidden bg-secondary"><img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-6"><h3 className="text-2xl font-bold">{project.title}</h3><p className="mt-3 min-h-28 text-sm leading-6 text-foreground/70">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent">{tag}</Badge>)}</div></div></motion.article>)}</div>
          </div>
        </motion.section>

        <motion.section id="skills" className="border-t border-border py-20" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="container">
            <SectionHeading eyebrow="Skills" title="A focused toolkit for modern frontend work." />
            <div className="grid gap-6 md:grid-cols-3">{skillGroups.map(({ category, summary, items, icon: Icon }) => <motion.div key={category} variants={fadeUp} className="rounded-xl border border-border bg-card/60 p-6"><div className="mb-5 flex items-center gap-3"><div className="rounded-lg bg-accent/10 p-3"><Icon className="h-6 w-6 text-accent" /></div><h3 className="text-xl font-bold">{category}</h3></div><p className="mb-5 text-sm leading-6 text-foreground/65">{summary}</p><div className="flex flex-wrap gap-2">{items.map((item) => <Badge key={item} variant="secondary" className="bg-background text-foreground/80">{item}</Badge>)}</div></motion.div>)}</div>
          </div>
        </motion.section>

        <motion.section id="education" className="border-t border-border py-20" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="container">
            <SectionHeading eyebrow="Education" title="Academic background and current study." />
            <div className="grid gap-4">{education.map(([short, degree, school, status, year]) => <motion.div key={degree} variants={fadeUp} className="grid gap-4 rounded-xl border border-border bg-card/55 p-6 md:grid-cols-[auto_1fr_auto] md:items-center"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10"><GraduationCap className="h-6 w-6 text-accent" /></div><div><p className="text-sm font-semibold text-accent">{short}</p><h3 className="text-xl font-bold">{degree}</h3><p className="mt-1 text-foreground/65">{school}</p><p className="mt-2 text-sm text-foreground/55">{status}</p></div><p className="font-semibold text-foreground/80">{year}</p></motion.div>)}</div>
          </div>
        </motion.section>

        <motion.section id="contact" className="border-t border-border py-20" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="container">
            <SectionHeading eyebrow="Contact" title="Have a website or UI idea? Let us talk." body="Send a message directly from this form. It opens your email app with the message filled in, so there is no hidden backend dependency." />
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <motion.div variants={fadeUp} className="grid gap-4">{[{ icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` }, { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` }, { icon: MapPin, label: "Location", value: contact.location, href: "https://maps.google.com/?q=Kathmandu%2C%20Nepal" }].map(({ icon: Icon, label, value, href }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-accent/50"><div className="rounded-lg bg-accent/10 p-3"><Icon className="h-5 w-5 text-accent" /></div><div><p className="text-sm text-foreground/55">{label}</p><p className="font-medium">{value}</p></div></a>)}</motion.div>
              <motion.form variants={fadeUp} onSubmit={handleContactSubmit} className="rounded-xl border border-border bg-card/60 p-6"><div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium">Name<input name="name" required className="h-12 rounded-lg border border-border bg-background px-4 text-foreground outline-none transition focus:border-accent" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-medium">Email<input name="email" type="email" required className="h-12 rounded-lg border border-border bg-background px-4 text-foreground outline-none transition focus:border-accent" placeholder="you@example.com" /></label></div><label className="mt-4 grid gap-2 text-sm font-medium">Message<textarea name="message" required rows={6} className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent" placeholder="Tell me what you want to build..." /></label><Button type="submit" size="lg" className="mt-5 bg-accent text-accent-foreground hover:bg-accent/90"><Send className="mr-2 h-4 w-4" />Send Message</Button></motion.form>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-col gap-3 text-sm text-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Avash Mainali. Built with React, Tailwind CSS, and Framer Motion.</p>
          <p>Open to frontend projects, UI cleanup, and portfolio websites.</p>
        </div>
      </footer>
    </div>
  );
}
