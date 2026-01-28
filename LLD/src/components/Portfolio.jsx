import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ExternalLink,
  Download,
  Code,
  Database,
  Palette,
  Server,
  Star,
  Eye,
  CheckCircle,
  ArrowRight,
  Send,
  Heart,
  Coffee,
  Zap,
} from "lucide-react";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");

  // User Data Variables - Easily customizable
  const userData = {
    name: "Santosh Kumar Sharma",
    title: "Frontend Developer",
    tagline: "Crafting digital experiences with code and creativity",
    location: "Bangalore, India",
    email: "santosh37kr@hmail.com",
    phone: "+91 7003189453",
    website: "https://alexrodriguez.dev",
    resumeUrl: "/resume.pdf",
    avatar: "https://santoshportfolio.vercel.app/images/Santosh.jpg",

    // Availability
    availableForHire: false,
    availabilityText: "Available for freelance projects",

    // Bio
    bio: "Passionate full-stack developer with 6+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.",

    // Social Links
    social: {
      github: "https://github.com/santoshsharma27",
      linkedin: "https://www.linkedin.com/in/santoshsharma37/",
      twitter: "",
      website: "",
    },

    // Experience Stats
    stats: {
      experience: "6+",
      projects: "50+",
      clients: "25+",
      coffees: "1000+",
    },
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern, scalable e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory, advanced search, and mobile-responsive design.",
      image:
        "https://images.pexels.com/photos/29421581/pexels-photo-29421581.jpeg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "PostgreSQL",
      ],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: true,
      category: "Web Development",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image:
        "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
      image:
        "https://images.pexels.com/photos/4443538/pexels-photo-4443538.jpeg",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: false,
      category: "Frontend",
    },
    {
      id: 4,
      title: "AI Chat Bot",
      description:
        "An intelligent chatbot powered by OpenAI's GPT, featuring natural language processing and context-aware conversations.",
      image:
        "https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg",
      technologies: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
      liveUrl: "https://ai-chatbot-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: true,
      category: "AI/ML",
    },
  ];

  const skills = {
    frontend: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Vue.js", level: 85, icon: "💚" },
      { name: "JavaScript", level: 95, icon: "🟨" },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Express.js", level: 88, icon: "🚀" },
      { name: "FastAPI", level: 82, icon: "⚡" },
      { name: "GraphQL", level: 80, icon: "🔗" },
      { name: "REST APIs", level: 92, icon: "🌐" },
    ],
    database: [
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "Redis", level: 80, icon: "🔴" },
      { name: "Prisma", level: 85, icon: "⚡" },
      { name: "Supabase", level: 82, icon: "🚀" },
      { name: "Firebase", level: 78, icon: "🔥" },
    ],
    tools: [
      { name: "Git", level: 95, icon: "📝" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "VS Code", level: 98, icon: "💙" },
    ],
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Startup Founder",
      content:
        "Working with Alex was a game-changer for our startup. He built our MVP in record time without compromising on quality.",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Design Director",
      content:
        "Alex has an incredible ability to bring designs to life. His code is clean, efficient, and perfectly matches our design vision.",
      avatar: "👩‍🎨",
      rating: 5,
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Auto-rotate projects
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const skillCategories = [
    { id: "frontend", name: "Frontend", icon: Palette },
    { id: "backend", name: "Backend", icon: Server },
    { id: "database", name: "Database", icon: Database },
    { id: "tools", name: "Tools", icon: Code },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-blue-500/8 to-purple-500/8 blur-3xl delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-gradient-to-r from-green-500/6 to-cyan-500/6 blur-3xl delay-2000"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-20 left-10 animate-bounce font-mono text-4xl text-orange-400/20 delay-300">
          {"<>"}
        </div>
        <div className="absolute top-40 right-20 animate-bounce font-mono text-3xl text-blue-400/20 delay-700">
          {"{}"}
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce font-mono text-5xl text-green-400/20 delay-1000">
          {"[]"}
        </div>
        <div className="absolute right-40 bottom-20 animate-bounce font-mono text-2xl text-purple-400/20 delay-1500">
          {"()"}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-center py-20">
          <div
            className={
              "text-center transition-all duration-1000 " +
              (isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0")
            }
          >
            {/* Avatar */}
            <div className="relative mb-8">
              <div className="border-gradient-to-r mx-auto h-48 w-48 overflow-hidden rounded-full border-4 bg-gradient-to-r from-orange-500 to-red-500 p-1">
                <img
                  src={userData.avatar || "/placeholder.svg"}
                  alt={userData.name}
                  className="h-full w-full rounded-full bg-neutral-800 object-cover"
                />
              </div>

              {/* Availability Badge */}
              {userData.availableForHire && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform">
                  <div className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
                    <span>{userData.availabilityText}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Name & Title */}
            <h1 className="mb-4 text-5xl leading-tight font-black text-white md:text-6xl lg:text-7xl">
              {userData.name}
            </h1>
            <h2 className="mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
              {userData.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-neutral-300">
              {userData.tagline}
            </p>

            {/* Stats */}
            <div className="mx-auto mb-12 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-1 text-3xl font-black text-orange-400">
                  {userData.stats.experience}
                </div>
                <div className="text-sm text-neutral-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-3xl font-black text-blue-400">
                  {userData.stats.projects}
                </div>
                <div className="text-sm text-neutral-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-3xl font-black text-green-400">
                  {userData.stats.clients}
                </div>
                <div className="text-sm text-neutral-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-3xl font-black text-purple-400">
                  {userData.stats.coffees}
                </div>
                <div className="text-sm text-neutral-400">Cups of Coffee</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href={"add mail id here"}
                className="group flex items-center space-x-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-red-600 hover:shadow-orange-500/25"
              >
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span>Get In Touch</span>
              </a>

              <a
                href={userData.resumeUrl}
                download
                className="group flex items-center space-x-3 rounded-xl border-2 border-neutral-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:border-orange-500 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
              >
                <Download className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-neutral-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{userData.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{userData.phone}</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div
            className={
              "transition-all delay-300 duration-1000 " +
              (isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0")
            }
          >
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                About{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-neutral-300">
                  {userData.bio}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 rounded-lg bg-neutral-900/50 px-4 py-2">
                    <Coffee className="h-5 w-5 text-orange-400" />
                    <span className="text-neutral-300">Coffee Enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg bg-neutral-900/50 px-4 py-2">
                    <Heart className="h-5 w-5 text-red-400" />
                    <span className="text-neutral-300">
                      Open Source Contributor
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg bg-neutral-900/50 px-4 py-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <span className="text-neutral-300">Problem Solver</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-6">
                  <a
                    href={userData.social.github}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-400 transition-all duration-300 hover:scale-110 hover:border-orange-500 hover:bg-neutral-800 hover:text-orange-400"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={userData.social.linkedin}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-400 transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-neutral-800 hover:text-blue-400"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={userData.social.twitter}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-400 transition-all duration-300 hover:scale-110 hover:border-sky-500 hover:bg-neutral-800 hover:text-sky-400"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href={userData.social.website}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-400 transition-all duration-300 hover:scale-110 hover:border-green-500 hover:bg-neutral-800 hover:text-green-400"
                  >
                    <Globe className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                  <div className="mb-6 flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 font-mono text-sm text-neutral-400">
                      developer.js
                    </span>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-purple-400">
                      const <span className="text-blue-400">developer</span> ={" "}
                      {"{"}
                    </div>
                    <div className="ml-4 text-neutral-400">
                      name: <span className="text-green-400">'Chai lover'</span>
                      ,
                    </div>
                    <div className="ml-4 text-neutral-400">
                      title:{" "}
                      <span className="text-green-400">'{userData.title}'</span>
                      ,
                    </div>
                    <div className="ml-4 text-neutral-400">
                      location:{" "}
                      <span className="text-green-400">
                        '{userData.location}'
                      </span>
                      ,
                    </div>
                    <div className="ml-4 text-neutral-400">
                      available:{" "}
                      <span className="text-orange-400">
                        {userData.availableForHire.toString()}
                      </span>
                      ,
                    </div>
                    <div className="ml-4 text-neutral-400">
                      skills: [<span className="text-green-400">'React'</span>,{" "}
                      <span className="text-green-400">'Node.js'</span>,{" "}
                      <span className="text-green-400">'TypeScript'</span>],
                    </div>
                    <div className="ml-4 text-neutral-400">
                      passion:{" "}
                      <span className="text-green-400">
                        'Building amazing things'
                      </span>
                    </div>
                    <div className="text-purple-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div
            className={
              "transition-all delay-500 duration-1000 " +
              (isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0")
            }
          >
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                My{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-neutral-300">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            {/* Skill Categories */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveSkillCategory(category.id)}
                  className={
                    "flex items-center space-x-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 " +
                    (activeSkillCategory === category.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "border border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-orange-500 hover:text-orange-400")
                  }
                >
                  <category.icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills[activeSkillCategory].map((skill, index) => (
                <div
                  key={skill.name}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 hover:scale-105 hover:border-orange-500/50"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-bold text-orange-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-800">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ease-out"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div
            className={
              "transition-all delay-700 duration-1000 " +
              (isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0")
            }
          >
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Featured{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-neutral-300">
                A showcase of my recent work and creative solutions
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 transition-all duration-300 hover:scale-105 hover:border-orange-500/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-neutral-300">
                      {project.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-red-600"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Live Demo</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 rounded-lg border border-neutral-600 px-4 py-2 font-semibold text-neutral-300 transition-all duration-300 hover:border-orange-500 hover:text-orange-400"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={userData.social.github}
                className="group inline-flex items-center space-x-2 rounded-xl border border-neutral-700 bg-neutral-900 px-8 py-4 font-semibold text-neutral-300 transition-all duration-300 hover:border-orange-500 hover:bg-neutral-800 hover:text-orange-400"
              >
                <span>View All Projects</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div
            className={
              "transition-all delay-900 duration-1000 " +
              (isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0")
            }
          >
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                What Clients{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Say
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-neutral-300">
                Testimonials from satisfied clients and collaborators
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-300 hover:scale-105 hover:border-orange-500/50"
                >
                  <div className="mb-4 flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed text-neutral-300 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div
            className={
              "transition-all delay-1100 duration-1000 " +
              (isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0")
            }
          >
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Let's{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Work Together
                </span>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-neutral-300">
                Ready to bring your ideas to life? Let's discuss your next
                project and create something amazing together.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-red-500/10 p-12 text-center">
                <div className="mb-8 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="mb-4 text-3xl font-bold text-white">
                  Ready to Start a Project?
                </h3>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300">
                  I'm currently{" "}
                  {userData.availableForHire ? "available" : "not available"}{" "}
                  for new projects. Let's discuss how we can work together to
                  achieve your goals.
                </p>

                <div className="mb-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <a
                    href={""}
                    className="group flex items-center space-x-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-red-600 hover:shadow-orange-500/25"
                  >
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>Send Message</span>
                  </a>

                  <a
                    href={userData.phone}
                    className="group flex items-center space-x-3 rounded-xl border-2 border-neutral-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:border-orange-500 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
                  >
                    <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    <span>Schedule Call</span>
                  </a>
                </div>

                <div className="flex items-center justify-center space-x-8 text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Flexible Rates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
