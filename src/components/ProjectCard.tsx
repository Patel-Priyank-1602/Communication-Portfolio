import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  objectives: string[];
  methodology: string;
  outcomes: string[];
  technologies?: string[];
}

export const ProjectCard = ({
  title,
  description,
  image,
  objectives,
  methodology,
  outcomes,
  technologies,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (isExpanded) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
        <div 
          className="bg-background rounded-lg w-[80vw] h-[80vh] relative flex flex-col shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-background hover:bg-accent transition-colors z-10 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="overflow-y-auto flex-1 p-8">
            <div className="max-w-5xl mx-auto space-y-8">
              <img 
                src={image} 
                alt={title}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
              
              <div>
                <h2 className="text-4xl font-bold mb-3">{title}</h2>
                <p className="text-muted-foreground text-xl leading-relaxed">{description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-xl">Objectives:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-xl">Outcomes:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-xl">Methodology:</h4>
                <p className="text-muted-foreground leading-relaxed">{methodology}</p>
              </div>

              {technologies && technologies.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3 text-xl">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card 
      className="border-2 hover:border-foreground/40 hover:shadow-xl transition-all duration-300 bg-card cursor-pointer overflow-hidden"
      onClick={() => setIsExpanded(true)}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};