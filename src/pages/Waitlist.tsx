import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

const Waitlist = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center py-16">
      <div className="container mx-auto max-w-2xl px-6">
        <Card className="p-8 md:p-12 text-center shadow-xl">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Waitlist
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            LivingCanvas Classroom is currently in early access. We're onboarding new instructors and institutions carefully to ensure the best experience.
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              To request early access or get added to the waitlist, please send an email to:
            </p>
            
            <a 
              href="mailto:andro@akallabs.io?subject=LivingCanvas%20Waitlist%20Request"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
            >
              <Mail className="h-5 w-5" />
              andro@akallabs.io
            </a>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-left">We'll respond within 24 hours with next steps</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-left">Priority access for educational institutions</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-left">Free setup assistance for qualifying courses</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:andro@akallabs.io?subject=LivingCanvas%20Waitlist%20Request">
                <Mail className="mr-2 h-4 w-4" />
                Send Waitlist Request
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default Waitlist;
