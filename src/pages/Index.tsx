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
  CheckCircle2
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

      {/* Resume/CV */}
      <Section 
        id="resume" 
        title="Resume / CV"
        subtitle="Professional background and qualifications"
      >
        <div className="space-y-8">
          {/* Education */}
          <Card className="border-2 shadow-md">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-foreground text-background rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Master of Science in Computer Science</h4>
                <p className="text-muted-foreground">University Name • 2023 - 2025</p>
                <p className="text-sm text-muted-foreground mt-2">GPA: 3.8/4.0</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">Bachelor of Technology</h4>
                <p className="text-muted-foreground">Institution Name • 2019 - 2023</p>
                <p className="text-sm text-muted-foreground mt-2">First Class with Distinction</p>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="border-2 shadow-md">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-foreground text-background rounded-lg">
                  <Briefcase className="h-6 w-6" />
                </div>
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Research Assistant</h4>
                <p className="text-muted-foreground">University Research Lab • 2024 - Present</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>Conducted research on machine learning applications</li>
                  <li>Published papers in peer-reviewed journals</li>
                  <li>Collaborated with interdisciplinary teams</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">Software Development Intern</h4>
                <p className="text-muted-foreground">Tech Company • Summer 2023</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>Developed full-stack web applications</li>
                  <li>Implemented automated testing frameworks</li>
                  <li>Participated in agile development processes</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Certifications */}
          <Card className="border-2 shadow-md">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-foreground text-background rounded-lg">
                  <Award className="h-6 w-6" />
                </div>
                Awards, Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dean's List - Excellence in Academics</p>
                  <p className="text-sm text-muted-foreground">2023, 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">AWS Certified Solutions Architect</p>
                  <p className="text-sm text-muted-foreground">Amazon Web Services, 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Best Research Paper Award</p>
                  <p className="text-sm text-muted-foreground">International Conference, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Areas of Interest & Hobbies */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 shadow-md">
              <CardHeader className="bg-muted/50">
                <CardTitle className="text-lg">Areas of Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Data Science & Analytics</li>
                  <li>• Sustainable Technology</li>
                  <li>• Human-Computer Interaction</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 shadow-md">
              <CardHeader className="bg-muted/50">
                <CardTitle className="text-lg">Hobbies & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Technical Writing & Blogging</li>
                  <li>• Open Source Contributions</li>
                  <li>• Photography</li>
                  <li>• Mentoring Students</li>
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
        <ProjectCard
          title="AI-Powered Healthcare Diagnostic System"
          description="An interdisciplinary project combining machine learning, healthcare, and ethics to create an accessible diagnostic tool."
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
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              Team Leadership: Student Innovation Club
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Role & Responsibilities:</h4>
              <p className="text-muted-foreground">
                Served as President, leading a team of 30+ members in organizing hackathons, 
                workshops, and innovation challenges. Managed budget, mentored members, and 
                coordinated with industry partners.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Increased club membership by 150%</li>
                <li>Organized university's largest hackathon with 200+ participants</li>
                <li>Secured sponsorships worth $50,000</li>
                <li>Mentored 15+ student projects to completion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Team Dynamics & Conflict Resolution:</h4>
              <p className="text-muted-foreground">
                Implemented structured communication channels, established clear roles, and created 
                a culture of open feedback. Successfully mediated conflicts through active listening 
                and collaborative problem-solving approaches.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Target className="h-6 w-6" />
              </div>
              Collaborative Research Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Collaborated with interdisciplinary team of engineers, designers, and healthcare 
              professionals on AI healthcare solutions. Facilitated knowledge sharing across 
              domains and integrated diverse perspectives into project outcomes.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Ethics */}
      <Section 
        id="ethics" 
        title="Global Awareness & Ethical Considerations"
        subtitle="Responsibility, impact, and global perspective"
      >
        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-foreground text-background rounded-lg">
                <Globe className="h-6 w-6" />
              </div>
              Case Study: AI Bias in Healthcare
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Ethical Challenge:</h4>
              <p className="text-muted-foreground">
                During the development of our AI diagnostic system, we discovered potential biases 
                in training data that could lead to disparities in healthcare outcomes across 
                different demographic groups.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Analysis & Response:</h4>
              <p className="text-muted-foreground">
                Conducted thorough bias audits, diversified training datasets, implemented fairness 
                metrics, and established ongoing monitoring protocols. Consulted with ethics board 
                and healthcare professionals to ensure equitable outcomes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Personal Reflection:</h4>
              <p className="text-muted-foreground">
                This experience reinforced my belief that technological innovation must be coupled 
                with ethical responsibility. As developers, we have a duty to consider the broader 
                social impact of our work and actively work to prevent harm.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 shadow-md">
          <CardHeader className="bg-muted/50">
            <CardTitle className="text-2xl">Global Sustainability Perspective</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              My work on sustainable smart city infrastructure reflects my commitment to addressing 
              global environmental challenges. I believe technology should be leveraged to create 
              sustainable solutions that benefit communities worldwide while preserving resources 
              for future generations.
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
              <h4 className="font-semibold mb-3">Short-term Goals (1-2 years):</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Complete advanced certifications in machine learning and cloud architecture</li>
                <li>Publish research in top-tier conferences and journals</li>
                <li>Contribute to open-source AI/ML projects</li>
                <li>Develop expertise in emerging technologies like quantum computing</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-3">Long-term Goals (3-5 years):</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Pursue doctoral research in AI ethics and responsible technology</li>
                <li>Lead innovative projects at intersection of technology and social good</li>
                <li>Establish mentorship programs for underrepresented groups in tech</li>
                <li>Contribute to policy development for ethical AI implementation</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-3">Continuous Learning Strategy:</h4>
              <p className="text-muted-foreground">
                Committed to lifelong learning through online courses, industry conferences, 
                collaborative research, and staying current with technological advancements. 
                Will actively seek diverse perspectives and interdisciplinary opportunities 
                to broaden knowledge and skills.
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
                Throughout my academic journey, I have successfully integrated knowledge across 
                multiple disciplines, led impactful projects, and developed both technical and 
                interpersonal skills. My work has been recognized through awards, publications, 
                and real-world applications that demonstrate meaningful impact.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Lessons Learned:</h4>
              <p className="text-muted-foreground leading-relaxed">
                I've learned that effective collaboration requires active listening, empathy, and 
                clear communication. Challenges are opportunities for growth, and the most 
                innovative solutions often emerge from diverse perspectives and interdisciplinary 
                approaches.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-xl">SWOT Analysis:</h4>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-6 border-2 rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <h5 className="font-medium mb-2">Strengths</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Strong technical foundation</li>
                    <li>• Interdisciplinary thinking</li>
                    <li>• Leadership experience</li>
                    <li>• Research capabilities</li>
                  </ul>
                </div>
                <div className="p-6 border-2 rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <h5 className="font-medium mb-2">Weaknesses</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Limited industry experience</li>
                    <li>• Need deeper specialization</li>
                    <li>• Time management in complex projects</li>
                  </ul>
                </div>
                <div className="p-6 border-2 rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <h5 className="font-medium mb-2">Opportunities</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Emerging AI technologies</li>
                    <li>• Industry collaborations</li>
                    <li>• Global research networks</li>
                    <li>• Ethical tech leadership</li>
                  </ul>
                </div>
                <div className="p-6 border-2 rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <h5 className="font-medium mb-2">Threats</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rapid technological changes</li>
                    <li>• Competitive job market</li>
                    <li>• Evolving skill requirements</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Areas for Growth:</h4>
              <p className="text-muted-foreground leading-relaxed">
                I aim to deepen my specialization in AI ethics while gaining more hands-on industry 
                experience. Improving time management and developing stronger expertise in emerging 
                technologies remain priorities for continuous improvement.
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
            © 2025 Your Name. All rights reserved.
          </p>
          <p className="text-sm opacity-80">
            Created with dedication for academic excellence
          </p>
          <div className="w-20 h-1 bg-background/50 mx-auto mt-4"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
