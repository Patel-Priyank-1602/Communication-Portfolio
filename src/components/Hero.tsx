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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background via-section-alt to-background">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mt-6 sm:mt-8 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center overflow-hidden border-4 border-border shadow-2xl">
            <img
              src="/Priyank.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>
          
          <div className="space-y-6 animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
              {/* This is a heavier weight for the main title */}
              Patel Priyank
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                {/* THIS IS THE CHANGE: 
                  'font-light' matches the 300 weight from your image. 
                */}
                Academic Program • Institution Name
              </p>
              <div className="w-24 h-1 bg-foreground mx-auto"></div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto font-light">
              {/* I also applied font-light here for consistency */}
              "Dedicated to excellence through continuous learning and innovation"
            </p>
          </div>

          <Button
            onClick={scrollToNext}
            variant="outline"
            size="lg"
            className="mt-12 group border-2 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Explore Portfolio
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};