import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Database, Network, GitBranch } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TemplateLibrary = () => {
  const templates = [
    {
      icon: Database,
      title: "E-commerce Database",
      description: "Customer orders, products, and inventory relationships",
      difficulty: "Intermediate"
    },
    {
      icon: Network,
      title: "Social Network Schema",
      description: "Users, posts, comments, and friendship relationships",
      difficulty: "Advanced"
    },
    {
      icon: GitBranch,
      title: "University System",
      description: "Students, courses, enrollments, and departments",
      difficulty: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Template Library</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Ready-to-use diagram templates for common database scenarios. Coming soon!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <template.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                <p className="text-muted-foreground mb-4">{template.description}</p>
                <span className="text-sm text-primary font-medium">{template.difficulty}</span>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-lg bg-muted/50">
            <p className="text-muted-foreground mb-4">
              This feature is currently in development. Check back soon for a full library of templates!
            </p>
            <Button asChild>
              <Link href="/waitlist">Join Waitlist for Updates</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TemplateLibrary;
