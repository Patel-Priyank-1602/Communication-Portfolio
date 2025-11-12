import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  FileText,
  Folder,
  Code,
  Users,
  Globe,
  Target,
  MessageCircle,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Info },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "skills", label: "Skills", icon: Code },
  { id: "leadership", label: "Leadership", icon: Users },
  { id: "ethics", label: "Global & Ethics", icon: Globe },
  { id: "future", label: "Future Goals", icon: Target },
  { id: "testimonials", label: "Testimonials", icon: MessageCircle },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
      setShowUp(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const resetBodyStyles = () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };

    if (!isOpen) {
      resetBodyStyles();
      return;
    }

    const updateBodyPadding = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : "";
    };

    document.body.style.overflow = "hidden";
    updateBodyPadding();

    window.addEventListener("resize", updateBodyPadding);

    return () => {
      window.removeEventListener("resize", updateBodyPadding);
      resetBodyStyles();
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold tracking-tight font-display">Priyank</h1>
            
            {/* Desktop Navigation (with icons) */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon as any;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm ${
                      activeSection === item.id
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    } flex items-center gap-2`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - covers everything */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Mobile Menu Panel - slides in from right */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-[70] bg-background border-l border-border shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-semibold">Menu</h2>
          <Button variant="ghost" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4 space-y-2 overflow-y-auto h-[calc(100%-4rem)]">
          {navItems.map((item) => {
            const Icon = item.icon as any;
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`w-full justify-start gap-3 ${
                  activeSection === item.id ? "text-foreground font-medium bg-muted" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            );
          })}
        </div>
      </aside>

      {/* Back to top button */}
      {showUp && (
        <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
            className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-foreground text-background shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <span className="sr-only">Back to top</span>
            <ChevronUp className="h-6 w-6" />

            {/* subtle pulse indicator */}
            <span aria-hidden className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 bg-foreground/10 transition-opacity" />
          </button>
        </div>
      )}
    </>
  );
};