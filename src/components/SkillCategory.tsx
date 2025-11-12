import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Cpu, 
  Database, 
  Cloud, 
  GitBranch, 
  Container,
  Brain,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
  Clock,
  Palette,
  Pencil,
  TestTube,
  BarChart,
  FileText,
  Search,
  BookOpen,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Settings
} from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  description?: string;
}

// Icon mapping for common skills
const skillIcons: Record<string, any> = {
  // Programming Languages
  "Python": Code2,
  "JavaScript": Code2,
  "TypeScript": Code2,
  "Java": Code2,
  "C++": Code2,
  
  // Frameworks & Libraries
  "React": Cpu,
  "Node.js": Cpu,
  "Angular": Cpu,
  "Vue": Cpu,
  
  // Databases
  "SQL": Database,
  "NoSQL": Database,
  "MongoDB": Database,
  "PostgreSQL": Database,
  "MySQL": Database,
  
  // Cloud & DevOps
  "AWS": Cloud,
  "Azure": Cloud,
  "Cloud Computing": Cloud,
  "Cloud Platforms (AWS, Azure)": Cloud,
  "Docker": Container,
  "Kubernetes": Container,
  "Git & Version Control": GitBranch,
  
  // AI/ML
  "Machine Learning": Brain,
  "TensorFlow": Brain,
  "AI": Brain,
  "Deep Learning": Brain,
  
  // Soft Skills
  "Leadership": Users,
  "Team Management": Users,
  "Leadership & Team Management": Users,
  "Communication": MessageSquare,
  "Public Speaking": MessageSquare,
  "Problem Solving": Target,
  "Critical Thinking": Lightbulb,
  "Time Management": Clock,
  "Project Management": Target,
  "Mentoring": Users,
  "Cross-functional Collaboration": Users,
  
  // Design
  "UI/UX Design": Palette,
  "Design Thinking": Palette,
  "Visual Communication": Palette,
  "Prototyping": Pencil,
  
  // Research & Analysis
  "Research Methodology": Search,
  "Statistical Analysis": BarChart,
  "Data Mining": BarChart,
  "Data Visualization": BarChart,
  "Literature Review": BookOpen,
  "Academic Writing": FileText,
  "Technical Writing": FileText,
  "Experimental Design": TestTube,
  
  // Other
  "IoT": Smartphone,
  "Big Data": Database,
  "GIS": Globe,
  "HIPAA Compliance": Shield,
  "Performance Optimization": Zap,
  "User Research": Search,
};

// Default icon for skills without specific mapping
const getSkillIcon = (skill: string) => {
  return skillIcons[skill] || Settings;
};

export const SkillCategory = ({ title, skills, description }: SkillCategoryProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => {
            const Icon = getSkillIcon(skill);
            return (
              <Badge key={idx} variant="outline" className="text-sm flex items-center gap-1.5 py-1.5 px-3">
                <Icon className="w-3.5 h-3.5" />
                {skill}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

// Demo Component
export default function SkillsDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory
            title="Technical Skills"
            description="Programming languages, frameworks, and tools"
            skills={[
              "Python",
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Machine Learning",
              "SQL",
              "NoSQL",
              "AWS",
              "Azure",
              "Git & Version Control",
              "Docker",
              "Kubernetes",
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
              "Time Management"
            ]}
          />
          <SkillCategory
            title="Creative Competencies"
            description="Design thinking and innovation"
            skills={[
              "Design Thinking",
              "UI/UX Design",
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
      </div>
    </div>
  );
}