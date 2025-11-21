import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      title: "Why Interactive Diagrams Matter in Database Education",
      excerpt: "Exploring how hands-on learning improves student outcomes in database courses...",
      date: "2025-01-15",
      readTime: "5 min",
      category: "Education"
    },
    {
      title: "Maintaining Academic Integrity in Online Assessments",
      excerpt: "Best practices for ensuring honest work while using digital assignment tools...",
      date: "2025-01-10",
      readTime: "7 min",
      category: "Best Practices"
    },
    {
      title: "Getting Started with ER Diagrams: A Teacher's Guide",
      excerpt: "Step-by-step guide to introducing entity-relationship diagrams to students...",
      date: "2025-01-05",
      readTime: "10 min",
      category: "Tutorial"
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Insights, tutorials, and best practices for database education
          </p>

          <div className="space-y-6">
            {posts.map((post, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="outline">Read More</Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-lg bg-muted/50">
            <p className="text-muted-foreground mb-4">
              More articles coming soon! Subscribe to our newsletter for updates.
            </p>
            <Button asChild>
              <Link href="/waitlist">Subscribe for Updates</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
