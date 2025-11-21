import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Users, Database, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const features = [
    { icon: Database, text: "Unlimited diagram assignments" },
    { icon: Users, text: "Unlimited students and classes" },
    { icon: Shield, text: "Advanced integrity monitoring" },
    { icon: Zap, text: "Real-time collaboration" },
    { text: "Interactive template library" },
    { text: "AI-powered grading assistance" },
    { text: "Export to PNG, SVG, and CSV" },
    { text: "Priority email support" },
    { text: "LMS integration (Canvas, Moodle)" },
    { text: "Custom branding options" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 text-sm px-4 py-2" variant="default">
            <Sparkles className="mr-2 h-4 w-4" />
            Limited Time Offer
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            100% Free for All of 2026
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Get unlimited access to Diagrammable for the entire year.
          </p>
          <p className="text-lg text-muted-foreground">
            No credit card required. No hidden fees. Just education.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="relative overflow-hidden border-2 border-primary shadow-xl">
            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Full Access Plan</h2>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-6xl font-bold">$0</span>
                  <span className="text-2xl text-muted-foreground line-through">$299</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <Badge variant="secondary" className="text-sm">
                  Valid through December 31, 2026
                </Badge>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-lg mb-4">Everything included:</h3>
                <div className="grid gap-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        {feature.icon && <feature.icon className="h-4 w-4 text-primary" />}
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full text-lg h-12" asChild>
                  <Link href="/waitlist">
                    Claim Your Free Access
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Join thousands of educators already using Diagrammable
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Why is it free?</h3>
              <p className="text-muted-foreground">
                We're offering free access throughout 2026 to help educators improve database education 
                and gather feedback to make Diagrammable the best tool possible.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Do I need a credit card?</h3>
              <p className="text-muted-foreground">
                No! Simply sign up with your email and start using Diagrammable immediately. 
                No payment information required.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">What happens after 2026?</h3>
              <p className="text-muted-foreground">
                We'll announce pricing for 2027 well in advance. Early adopters who join during 
                the free period will receive special lifetime discount rates.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Are there any limits?</h3>
              <p className="text-muted-foreground">
                None! Create unlimited assignments, add unlimited students, and use all features 
                without any restrictions throughout 2026.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Can I use this for multiple classes?</h3>
              <p className="text-muted-foreground">
                Absolutely! Use Diagrammable for all your database courses, workshops, and tutorials. 
                Perfect for universities, bootcamps, and online courses.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Database Teaching?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join educators worldwide who are making database concepts come alive with interactive diagrams.
          </p>
          <Button size="lg" className="text-lg h-12 px-8" asChild>
            <Link href="/waitlist">
              Get Started Free
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
