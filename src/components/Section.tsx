import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, subtitle, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-24 border-b border-section-border ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                {subtitle}
              </p>
            )}
            <div className="w-20 h-1 bg-foreground mx-auto mt-6"></div>
          </div>
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
