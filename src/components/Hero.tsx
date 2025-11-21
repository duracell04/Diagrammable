import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-in">
            <div className="mb-4 inline-block rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
              For CS, IT and system-design courses
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Grade diagrams, not file uploads.
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground max-w-xl">
              LivingCanvas turns schema and system-design tasks into interactive assignments inside Moodle and WordPress LMS. 
              Students complete diagrams in the browser; you review every submission from one dashboard and cut grading time in half.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start free 30-day trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-secondary" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Play with demo assignment
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • Moodle, LearnDash, TutorLMS, LifterLMS
            </p>
          </div>

          {/* Right: Visual Mock */}
          <div className="animate-slide-in">
            <div className="relative rounded-xl border border-border bg-card p-6 shadow-2xl">
              <div className="absolute -top-3 left-4 rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                LivingCanvas Assignment
              </div>
              
              {/* LMS Interface Mock */}
              <div className="rounded-lg border border-border bg-muted/30 p-4 mb-4">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                      LC
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Database Schema Assignment</div>
                      <div className="text-xs text-muted-foreground">CS 201 • Due Mar 15, 2025</div>
                    </div>
                  </div>
                  <Badge className="bg-primary">Active</Badge>
                </div>
                
                {/* Diagram Preview */}
                <div className="bg-background rounded-lg p-4 border border-border">
                  <svg viewBox="0 0 300 140" className="w-full h-auto">
                    {/* Customers table */}
                    <rect x="20" y="20" width="100" height="60" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="70" y="40" fontSize="12" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Customers</text>
                    <text x="28" y="55" fontSize="9" fill="hsl(var(--muted-foreground))">• customer_id</text>
                    <text x="28" y="67" fontSize="9" fill="hsl(var(--muted-foreground))">• name</text>
                    <text x="28" y="79" fontSize="9" fill="hsl(var(--muted-foreground))">• email</text>
                    
                    {/* Orders table */}
                    <rect x="180" y="20" width="100" height="60" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="230" y="40" fontSize="12" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Orders</text>
                    <text x="188" y="55" fontSize="9" fill="hsl(var(--muted-foreground))">• order_id</text>
                    <text x="188" y="67" fontSize="9" fill="hsl(var(--muted-foreground))">• customer_id</text>
                    <text x="188" y="79" fontSize="9" fill="hsl(var(--muted-foreground))">• total</text>
                    
                    {/* Relationship arrow */}
                    <line x1="120" y1="50" x2="180" y2="50" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow)" />
                    <defs>
                      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
                      </marker>
                    </defs>
                    
                    {/* Items table */}
                    <rect x="100" y="100" width="100" height="30" fill="hsl(var(--secondary-light))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                    <text x="150" y="120" fontSize="11" fontWeight="600" fill="hsl(var(--secondary))" textAnchor="middle">Order_Items</text>
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Normalize Customer/Orders Schema</span>
                <Badge variant="outline" className="bg-primary-light text-primary border-primary">
                  80 submissions
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
