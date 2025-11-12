import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-border">
            <span className="text-6xl text-muted-foreground">👤</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Your Full Name
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Academic Program • Institution Name
            </p>
            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
              "Dedicated to excellence through continuous learning and innovation"
            </p>
            <p className="text-sm text-muted-foreground">
              Submitted: November 16, 2025
            </p>
          </div>

          <Button
            onClick={scrollToNext}
            variant="outline"
            size="lg"
            className="mt-8 group"
          >
            Explore Portfolio
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
