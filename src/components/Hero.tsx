import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroMock from "@/assets/hero-mock.jpg";

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
            <div className="relative rounded-xl border border-border bg-card p-4 shadow-2xl">
              <div className="absolute -top-3 left-4 rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                LivingCanvas Assignment
              </div>
              <img 
                src={heroMock} 
                alt="LivingCanvas assignment interface in LMS"
                className="w-full rounded-lg"
              />
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Database Schema Assignment</span>
                <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary">
                  80 submissions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
