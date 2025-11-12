import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCategory } from "@/components/SkillCategory";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Briefcase,
  Award,
  Target,
  Users,
  Globe,
  TrendingUp,
  CheckCircle2,
  Download,
  ExternalLink,
  Link,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Hero />

      {/* Introduction & Philosophy */}
      <Section
        id="about"
        title="Introduction & Learning Philosophy"
        subtitle="A blend of innovation, curiosity, and real-world application"
        className="bg-section-alt"
      >
        <Card className="border-2 shadow-md">
          <CardContent className="pt-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am an enthusiastic Computer Engineering student at Pandit Deendayal Energy University
              with a strong foundation in web development, GUI design, and problem-solving.
              My learning journey is driven by curiosity and a constant desire to bridge
              theoretical knowledge with hands-on innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether developing full-stack web applications with Next.js, React, and TailwindCSS
              or building intelligent systems using AI and data visualization tools,
              I approach every challenge as a chance to grow, collaborate, and create something impactful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe learning is a continuous process—rooted in creativity, integrity, and the
              ability to adapt. My goal is to contribute to projects that merge technology and
              human-centered design to make a lasting difference.
            </p>
            <div className="pt-4 space-y-2">
              <h4 className="font-semibold">Core Values:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Innovation</Badge>
                <Badge variant="secondary">Excellence</Badge>
                <Badge variant="secondary">Integrity</Badge>
                <Badge variant="secondary">Collaboration</Badge>
                <Badge variant="secondary">Continuous Learning</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section
        id="resume"
        title="Resume / CV"
        subtitle="Professional background and qualifications"
      >
        {/* Centered Download CV Button */}
        <div className="flex justify-center mb-8">
          <a
            href="/Priyank_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-lg shadow hover:opacity-90 transition-all"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <div className="space-y-8">
          {/* Education */}
          <Card className="border-2 shadow-md">
            <CardHeader className="bg-gray-50 dark:bg-gray-900">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold">Bachelor of Technology</h4>
                  <p className="text-gray-600 dark:text-gray-400">Pandit Deendayal Energy University • 2023 - 2027</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">CGPA : 8.99 /10</p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/pdeu.png"
                    alt="Institution Logo"
                    className="w-20 h-20 object-contain rounded-lg border-2 border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="border-2 shadow-md">
            <CardHeader className="bg-gray-50 dark:bg-gray-900">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg">
                  <Briefcase className="h-6 w-6" />
                </div>
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold">Web Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">PyShell • May 2025 - Oct 2025</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>Developed 90% of the PyShell Web Frontend using Next.js, TailwindCSS, and JavaScript.</li>
                    <li>Built 70%+ of the PyShell Documentation site, including structure, content, and styling.</li>
                    <li>Delivered a responsive, accessible UI/UX with optimized performance and seamless navigation.</li>
                    <li>Collaborated with the backend and design teams to ensure consistent functionality and scalability.</li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/pyshell.jpeg"
                    alt="PyShell Logo"
                    className="w-20 h-20 object-contain rounded-lg border-2 border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Awards & Certifications */}
          <Card className="border-2 shadow-md">
            <CardHeader className="bg-gray-50 dark:bg-gray-900">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg">
                  <Award className="h-6 w-6" />
                </div>
                Awards, Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* NPTEL Certification */}
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium">NPTEL – Human-Computer Interaction</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">NPTEL (IIIT) • 2025</p>
                  <a
                    href="https://drive.google.com/file/d/1PkPoCo-Pjn-FEj7lBzjk6tadGhTDHnvJ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1"
                  >
                    View Certificate
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              {/* PDEU ACM Hackathon */}
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium">Hackathon Runners-Up</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">PDEU ACM Hackathon • 2025</p>
                  <a
                    href="https://drive.google.com/file/d/1gKuUG_LWcnkboS3pFD08C8xi-zt1JAX0/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1"
                  >
                    View Certificate
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* DAIICT Hackathon */}
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium">Hackathon – DAIICT (2nd Round Qualifier)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">DAIICT, Gandhinagar • 2025</p>
                  <a
                    href="https://drive.google.com/file/d/1KhocKzhAevdphWRJpRuU5_QushpmTC3h/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1"
                  >
                    View Certificate
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Career Essentials in Generative AI */}
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium">Career Essentials in Generative AI</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Microsoft & LinkedIn • 2024</p>
                  <a
                    href="https://drive.google.com/file/d/1OtHYy8L1X04lV9h3SdvY3_Ar24-VKPEU/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1"
                  >
                    View Certificate
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>


          {/* Areas of Interest & Hobbies */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 shadow-md">
              <CardHeader className="bg-gray-50 dark:bg-gray-900">
                <CardTitle className="text-lg">Areas of Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Web Development & Frontend Engineering</li>
                  <li>• Artificial Intelligence & Generative AI</li>
                  <li>• Human-Computer Interaction & UI/UX Design</li>
                  <li>• Data Visualization & Analytics (Power BI, Dashboards)</li>
                  <li>• Full-Stack Application Development (Next.js, React, Node.js)</li>
                  <li>• Emerging Technologies & Innovation (Industry 4.0, Cloud)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-md">
              <CardHeader className="bg-gray-50 dark:bg-gray-900">
                <CardTitle className="text-lg">Hobbies & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-1">
                    • Drawing
                    <a
                      href="https://drawing-p.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline ml-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li className="flex items-center gap-1">
                    • Music
                    <a
                      href="https://song-p.netlify.app/ "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline ml-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li className="flex items-center gap-1">
                    • Cricket
                  </li>
                  <li className="flex items-center gap-1">
                    • Gaming
                  </li>
                  <li className="flex items-center gap-1">
                    • Blog
                    <a
                      href="https://blogai-p.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline ml-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li className="flex items-center gap-1">
                    • Film - Review
                    <a
                      href="https://film-p.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline ml-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li className="flex items-center gap-1">
                    • Gov Rules 2024-25
                    <a
                      href="https://patel-priyank-1602.github.io/Indian-Rules/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline ml-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>


      {/* Projects */}
      <Section
        id="projects"
        title="Projects & Research"
        subtitle="Showcasing innovation through integrated problem-solving"
        className="bg-section-alt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="CineVerse – Movie & Series Planner"
            description="A responsive OTT-style web app with a sleek streaming UI, featuring search, trailers, detailed info, and redirects for released and upcoming content."
            image="/cine.png"
            objectives={[
              "Design an intuitive interface for movie and series tracking",
              "Implement real-time search and trailer integration",
              "Optimize performance for mobile and desktop users",
            ]}
            methodology="Developed using Next.js, TailwindCSS, and Vercel to deliver a seamless and responsive experience, integrating APIs for dynamic content."
            outcomes={[
              "Delivered a smooth movie exploration and planning experience",
              "Achieved 100% responsive design compatibility",
              "Improved engagement through interactive UI/UX",
            ]}
            technologies={["Next.js", "TailwindCSS", "JavaScript", "Vercel"]}
            links={{
              github: "https://github.com/Patel-Priyank-1602/movieweb-blog",
              live: "https://cineverse-p.netlify.app/",
            }}
          />

          <ProjectCard
            title="InfraVision – H₂ Plant Planning Platform"
            description="An AI-powered platform for green hydrogen infrastructure planning with interactive maps, AI insights, and real-time dashboards."
            image="/infra.png"
            objectives={[
              "Develop AI-driven planning for hydrogen plants",
              "Integrate geospatial visualization tools",
              "Implement secure authentication and data pipelines",
            ]}
            methodology="Built using React, TypeScript, TailwindCSS, Leaflet.js, and Supabase. Integrated Gemini API for AI insights and PostgreSQL for scalable data storage."
            outcomes={[
              "Enabled real-time AI-based analysis and planning",
              "Presented in HackOut 2025, earning recognition for innovation",
              "Secured grant consideration for pilot implementation",
            ]}
            technologies={[
              "React",
              "TypeScript",
              "Leaflet.js",
              "Supabase",
              "PostgreSQL",
              "Gemini API",
            ]}
            links={{
              github: "https://github.com/Patel-Priyank-1602/InfraVision.git",
              live: "https://www.linkedin.com/posts/patel-priyank-945131288_hackout2025-greenhydrogen-ai-activity-7368260435646517250-9X0C",
            }}
          />

          <ProjectCard
            title="WebSync – Website Manager"
            description="A customizable bookmark manager with category organization, instant search, dark/light mode, and drag-and-drop support."
            image="/web.png"
            objectives={[
              "Simplify bookmark and link management",
              "Enhance productivity with organized workflows",
              "Provide seamless theme switching and drag functionality",
            ]}
            methodology="Developed with HTML, CSS, and JavaScript using a responsive design approach for desktop and mobile users."
            outcomes={[
              "Delivered high usability through instant search and drag features",
              "Implemented user-friendly dark/light theme switching",
              "Improved organization and accessibility for web resources",
            ]}
            technologies={["HTML", "CSS", "JavaScript"]}
            links={{
              github: "https://github.com/Patel-Priyank-1602/WebSyncP-.git",
              live: "https://patel-priyank-1602.github.io/WebSyncP-/",
            }}
          />

          <ProjectCard
            title="CGPA Calculator – Engineering Students"
            description="A Java Swing-based desktop app that calculates CGPA for engineering students with validation and grade automation."
            image="/cgpa.png"
            objectives={[
              "Automate CGPA calculation for multiple semesters",
              "Handle theory and lab subjects efficiently",
              "Provide input validation and automated grade conversion",
            ]}
            methodology="Built using Java Swing with modular components for subject handling, computation, and UI interaction."
            outcomes={[
              "Simplified grade calculation for engineering students",
              "Reduced manual errors through validation",
              "Enhanced user experience with clear layout and automation",
            ]}
            technologies={["Java", "Swing"]}
            links={{
              github:
                "https://github.com/Patel-Priyank-1602/PDEU-3rd-SEM-CGPA-Calculator-.git",
              live:
                "https://www.linkedin.com/posts/patel-priyank-945131288_java-programming-engineering-activity-7265681809449885699-zRXx",
            }}
          />
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-10">
          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/patel-priyank-945131288/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <Link className="w-4 h-4" /> View All Projects
          </Button>
        </div>
      </Section>


      {/* Skills */}
      <Section
        id="skills"
        title="Advanced Skill Development & Mastery"
        subtitle="Technical proficiencies and professional competencies that drive innovation"
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <SkillCategory
            title="Technical Skills"
            description="Core programming languages, frameworks, and engineering tools"
            skills={[
              "Python",
              "JavaScript / TypeScript",
              "React",
              "Node.js",
              "SQL Databases",
              "Git & Version Control",
              "Docker & Kubernetes",
              "Data Visualization",
            ]}
          />

          <SkillCategory
            title="Soft Skills"
            description="Leadership and communication abilities for collaborative problem-solving"
            skills={[
              "Leadership & Team Management",
              "Technical Writing",
              "Critical Thinking",
              "Problem Solving",
              "Project Management",
              "Time Management",
            ]}
          />

          <SkillCategory
            title="Creative Competencies"
            description="Design thinking, creativity, and user-centered innovation"
            skills={[
              "Design Thinking",
              "UI / UX Design",
              "Creative Problem Solving",
              "Prototyping",
              "User Research",
              "Visual Communication",
            ]}
          />

          <SkillCategory
            title="Research & Analysis"
            description="Academic research, statistical modeling, and experimental design"
            skills={[
              "Statistical Analysis",
              "Experimental Design",
              "Academic Writing",
            ]}
          />
        </div>
      </Section>

      {/* Leadership */}
      <Section
        id="leadership"
        title="Collaborative & Leadership Experiences"
        subtitle="Driving innovation through teamwork and leadership"
        className="bg-section-alt"
      >
        {/* Card 1: Team Pyshell & ShellNova */}
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              Web Dev Head – Team Pyshell (ShellNova 2025)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <p className="text-muted-foreground leading-relaxed">
              Led the technical team for <strong>ShellNova 2025</strong> as Web Development Head,
              managing the design, development, and deployment of the official website and registration system.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
              <li>Deployed event website handling 100+ registrations.</li>
              <li>Built custom analytics and participant tracking dashboard.</li>
              <li>Maintained 99.9% uptime during event peaks.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Implemented agile workflows, weekly sprints, and peer reviews to ensure collaboration and consistency.
            </p>
          </CardContent>
        </Card>

        {/* Card 2: Collaborative Project – InfraVision */}
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Target className="h-6 w-6" />
              </div>
              Collaborative Project: InfraVision
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              Contributed to <strong>InfraVision</strong> — an AI-powered hydrogen plant planning tool using React, TypeScript, and Supabase.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
              <li>Integrated Gemini API for AI insights and geospatial mapping with Leaflet.js.</li>
              <li>Built responsive dashboards and managed real-time data pipelines.</li>
              <li>Recognized at HackOut 2025 for innovation and design excellence.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Card 3: Collaborative Project – Project Lakshya */}
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Target className="h-6 w-6" />
              </div>
              Collaborative Project: Project Lakshya
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              Co-developed <strong>Project Lakshya</strong>, a TypeScript-based web app using React, TailwindCSS, and Supabase.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
              <li>Contributed 30+ commits and optimized frontend performance.</li>
              <li>Applied component-based architecture with Vite and ESLint.</li>
              <li>Enhanced type safety and scalability in team-based development.</li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              {["TypeScript", "React", "TailwindCSS", "Supabase", "Vite", "ESLint"].map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>


      {/* Ethics */}
      <Section
        id="ethics"
        title="Global Awareness & Ethical Considerations"
        subtitle="Ethics, inclusivity, and sustainability in innovation"
      >
        {/* Card 1: Ethical AI & Responsible Innovation */}
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Globe className="h-6 w-6" />
              </div>
              Case Study: Ethical AI in Sustainable Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Ethical Challenge:</h4>
              <p className="text-muted-foreground">
                While building <strong>InfraVision</strong> — an AI platform for optimizing green hydrogen
                infrastructure — I faced the challenge of ensuring fairness, transparency, and accountability
                in machine learning predictions impacting environmental and social decisions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Approach & Action:</h4>
              <p className="text-muted-foreground">
                I adopted <strong>Explainable AI (XAI)</strong> frameworks, conducted bias audits, and
                prioritized <strong>open-data ethics</strong> to maintain integrity and trust. The solution
                reinforced that ethical responsibility is essential to truly sustainable innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Reflection:</h4>
              <p className="text-muted-foreground">
                This experience deepened my conviction that technology must advance with <strong>equity,
                  inclusivity, and global awareness</strong>. I strive to design digital systems that empower
                people responsibly — balancing innovation with social and environmental good.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Global Collaboration & Cultural Awareness */}
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="text-2xl">Global Collaboration & Responsibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Across projects like <strong>AI-Powered Healthcare Diagnostics</strong>, <strong>PyShell</strong>,
              <strong> CineVerse</strong>, and <strong>WebSync</strong>, I’ve worked with peers and users from
              diverse backgrounds. Each collaboration reinforced my focus on <strong>human-centered design</strong>,
              <strong> accessibility</strong>, and <strong>cultural inclusivity</strong> — ensuring technology
              remains a tool for empowerment, not exclusion.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Future Goals */}
      <Section
        id="future"
        title="Future Aspirations & Professional Development"
        subtitle="Continuous growth and long-term vision"
        className="bg-section-alt"
      >
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              Career Goals & Development Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Short-term Goals (1–2 years):</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Advance technical expertise in <strong>AI-driven web systems</strong> and full-stack cloud architecture</li>
                <li>Earn certifications in <strong>Machine Learning, Cloud (AWS/Azure)</strong>, and <strong>UI/UX Engineering</strong></li>
                <li>Contribute to <strong>open-source AI and sustainability projects</strong></li>
                <li>Expand <strong>InfraVision</strong> and <strong>PyShell</strong> into scalable, community-oriented platforms</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-3">Long-term Goals (3–5 years):</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Pursue <strong>research or postgraduate studies</strong> in AI ethics and sustainable computing</li>
                <li>Lead innovative projects combining <strong>AI, environmental awareness, and design thinking</strong></li>
                <li>Establish mentorship and learning initiatives for <strong>emerging developers</strong></li>
                <li>Contribute to <strong>ethical AI policy</strong> and responsible technology adoption worldwide</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-3">Continuous Learning Strategy:</h4>
              <p className="text-muted-foreground">
                I believe growth is fueled by curiosity and adaptability. I plan to continue learning through
                hands-on projects, hackathons, online courses, and collaboration with global developer
                communities. Staying informed about emerging fields like <strong>AI ethics, quantum computing, and Industry 4.0</strong>
                will guide my evolution as a responsible and future-ready technologist.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Future Goals */}
      <Section
        id="future"
        title="Future Aspirations & Professional Development"
        subtitle="Lifelong learning, leadership, and purposeful innovation"
        className="bg-section-alt"
      >
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              Vision & Growth Roadmap
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Short-term Goals */}
            <div>
              <h4 className="font-semibold mb-3">Short-Term Goals (1–2 Years):</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Strengthen expertise in <strong>AI-driven web ecosystems</strong> and <strong>cloud-native full-stack development</strong></li>
                <li>Contribute actively to <strong>open-source projects</strong> promoting sustainability and ethical AI</li>
                <li>Scale initiatives like <strong>InfraVision</strong> and <strong>PyShell</strong> into collaborative, community-powered platforms</li>
              </ul>
            </div>

            <Separator />

            {/* Long-term Goals */}
            <div>
              <h4 className="font-semibold mb-3">Long-Term Goals (3–5 Years):</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Pursue advanced <strong>research or postgraduate studies</strong> in <strong>AI Ethics and Sustainable Computing</strong></li>
                <li>Lead cross-disciplinary teams creating <strong>responsible AI solutions</strong> with global environmental and social impact</li>
                <li>Establish mentorship programs and learning communities for <strong>emerging developers and innovators</strong></li>
                <li>Contribute to shaping <strong>ethical AI governance</strong> and policies for transparent technology adoption worldwide</li>
              </ul>
            </div>

            <Separator />

            {/* Continuous Learning Strategy */}
            <div>
              <h4 className="font-semibold mb-3">Continuous Learning & Growth Philosophy:</h4>
              <p className="text-muted-foreground">
                I believe that meaningful progress stems from <strong>curiosity, collaboration, and continuous learning</strong>.
                My growth strategy involves engaging in real-world projects, global hackathons, and interdisciplinary research.
                Staying ahead in evolving domains like <strong>AI ethics, quantum computing, and Industry 4.0  </strong> will
                empower me to design technology that is not just advanced — but <strong>ethical, inclusive, and future-ready</strong>.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        title="Testimonials"
        subtitle="Endorsements from mentors and collaborators"
        className="bg-section-alt"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* PyShell / Collaboration */}
          <TestimonialCard
            quote="Collaborating with Priyank on PyShell has been an inspiring journey. His technical precision, design sense, and proactive mindset helped turn ideas into well-structured, impactful solutions. He’s a true team player who elevates everyone’s performance."
            author="Ansh Soni"
            position="Developer of PyShell"
            organization="Pyshell"
          />

          {/* CineVerse */}
          <TestimonialCard
            quote="CineVerse is a prime example of Priyank’s creativity and technical craftsmanship. He built a modern, responsive OTT-style platform that seamlessly blends design, functionality, and performance—showing clear mastery of user-centered development."
            author="Mit Patel"
            position="Machine Learning Entusiast"
            organization="Student at PDEU"
          />

          {/* Academic / Leadership */}
          <TestimonialCard
            quote="Priyank’s ability to transform complex technical concepts into innovative, real-world applications is remarkable. His curiosity and leadership within interdisciplinary projects make him a dependable and forward-thinking collaborator."
            author="Yug Patel"
            position="Developer of SiteCraft"
            organization="Student at PDEU"
          />

          {/* WebSync */}
          <TestimonialCard
            quote="Priyank’s WebSync project highlights his ability to identify real-world problems and engineer elegant, scalable solutions. His focus on usability and customization makes his work stand out as both practical and innovative."
            author="Prince Patel"
            position="Full-Stack Developer"
            organization="Student at PDEU"
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t-2 py-12 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 text-center space-y-4">
        <p className="text-lg font-medium">
          © 2025 Patel Priyank. All rights reserved.
        </p>
        <p className="text-sm opacity-80">
          Created with dedication for Academic Excellence
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Patel-Priyank-1602"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-wiggle inline-block transition-transform"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/patel-priyank-945131288/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-wiggle inline-block transition-transform"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/Priyank_P16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-wiggle inline-block transition-transform"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:patelpriyank2526@gmail.com"
            className="hover:animate-wiggle inline-block transition-transform"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/patelpriyank.d/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-wiggle inline-block transition-transform"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="w-20 h-1 bg-background/50 mx-auto mt-6"></div>
      </div>
    </footer>
    </div>
  );
};

export default Index;
