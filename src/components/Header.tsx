import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
          <span className="text-xl font-bold">LivingCanvas</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#classroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Classroom
          </a>
          <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link href="/waitlist">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
