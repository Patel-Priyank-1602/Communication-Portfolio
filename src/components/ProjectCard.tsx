import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Make sure to import Button
import { X, Github, Link } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  objectives: string[];
  methodology: string;
  outcomes: string[];
  technologies?: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

export const ProjectCard = ({
  title,
  description,
  image,
  objectives,
  methodology,
  outcomes,
  technologies,
  links,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  if (isExpanded) {
    return (
      <div
        // Use p-0 on mobile, p-4 on desktop
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-0 md:p-4 backdrop-blur-sm"
        onClick={() => setIsExpanded(false)}
      >
        <div
          // Full height/width on mobile, constrained on desktop
          className="bg-background rounded-none md:rounded-xl w-full h-full md:h-auto md:max-h-[90vh] relative flex flex-col shadow-2xl border-0 md:border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button adapts position */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/60 backdrop-blur-sm hover:bg-accent transition-colors z-10 shadow-lg border md:-top-4 md:-right-4"
            aria-label="Close project details"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Responsive padding for content area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="space-y-6 md:space-y-8">
              {/* Shorter image on mobile */}
              <img
                src={image}
                alt={title}
                className="w-full h-48 md:h-80 object-cover rounded-lg shadow-md"
              />

              <div>
                {/* Responsive typography */}
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>

              {/* --- LINKS --- */}
              {links && (links.live || links.github) && (
                <div className="flex flex-wrap gap-4">
                  {links.live && (
                    <Button asChild>
                      <a
                        href={links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Link className="mr-2 h-4 w-4" /> View Live
                      </a>
                    </Button>
                  )}
                  {links.github && (
                    <Button variant="secondary" asChild>
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                  )}
                </div>
              )}

              {/* --- DETAILS GRID --- */}
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg md:text-xl">Objectives:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg md:text-xl">Outcomes:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg md:text-xl">Methodology:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {methodology}
                    </p>
                  </div>

                  {technologies && technologies.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-lg md:text-xl">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-sm py-1 px-3"
                          >
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
        </div>
      </div>
    );
  }

  // --- Card (unchanged) ---
  return (
    <Card
      className="border-2 hover:border-primary/60 hover:shadow-xl transition-all duration-300 bg-card cursor-pointer overflow-hidden group"
      onClick={() => setIsExpanded(true)}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};