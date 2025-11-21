import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, MessageCircle, Book, Video } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Support = () => {
  const supportOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "Contact us"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start chat"
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      action: "View docs",
      link: "/user-manual"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      action: "Watch now"
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Support Center</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get the help you need to make the most of Diagrammable
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {supportOptions.map((option, idx) => (
              <Card key={idx} className="p-6">
                <option.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <Button variant="outline" asChild={!!option.link}>
                  {option.link ? (
                    <Link href={option.link}>{option.action}</Link>
                  ) : (
                    <span>{option.action}</span>
                  )}
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center p-8 rounded-lg bg-muted/50">
            <h2 className="text-2xl font-bold mb-4">Need immediate assistance?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you succeed with Diagrammable
            </p>
            <Button size="lg" asChild>
              <Link href="/waitlist">Contact Support Team</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
