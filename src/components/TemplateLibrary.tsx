import { Database, Boxes, Network, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const TemplateLibrary = () => {
  const templates = [
    { 
      name: "Normalize Customer/Orders Schema", 
      category: "Databases", 
      level: "Intermediate",
      icon: Database,
      color: "bg-primary-light text-primary"
    },
    { 
      name: "Add Caching Layer", 
      category: "Systems", 
      level: "Advanced",
      icon: Network,
      color: "bg-secondary-light text-secondary"
    },
    { 
      name: "Design E-commerce DB", 
      category: "Databases", 
      level: "Beginner",
      icon: Database,
      color: "bg-primary-light text-primary"
    },
    { 
      name: "Microservices Architecture", 
      category: "Systems", 
      level: "Advanced",
      icon: Boxes,
      color: "bg-secondary-light text-secondary"
    },
    { 
      name: "User Authentication Flow", 
      category: "Systems", 
      level: "Intermediate",
      icon: Lock,
      color: "bg-secondary-light text-secondary"
    },
    { 
      name: "Library Management DB", 
      category: "Databases", 
      level: "Beginner",
      icon: Database,
      color: "bg-primary-light text-primary"
    },
  ];

  return (
    <section id="classroom" className="bg-muted py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Module 1: Template Library / Curriculum Pack v1
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Start from ready-made diagram templates.
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick from database and systems templates like "Normalize this customer/orders schema" or 
            "Add a caching layer." No blank editors. No starting from scratch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <Card 
              key={i}
              className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl hover:scale-105 hover:border-primary"
            >
              <div className="p-6">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${template.color}`}>
                  <template.icon className="h-6 w-6" />
                </div>
                
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {template.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {template.level}
                  </Badge>
                </div>

                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                  {template.name}
                </h3>

                <div className="mt-4 h-20 bg-gradient-to-br from-muted to-background rounded border border-border flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Diagram preview</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">32 templates</span> across databases, 
            systems design, and networking • More added weekly
          </p>
        </div>
      </div>
    </section>
  );
};

export default TemplateLibrary;
