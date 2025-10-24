import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Clock, FileText } from "lucide-react";

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  questionCount: number;
  estimatedMinutes: number;
}

export default function TopicCard({
  id,
  title,
  description,
  icon,
  questionCount,
  estimatedMinutes,
}: TopicCardProps) {
  return (
    <Link href={`/quiz/${id}`}>
      <Card className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-transform duration-200 h-full" data-testid={`card-topic-${id}`}>
        <div className="flex flex-col h-full gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0">
            <img src={icon} alt={title} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2" data-testid={`text-topic-title-${id}`}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-topic-description-${id}`}>
              {description}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
            <div className="flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              <span data-testid={`text-question-count-${id}`}>{questionCount} Questions</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span data-testid={`text-estimated-time-${id}`}>~{estimatedMinutes} min</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
