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
    <Card className="relative">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-muted-foreground/30 mb-4" />
        <p className="text-muted-foreground italic mb-6">{quote}</p>
        <div className="border-t pt-4">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{position}</p>
          <p className="text-sm text-muted-foreground">{organization}</p>
        </div>
      </CardContent>
    </Card>
  );
};
