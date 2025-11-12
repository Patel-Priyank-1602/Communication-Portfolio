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
  ExternalLink
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Hero />

      {/* Introduction & Philosophy */}
      <Section
        id="about"
        title="Introduction & Learning Philosophy"
        subtitle="My journey of continuous growth and academic excellence"
        className="bg-section-alt"
      >
        <Card className="border-2 shadow-md">
          <CardContent className="pt-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              My academic journey has been guided by a deep commitment to interdisciplinary learning
              and innovation. I believe that true knowledge comes from the synthesis of diverse fields,
              critical thinking, and real-world application.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Throughout my studies, I've embraced challenges as opportunities for growth, sought to
              bridge theory with practice, and remained dedicated to making meaningful contributions
              to my field and society at large.
            </p>
            <div className="pt-4 space-y-2">
              <h4 className="font-semibold">Core Values:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Excellence</Badge>
                <Badge variant="secondary">Innovation</Badge>
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
                  <p className="text-gray-600 dark:text-gray-400">Institution Name • 2019 - 2023</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">First Class with Distinction</p>
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
                  <h4 className="font-semibold">Research Assistant</h4>
                  <p className="text-gray-600 dark:text-gray-400">University Research Lab • 2024 - Present</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>Conducted research on machine learning applications</li>
                    <li>Published papers in peer-reviewed journals</li>
                    <li>Collaborated with interdisciplinary teams</li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=Research+Lab"
                    alt="Research Lab Logo"
                    className="w-20 h-20 object-contain rounded-lg border-2 border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold">Software Development Intern</h4>
                  <p className="text-gray-600 dark:text-gray-400">Tech Company • Summer 2023</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>Developed full-stack web applications</li>
                    <li>Implemented automated testing frameworks</li>
                    <li>Participated in agile development processes</li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/80x80/10B981/FFFFFF?text=Tech+Co"
                    alt="Tech Company Logo"
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
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dean's List - Excellence in Academics</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2023, 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium">AWS Certified Solutions Architect</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services, 2024</p>
                  <a
                    href="https://aws.amazon.com/verification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1"
                  >
                    View Certificate
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium">Best Research Paper Award</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">International Conference, 2024</p>
                  <a
                    href="https://example.com/paper-certificate"
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
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Data Science & Analytics</li>
                  <li>• Sustainable Technology</li>
                  <li>• Human-Computer Interaction</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 shadow-md">
              <CardHeader className="bg-gray-50 dark:bg-gray-900">
                <CardTitle className="text-lg">Hobbies & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Technical Writing & Blogging</li>
                  <li>• Open Source Contributions</li>
                  <li>• Photography</li>
                  <li className="flex items-center gap-1">
                    • Mentoring Students
                    <a
                      href="https://example.com/mentoring"
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
        title="Interdisciplinary Projects & Research"
        subtitle="Showcasing innovation through integrated problem-solving"
        className="bg-section-alt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="AI-Powered Healthcare Diagnostic System"
            description="An interdisciplinary project combining machine learning, healthcare, and ethics to create an accessible diagnostic tool."
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
            objectives={[
              "Develop accurate disease prediction models",
              "Ensure ethical AI practices and patient privacy",
              "Create accessible interface for medical professionals"
            ]}
            methodology="Applied deep learning techniques with medical datasets, conducted ethical reviews, and collaborated with healthcare professionals for validation."
            outcomes={[
              "Achieved 92% accuracy in disease prediction",
              "Published research paper in medical informatics journal",
              "Implemented HIPAA-compliant data handling"
            ]}
            technologies={["Python", "TensorFlow", "React", "HIPAA Compliance"]}
          />

          <ProjectCard
            title="Sustainable Smart City Infrastructure"
            description="Research project integrating IoT, data analytics, and urban planning to optimize city resource management."
            image="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop"
            objectives={[
              "Reduce energy consumption in urban areas",
              "Implement real-time monitoring systems",
              "Analyze environmental impact"
            ]}
            methodology="Deployed IoT sensors, developed data analytics pipeline, and created visualization dashboards for city planners."
            outcomes={[
              "Demonstrated 25% potential reduction in energy waste",
              "Presented findings at international sustainability conference",
              "Secured grant funding for pilot implementation"
            ]}
            technologies={["IoT", "Big Data", "Cloud Computing", "GIS"]}
          />
        </div>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        title="Advanced Skill Development & Mastery"
        subtitle="Technical proficiencies and professional competencies"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory
            title="Technical Skills"
            description="Programming languages, frameworks, and tools"
            skills={[
              "Python",
              "JavaScript/TypeScript",
              "React",
              "Node.js",
              "Machine Learning",
              "SQL/NoSQL",
              "Cloud Platforms (AWS, Azure)",
              "Git & Version Control",
              "Docker & Kubernetes",
              "Data Visualization"
            ]}
          />
          <SkillCategory
            title="Soft Skills"
            description="Leadership, communication, and collaboration"
            skills={[
              "Leadership & Team Management",
              "Public Speaking",
              "Technical Writing",
              "Critical Thinking",
              "Problem Solving",
              "Project Management",
              "Cross-functional Collaboration",
              "Mentoring",
              "Adaptability",
              "Time Management"
            ]}
          />
          <SkillCategory
            title="Creative Competencies"
            description="Design thinking and innovation"
            skills={[
              "Design Thinking",
              "UI/UX Design",
              "Creative Problem Solving",
              "Prototyping",
              "User Research",
              "Visual Communication"
            ]}
          />
          <SkillCategory
            title="Research & Analysis"
            description="Academic and analytical capabilities"
            skills={[
              "Research Methodology",
              "Statistical Analysis",
              "Data Mining",
              "Literature Review",
              "Experimental Design",
              "Academic Writing"
            ]}
          />
        </div>
      </Section>

      {/* Leadership */}
      <Section
        id="leadership"
        title="Collaborative & Leadership Experiences"
        subtitle="Building teams and driving collective success"
        className="bg-section-alt"
      >
        {/* Card 1: Team Pyshell & ShellNova */}
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              Team Leadership: Web Dev Head (Team Pyshell)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6"> {/* Added pt-6 for padding */}
            <div>
              <h4 className="font-semibold mb-2">Role & Responsibilities:</h4>
              <p className="text-muted-foreground">
                Served as **Web Development Head** for **Team Pyshell**, leading the
                technical team for the **ShellNova** event. My responsibilities included
                managing the web team's workflow, coordinating with design and
                marketing divisions, and overseeing the entire development lifecycle
                of the event's official website and registration portal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>
                  Successfully designed and deployed the official **ShellNova** website,
                  handling [e.g., 1000+] participant registrations.
                </li>
                <li>
                  Developed a custom dashboard for event management, analytics, and
                  participant tracking.
                </li>
                <li>
                  Mentored a team of [e.g., 5] junior developers, guiding them in
                  [e.g., React, Node.js, and database management].
                </li>
                <li>
                  Ensured 99.9% website uptime and a seamless user experience
                  during peak registration traffic.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Team Dynamics & Conflict Resolution:</h4>
              <p className="text-muted-foreground">
                Implemented agile methodologies and structured communication channels
                (e.g., weekly sprints, code reviews) to keep the team aligned.
                Established clear roles and fostered a culture of open feedback,
                mediating technical disagreements through collaborative
                problem-solving.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Collaborative Project 1 */}
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Target className="h-6 w-6" />
              </div>
              Collaborative Project: [Your Project Name 1]
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6"> {/* Added pt-6 for padding */}
            <p className="text-muted-foreground">
              Collaborated with an interdisciplinary team of [e.g., 3] members on
              [e.g., 'a full-stack web application']. My primary role focused on
              [e.g., 'backend development using Python/Flask and REST API design'].
              We utilized Git for version control and held weekly sprints to
              coordinate tasks and integrate features.
            </p>
          </CardContent>
        </Card>

        {/* Card 3: Collaborative Project 2 */}
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Target className="h-6 w-6" />
              </div>
              Collaborative Project: [Your Project Name 2]
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6"> {/* Added pt-6 for padding */}
            <p className="text-muted-foreground">
              Worked with [e.g., 'designers and data analysts'] to build
              [e.g., 'a data visualization dashboard']. I was responsible for
              [e.g., 'fetching and processing data from multiple sources'] and
              [e.g., 'implementing interactive charts using JavaScript'].
              Facilitated knowledge sharing across domains to achieve project
              goals.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Ethics */}
      <Section
        id="ethics"
        title="Global Awareness & Ethical Considerations"
        subtitle="Responsibility, innovation, and global perspective"
      >
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
                While developing <strong>InfraVision</strong> — an AI-driven platform for green hydrogen
                infrastructure — I encountered challenges ensuring fairness, accuracy, and transparency
                in AI predictions used for environmental decision-making.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Analysis & Response:</h4>
              <p className="text-muted-foreground">
                To address these, I integrated explainable AI models, validated data sources, and
                implemented open-data ethics. The project emphasized how sustainable innovation must
                also prioritize ethical responsibility and real-world impact.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Personal Reflection:</h4>
              <p className="text-muted-foreground">
                This experience strengthened my belief that technology should serve humanity with
                fairness, inclusivity, and sustainability. I aim to create digital solutions that not
                only solve problems but also promote trust, equity, and global awareness in technology.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="text-2xl">Global Perspective & Responsibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Through projects like <strong>PyShell</strong>, <strong>CineVerse</strong>, and
              <strong> WebSync</strong>, I’ve collaborated globally and embraced diverse user needs.
              My approach combines modern design thinking with cultural inclusivity — ensuring that
              my applications are accessible, responsible, and sustainable for users worldwide.
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

      {/* Self-Assessment */}
      <Section
        id="conclusion"
        title="Conclusion & Self-Assessment"
        subtitle="Reflection on growth and future directions"
      >
        <Card className="border-2 shadow-md">
          <CardContent className="pt-8 space-y-8">
            <div>
              <h4 className="font-semibold mb-3">Key Achievements:</h4>
              <p className="text-muted-foreground leading-relaxed">
                My journey as a developer has been defined by <strong>innovation, ethics, and impact</strong>.
                From building <strong>CineVerse</strong> and <strong>WebSync</strong> to leading <strong>InfraVision</strong> —
                an AI-powered sustainability platform — I’ve demonstrated the ability to merge
                technical depth with meaningful, real-world outcomes. Recognitions such as being
                <strong>2nd in the PDEU ACM Hackathon</strong> reflect my drive to create solutions that matter.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Lessons Learned:</h4>
              <p className="text-muted-foreground leading-relaxed">
                I’ve learned that collaboration, empathy, and adaptability are just as vital as coding skills.
                Every project taught me the importance of balancing <strong>innovation with responsibility</strong> —
                ensuring technology remains inclusive, ethical, and accessible to all.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-xl">SWOT Analysis:</h4>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-6 border-2 rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <h5 className="font-medium mb-2">Strengths</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Strong foundation in full-stack web development</li>
                    <li>• Passion for AI, sustainability, and innovation</li>
                    <li>• Effective leadership and problem-solving</li>
                    <li>• Rapid learning and adaptability</li>
                  </ul>
                </div>
                <div className="p-6 border-2 rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <h5 className="font-medium mb-2">Weaknesses</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Limited corporate/industry exposure</li>
                    <li>• Need to strengthen specialization in advanced AI models</li>
                    <li>• Occasionally overextend scope in complex projects</li>
                  </ul>
                </div>
                <div className="p-6 border-2 rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <h5 className="font-medium mb-2">Opportunities</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Expanding AI and sustainability sectors</li>
                    <li>• Cross-disciplinary research collaborations</li>
                    <li>• Growth in global open-source communities</li>
                    <li>• Leadership in responsible tech development</li>
                  </ul>
                </div>
                <div className="p-6 border-2 rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <h5 className="font-medium mb-2">Threats</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rapid evolution of technology standards</li>
                    <li>• Competitive innovation landscape</li>
                    <li>• Ethical dilemmas in uncontrolled AI systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Areas for Growth:</h4>
              <p className="text-muted-foreground leading-relaxed">
                Moving forward, I aim to refine my expertise in <strong>ethical AI systems</strong>
                and gain deeper <strong>industry experience</strong> through research and internships.
                Enhancing focus, time management, and advanced AI model proficiency are my
                next milestones toward becoming a well-rounded, globally aware technologist.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>


      {/* Testimonials */}
      <Section
        id="testimonials"
        title="Testimonials & Recommendations"
        subtitle="What colleagues and mentors say"
        className="bg-section-alt"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="An exceptional student with remarkable ability to bridge theoretical concepts with practical applications. Their leadership in research projects has been outstanding."
            author="Dr. Jane Smith"
            position="Professor of Computer Science"
            organization="University Name"
          />
          <TestimonialCard
            quote="Demonstrates excellent problem-solving skills and collaborative spirit. Their contributions to our team's projects were invaluable and showed great maturity."
            author="John Doe"
            position="Senior Software Engineer"
            organization="Tech Company Inc."
          />
          <TestimonialCard
            quote="A natural leader who inspires others through dedication and innovation. Their work on sustainable technology solutions shows both technical excellence and social awareness."
            author="Prof. Robert Johnson"
            position="Department Head"
            organization="Engineering Department"
          />
          <TestimonialCard
            quote="One of the most promising young researchers I've mentored. Their ethical approach to AI development and commitment to responsible innovation is exemplary."
            author="Dr. Sarah Williams"
            position="Research Director"
            organization="AI Ethics Institute"
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
          <div className="w-20 h-1 bg-background/50 mx-auto mt-4"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
