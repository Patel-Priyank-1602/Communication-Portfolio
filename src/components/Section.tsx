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
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground mt-2">{subtitle}</p>
            )}
          </div>
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
