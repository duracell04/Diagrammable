import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-b from-muted to-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Try LivingCanvas with your next cohort.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Set up your first diagram assignment in under 15 minutes and see all submissions in one dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="group">
              Start free 30-day trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-secondary" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Play with sample assignment
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Works with your LMS</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Ready in 15 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
