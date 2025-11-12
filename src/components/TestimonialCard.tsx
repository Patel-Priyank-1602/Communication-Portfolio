import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  organization: string;
}

export const TestimonialCard = ({ quote, author, position, organization }: TestimonialCardProps) => {
  return (
    <Card className="relative hover:shadow-lg transition-shadow duration-300 bg-card">
      <CardContent className="pt-8 pb-6">
        <Quote className="h-10 w-10 text-muted-foreground/20 mb-6" />
        <p className="text-muted-foreground italic mb-8 text-base leading-relaxed">"{quote}"</p>
        <div className="border-t pt-5 space-y-1">
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground font-medium">{position}</p>
          <p className="text-sm text-muted-foreground">{organization}</p>
        </div>
      </CardContent>
    </Card>
  );
};
