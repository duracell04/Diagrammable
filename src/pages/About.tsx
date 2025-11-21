import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About LivingCanvas
          </h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground mb-6">
              We're on a mission to transform how database concepts are taught and learned in computer science education.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  Make database education interactive, engaging, and accessible to all students
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where every student can visualize and understand complex database relationships
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                <p className="text-muted-foreground">
                  Educators and developers passionate about improving CS education
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">The Story Behind LivingCanvas</h2>
            <p className="text-muted-foreground mb-4">
              LivingCanvas was born from the frustration of teaching database design with static tools. 
              Traditional diagram tools didn't capture student engagement or provide insights into their 
              learning process.
            </p>
            <p className="text-muted-foreground mb-4">
              We built LivingCanvas to bridge this gap—creating a platform where diagrams come alive, 
              academic integrity is maintained, and educators gain real insights into student understanding.
            </p>

            <div className="mt-12 p-8 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
              <p className="text-muted-foreground mb-6">
                We're just getting started. Be part of the future of database education.
              </p>
              <Button size="lg" asChild>
                <Link to="/waitlist">Get Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
