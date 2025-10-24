import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showBackButton?: boolean;
  backTo?: string;
  title?: string;
}

export default function Header({ showBackButton = false, backTo = "/", title }: HeaderProps) {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <Link href={backTo}>
              <Button variant="ghost" size="icon" data-testid="button-back">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-bold hover-elevate rounded-md px-2 -mx-2 py-1 cursor-pointer" data-testid="text-app-title">
              Women's Health Education
            </h1>
          </Link>
        </div>
        {title && (
          <div className="text-sm md:text-base font-medium text-muted-foreground" data-testid="text-page-title">
            {title}
          </div>
        )}
        {!title && !showBackButton && (
          <Link href="/">
            <Button variant="ghost" size="icon" data-testid="button-home">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
