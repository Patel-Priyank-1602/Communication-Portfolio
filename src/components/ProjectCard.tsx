import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  objectives: string[];
  methodology: string;
  outcomes: string[];
  technologies?: string[];
}

export const ProjectCard = ({
  title,
  description,
  objectives,
  methodology,
  outcomes,
  technologies,
}: ProjectCardProps) => {
  return (
    <Card className="border-2 hover:border-foreground/40 hover:shadow-xl transition-all duration-300 bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Objectives:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {objectives.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Methodology:</h4>
          <p className="text-muted-foreground">{methodology}</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Outcomes:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {outcomes.map((outcome, idx) => (
              <li key={idx}>{outcome}</li>
            ))}
          </ul>
        </div>

        {technologies && technologies.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
