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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-section-alt to-background"
    >
      {/* Increased top padding for mobile */}
      <div className="container mx-auto px-4 md:px-8 lg:px-10 pt-24 pb-12 md:pt-12 md:pb-0">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-10 lg:gap-12">
          
          {/* LEFT — Profile Image */}
          <div className="flex justify-center md:justify-start w-full md:w-[43%]">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-2xl scale-110" />
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[25rem] lg:h-[25rem] rounded-full overflow-hidden border-4 border-border shadow-2xl bg-background">
                <img
                  src="/Priyank.png"
                  alt="Priyank Patel Profile"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Text Content */}
          <div className="w-full md:w-[50%] text-center md:text-left space-y-8 animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight">
              Patel Priyank
            </h1>

            <div className="space-y-3">
              <p className="text-xl sm:text-2xl text-muted-foreground font-light">
                B.Tech in Computer Engineering • PDEU, Gandhinagar
              </p>
              <div className="w-28 h-[2px] bg-foreground mx-auto md:mx-0"></div>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground italic font-light max-w-lg mx-auto md:mx-0">
              "Dedicated to excellence through continuous learning and innovation"
            </p>

            <Button
              onClick={scrollToNext}
              variant="outline"
              size="lg"
              className="mt-4 md:mt-6 group border-2 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Explore Portfolio
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
