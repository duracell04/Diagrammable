import { Database, Boxes, Network, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const DiagramPreview = ({ type }: { type: string }) => {
  if (type === "database-normalize") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Customers table */}
        <rect x="10" y="10" width="80" height="50" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="2" rx="4" />
        <text x="50" y="25" fontSize="10" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Customers</text>
        <text x="15" y="38" fontSize="7" fill="hsl(var(--muted-foreground))">• customer_id</text>
        <text x="15" y="48" fontSize="7" fill="hsl(var(--muted-foreground))">• name</text>
        <text x="15" y="58" fontSize="7" fill="hsl(var(--muted-foreground))">• email</text>
        
        {/* Orders table */}
        <rect x="110" y="10" width="80" height="50" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="2" rx="4" />
        <text x="150" y="25" fontSize="10" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Orders</text>
        <text x="115" y="38" fontSize="7" fill="hsl(var(--muted-foreground))">• order_id</text>
        <text x="115" y="48" fontSize="7" fill="hsl(var(--muted-foreground))">• customer_id</text>
        <text x="115" y="58" fontSize="7" fill="hsl(var(--muted-foreground))">• total</text>
        
        {/* Relationship arrow */}
        <line x1="90" y1="35" x2="110" y2="35" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
          </marker>
        </defs>
      </svg>
    );
  }
  
  if (type === "systems-cache") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Client */}
        <rect x="10" y="45" width="40" height="30" fill="hsl(var(--secondary-light))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="4" />
        <text x="30" y="63" fontSize="9" fontWeight="600" fill="hsl(var(--secondary))" textAnchor="middle">Client</text>
        
        {/* Cache layer */}
        <rect x="80" y="15" width="40" height="30" fill="hsl(var(--accent-light))" stroke="hsl(var(--accent))" strokeWidth="2" rx="4" />
        <text x="100" y="33" fontSize="9" fontWeight="600" fill="hsl(var(--accent-foreground))" textAnchor="middle">Cache</text>
        
        {/* Database */}
        <rect x="150" y="45" width="40" height="30" fill="hsl(var(--secondary-light))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="4" />
        <text x="170" y="63" fontSize="9" fontWeight="600" fill="hsl(var(--secondary))" textAnchor="middle">DB</text>
        
        {/* Arrows */}
        <line x1="50" y1="60" x2="80" y2="35" stroke="hsl(var(--secondary))" strokeWidth="2" />
        <line x1="120" y1="35" x2="150" y2="60" stroke="hsl(var(--secondary))" strokeWidth="2" />
      </svg>
    );
  }
  
  if (type === "database-ecommerce") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Products */}
        <rect x="10" y="10" width="55" height="40" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="3" />
        <text x="37" y="23" fontSize="8" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Products</text>
        <text x="13" y="33" fontSize="6" fill="hsl(var(--muted-foreground))">• product_id</text>
        <text x="13" y="40" fontSize="6" fill="hsl(var(--muted-foreground))">• name</text>
        <text x="13" y="47" fontSize="6" fill="hsl(var(--muted-foreground))">• price</text>
        
        {/* Orders */}
        <rect x="135" y="10" width="55" height="40" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="3" />
        <text x="162" y="23" fontSize="8" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Orders</text>
        <text x="138" y="33" fontSize="6" fill="hsl(var(--muted-foreground))">• order_id</text>
        <text x="138" y="40" fontSize="6" fill="hsl(var(--muted-foreground))">• user_id</text>
        
        {/* Users */}
        <rect x="72" y="70" width="55" height="40" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="3" />
        <text x="99" y="83" fontSize="8" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Users</text>
        <text x="75" y="93" fontSize="6" fill="hsl(var(--muted-foreground))">• user_id</text>
        <text x="75" y="100" fontSize="6" fill="hsl(var(--muted-foreground))">• email</text>
        
        {/* Arrows */}
        <line x1="65" y1="30" x2="135" y2="30" stroke="hsl(var(--primary))" strokeWidth="1.5" />
        <line x1="99" y1="70" x2="162" y2="50" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      </svg>
    );
  }
  
  if (type === "systems-microservices") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Gateway */}
        <rect x="75" y="5" width="50" height="25" fill="hsl(var(--secondary-light))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="4" />
        <text x="100" y="21" fontSize="9" fontWeight="600" fill="hsl(var(--secondary))" textAnchor="middle">Gateway</text>
        
        {/* Service 1 */}
        <rect x="10" y="50" width="50" height="25" fill="hsl(var(--secondary-light))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="4" />
        <text x="35" y="66" fontSize="8" fontWeight="600" fill="hsl(var(--secondary))" textAnchor="middle">Auth</text>
        
        {/* Service 2 */}
        <rect x="75" y="50" width="50" height="25" fill="hsl(var(--secondary-light))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="4" />
        <text x="100" y="66" fontSize="8" fontWeight="600" fill="hsl(var(--secondary))" textAnchor="middle">Orders</text>
        
        {/* Service 3 */}
        <rect x="140" y="50" width="50" height="25" fill="hsl(var(--secondary-light))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="4" />
        <text x="165" y="66" fontSize="8" fontWeight="600" fill="hsl(var(--secondary))" textAnchor="middle">Payment</text>
        
        {/* Arrows */}
        <line x1="88" y1="30" x2="35" y2="50" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
        <line x1="100" y1="30" x2="100" y2="50" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
        <line x1="112" y1="30" x2="165" y2="50" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
      </svg>
    );
  }
  
  if (type === "systems-auth") {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* User */}
        <rect x="10" y="45" width="45" height="30" fill="hsl(var(--secondary-light))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="4" />
        <text x="32" y="63" fontSize="9" fontWeight="600" fill="hsl(var(--secondary))" textAnchor="middle">User</text>
        
        {/* Login */}
        <rect x="77" y="20" width="45" height="30" fill="hsl(var(--accent-light))" stroke="hsl(var(--accent))" strokeWidth="2" rx="4" />
        <text x="99" y="38" fontSize="9" fontWeight="600" fill="hsl(var(--accent-foreground))" textAnchor="middle">Login</text>
        
        {/* Verify */}
        <rect x="77" y="70" width="45" height="30" fill="hsl(var(--accent-light))" stroke="hsl(var(--accent))" strokeWidth="2" rx="4" />
        <text x="99" y="88" fontSize="9" fontWeight="600" fill="hsl(var(--accent-foreground))" textAnchor="middle">Verify</text>
        
        {/* DB */}
        <rect x="145" y="45" width="45" height="30" fill="hsl(var(--secondary-light))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="4" />
        <text x="167" y="63" fontSize="9" fontWeight="600" fill="hsl(var(--secondary))" textAnchor="middle">DB</text>
        
        {/* Arrows */}
        <line x1="55" y1="55" x2="77" y2="40" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
        <line x1="122" y1="35" x2="145" y2="55" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
        <line x1="122" y1="85" x2="145" y2="65" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
      </svg>
    );
  }
  
  // Default library database
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {/* Books table */}
      <rect x="10" y="15" width="70" height="45" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="2" rx="4" />
      <text x="45" y="30" fontSize="9" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Books</text>
      <text x="15" y="41" fontSize="7" fill="hsl(var(--muted-foreground))">• book_id</text>
      <text x="15" y="49" fontSize="7" fill="hsl(var(--muted-foreground))">• title</text>
      <text x="15" y="57" fontSize="7" fill="hsl(var(--muted-foreground))">• author</text>
      
      {/* Members table */}
      <rect x="120" y="15" width="70" height="45" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="2" rx="4" />
      <text x="155" y="30" fontSize="9" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Members</text>
      <text x="125" y="41" fontSize="7" fill="hsl(var(--muted-foreground))">• member_id</text>
      <text x="125" y="49" fontSize="7" fill="hsl(var(--muted-foreground))">• name</text>
      
      {/* Loans table */}
      <rect x="60" y="75" width="80" height="35" fill="hsl(var(--primary-light))" stroke="hsl(var(--primary))" strokeWidth="2" rx="4" />
      <text x="100" y="88" fontSize="9" fontWeight="600" fill="hsl(var(--primary))" textAnchor="middle">Loans</text>
      <text x="65" y="99" fontSize="7" fill="hsl(var(--muted-foreground))">• loan_id</text>
      <text x="65" y="107" fontSize="7" fill="hsl(var(--muted-foreground))">• book_id, member_id</text>
      
      {/* Arrows */}
      <line x1="45" y1="60" x2="85" y2="75" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="155" y1="60" x2="115" y2="75" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    </svg>
  );
};

const TemplateLibrary = () => {
  const templates = [
    { 
      name: "Normalize Customer/Orders Schema", 
      category: "Databases", 
      level: "Intermediate",
      icon: Database,
      color: "bg-primary-light text-primary",
      previewType: "database-normalize"
    },
    { 
      name: "Add Caching Layer", 
      category: "Systems", 
      level: "Advanced",
      icon: Network,
      color: "bg-secondary-light text-secondary",
      previewType: "systems-cache"
    },
    { 
      name: "Design E-commerce DB", 
      category: "Databases", 
      level: "Beginner",
      icon: Database,
      color: "bg-primary-light text-primary",
      previewType: "database-ecommerce"
    },
    { 
      name: "Microservices Architecture", 
      category: "Systems", 
      level: "Advanced",
      icon: Boxes,
      color: "bg-secondary-light text-secondary",
      previewType: "systems-microservices"
    },
    { 
      name: "User Authentication Flow", 
      category: "Systems", 
      level: "Intermediate",
      icon: Lock,
      color: "bg-secondary-light text-secondary",
      previewType: "systems-auth"
    },
    { 
      name: "Library Management DB", 
      category: "Databases", 
      level: "Beginner",
      icon: Database,
      color: "bg-primary-light text-primary",
      previewType: "database-library"
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

                <h3 className="font-semibold text-sm mb-3 group-hover:text-primary transition-colors">
                  {template.name}
                </h3>

                <div className="h-24 bg-background rounded border border-border p-2 group-hover:border-primary/50 transition-colors">
                  <DiagramPreview type={template.previewType} />
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
