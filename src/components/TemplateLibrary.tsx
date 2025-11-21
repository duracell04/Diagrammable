import { Database, Boxes, Network, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const DiagramPreview = ({ type }: { type: string }) => {
  if (type === "database-normalize") {
    return (
      <svg viewBox="0 0 320 160" className="w-full h-auto">
        <defs>
          <marker id="arrow-norm" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
          </marker>
          <filter id="shadow-norm">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
          </filter>
          <linearGradient id="tableGrad-norm" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary-light))" />
            <stop offset="100%" stopColor="hsl(var(--background))" />
          </linearGradient>
        </defs>
        
        <g filter="url(#shadow-norm)">
          <rect x="15" y="15" width="110" height="75" fill="url(#tableGrad-norm)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
          <rect x="15" y="15" width="110" height="28" fill="hsl(var(--primary))" rx="8" />
          <text x="70" y="34" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Customers</text>
          <text x="23" y="58" fontSize="10" fill="hsl(var(--foreground))" fontWeight="500">🔑 customer_id</text>
          <text x="23" y="72" fontSize="10" fill="hsl(var(--muted-foreground))">   name</text>
          <text x="23" y="86" fontSize="10" fill="hsl(var(--muted-foreground))">   email</text>
        </g>
        
        <g filter="url(#shadow-norm)">
          <rect x="195" y="15" width="110" height="75" fill="url(#tableGrad-norm)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
          <rect x="195" y="15" width="110" height="28" fill="hsl(var(--primary))" rx="8" />
          <text x="250" y="34" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Orders</text>
          <text x="203" y="58" fontSize="10" fill="hsl(var(--foreground))" fontWeight="500">🔑 order_id</text>
          <text x="203" y="72" fontSize="10" fill="hsl(var(--muted-foreground))">🔗 customer_id</text>
          <text x="203" y="86" fontSize="10" fill="hsl(var(--muted-foreground))">   total</text>
        </g>
        
        <circle cx="138" cy="52" r="8" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
        <text x="138" y="56" fontSize="10" fontWeight="700" fill="hsl(var(--primary))" textAnchor="middle">1</text>
        
        <circle cx="182" cy="52" r="8" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
        <text x="182" y="56" fontSize="10" fontWeight="700" fill="hsl(var(--primary))" textAnchor="middle">N</text>
        
        <line x1="148" y1="52" x2="168" y2="52" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-norm)" />
      </svg>
    );
  }
  
  if (type === "systems-cache") {
    return (
      <svg viewBox="0 0 280 120" className="w-full h-auto">
        <defs>
          <marker id="arrow-cache" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
          </marker>
          <marker id="arrow-cache-back" markerWidth="6" markerHeight="6" refX="1" refY="2" orient="auto">
            <polygon points="6 0, 0 2, 6 4" fill="hsl(var(--primary))" />
          </marker>
          <filter id="shadow-cache">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
          </filter>
          <linearGradient id="primaryGrad-cache" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-light))" />
          </linearGradient>
          <linearGradient id="secondaryGrad-cache" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary-light))" />
          </linearGradient>
        </defs>
        
        <line x1="75" y1="60" x2="95" y2="60" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-cache)" markerStart="url(#arrow-cache-back)" />
        <line x1="165" y1="60" x2="185" y2="60" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-cache)" markerStart="url(#arrow-cache-back)" />
        
        <g filter="url(#shadow-cache)">
          <rect x="15" y="35" width="60" height="50" fill="url(#primaryGrad-cache)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="10" />
          <text x="45" y="64" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Client</text>
        </g>
        
        <g filter="url(#shadow-cache)">
          <rect x="95" y="35" width="70" height="50" fill="url(#secondaryGrad-cache)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="10" />
          <text x="130" y="64" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Cache</text>
        </g>
        
        <g filter="url(#shadow-cache)">
          <rect x="185" y="35" width="60" height="50" fill="hsl(var(--muted))" stroke="hsl(var(--muted-foreground))" strokeWidth="2.5" strokeDasharray="4,3" rx="10" opacity="0.7" />
          <text x="215" y="64" fontSize="12" fontWeight="700" fill="hsl(var(--muted-foreground))" textAnchor="middle">DB?</text>
        </g>
      </svg>
    );
  }
  
  if (type === "database-ecommerce") {
    return (
      <svg viewBox="0 0 280 140" className="w-full h-auto">
        <defs>
          <marker id="arrow-ecom" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
          </marker>
          <filter id="shadow-ecom">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
          </filter>
          <linearGradient id="tableGrad-ecom" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary-light))" />
            <stop offset="100%" stopColor="hsl(var(--background))" />
          </linearGradient>
        </defs>
        
        <g filter="url(#shadow-ecom)">
          <rect x="15" y="15" width="75" height="48" fill="url(#tableGrad-ecom)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
          <rect x="15" y="15" width="75" height="22" fill="hsl(var(--primary))" rx="8" />
          <text x="52" y="30" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Products</text>
          <text x="20" y="48" fontSize="8" fill="hsl(var(--foreground))" fontWeight="500">🔑 product_id</text>
          <text x="20" y="58" fontSize="8" fill="hsl(var(--muted-foreground))">   name, price</text>
        </g>
        
        <g filter="url(#shadow-ecom)">
          <rect x="105" y="15" width="75" height="48" fill="url(#tableGrad-ecom)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
          <rect x="105" y="15" width="75" height="22" fill="hsl(var(--primary))" rx="8" />
          <text x="142" y="30" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Orders</text>
          <text x="110" y="48" fontSize="8" fill="hsl(var(--foreground))" fontWeight="500">🔑 order_id</text>
          <text x="110" y="58" fontSize="8" fill="hsl(var(--muted-foreground))">🔗 user_id</text>
        </g>
        
        <g filter="url(#shadow-ecom)">
          <rect x="195" y="15" width="70" height="48" fill="url(#tableGrad-ecom)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
          <rect x="195" y="15" width="70" height="22" fill="hsl(var(--primary))" rx="8" />
          <text x="230" y="30" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Users</text>
          <text x="200" y="48" fontSize="8" fill="hsl(var(--foreground))" fontWeight="500">🔑 user_id</text>
          <text x="200" y="58" fontSize="8" fill="hsl(var(--muted-foreground))">   email</text>
        </g>
        
        <line x1="180" y1="39" x2="195" y2="39" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-ecom)" />
        
        <text x="140" y="90" fontSize="10" fill="hsl(var(--muted-foreground))" textAnchor="middle" fontStyle="italic">+ Order_Items junction table</text>
      </svg>
    );
  }
  
  if (type === "systems-microservices") {
    return (
      <svg viewBox="0 0 240 120" className="w-full h-auto">
        <defs>
          <marker id="arrow-micro" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
          </marker>
          <filter id="shadow-micro">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
          </filter>
          <linearGradient id="primaryGrad-micro" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-light))" />
          </linearGradient>
          <linearGradient id="secondaryGrad-micro" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary-light))" />
          </linearGradient>
        </defs>
        
        <line x1="100" y1="50" x2="40" y2="68" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrow-micro)" />
        <line x1="120" y1="50" x2="100" y2="68" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrow-micro)" />
        <line x1="140" y1="50" x2="160" y2="68" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrow-micro)" />
        
        <g filter="url(#shadow-micro)">
          <rect x="80" y="15" width="80" height="35" fill="url(#primaryGrad-micro)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="10" />
          <text x="120" y="36" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Gateway</text>
        </g>
        
        <g filter="url(#shadow-micro)">
          <rect x="10" y="68" width="60" height="35" fill="url(#secondaryGrad-micro)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="10" />
          <text x="40" y="89" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Auth</text>
        </g>
        
        <g filter="url(#shadow-micro)">
          <rect x="80" y="68" width="60" height="35" fill="url(#secondaryGrad-micro)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="10" />
          <text x="110" y="89" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Orders</text>
        </g>
        
        <g filter="url(#shadow-micro)">
          <rect x="150" y="68" width="70" height="35" fill="url(#secondaryGrad-micro)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="10" />
          <text x="185" y="89" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Payment</text>
        </g>
      </svg>
    );
  }
  
  if (type === "systems-auth") {
    return (
      <svg viewBox="0 0 300 100" className="w-full h-auto">
        <defs>
          <marker id="arrow-auth" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
          </marker>
          <filter id="shadow-auth">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
          </filter>
          <linearGradient id="primaryGrad-auth" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-light))" />
          </linearGradient>
          <linearGradient id="secondaryGrad-auth" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary-light))" />
          </linearGradient>
        </defs>
        
        <line x1="65" y1="50" x2="85" y2="50" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-auth)" />
        <line x1="135" y1="50" x2="155" y2="50" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-auth)" />
        <line x1="205" y1="50" x2="225" y2="50" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-auth)" />
        
        <g filter="url(#shadow-auth)">
          <rect x="15" y="25" width="50" height="50" fill="url(#primaryGrad-auth)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="10" />
          <text x="40" y="54" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">User</text>
        </g>
        
        <g filter="url(#shadow-auth)">
          <rect x="85" y="25" width="50" height="50" fill="url(#secondaryGrad-auth)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="10" />
          <text x="110" y="54" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Login</text>
        </g>
        
        <g filter="url(#shadow-auth)">
          <rect x="155" y="25" width="50" height="50" fill="url(#secondaryGrad-auth)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="10" />
          <text x="180" y="54" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Verify</text>
        </g>
        
        <g filter="url(#shadow-auth)">
          <rect x="225" y="25" width="50" height="50" fill="hsl(var(--muted))" stroke="hsl(var(--muted-foreground))" strokeWidth="2.5" strokeDasharray="4,3" rx="10" opacity="0.7" />
          <text x="250" y="54" fontSize="11" fontWeight="700" fill="hsl(var(--muted-foreground))" textAnchor="middle">DB?</text>
        </g>
      </svg>
    );
  }
  
  // Default library database
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto">
      <defs>
        <marker id="arrow-lib" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--secondary))" />
        </marker>
        <filter id="shadow-lib">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
        <linearGradient id="tableGrad-lib" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary-light))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
      </defs>
      
      <line x1="60" y1="58" x2="110" y2="82" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.6" strokeDasharray="4,3" markerEnd="url(#arrow-lib)" />
      <line x1="210" y1="58" x2="160" y2="82" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.6" strokeDasharray="4,3" markerEnd="url(#arrow-lib)" />
      
      <g filter="url(#shadow-lib)">
        <rect x="15" y="20" width="90" height="48" fill="url(#tableGrad-lib)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
        <rect x="15" y="20" width="90" height="22" fill="hsl(var(--primary))" rx="8" />
        <text x="60" y="35" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Books</text>
        <text x="20" y="53" fontSize="8" fill="hsl(var(--foreground))" fontWeight="500">🔑 book_id</text>
        <text x="20" y="63" fontSize="8" fill="hsl(var(--muted-foreground))">   title, author</text>
      </g>
      
      <g filter="url(#shadow-lib)">
        <rect x="175" y="20" width="90" height="48" fill="url(#tableGrad-lib)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
        <rect x="175" y="20" width="90" height="22" fill="hsl(var(--primary))" rx="8" />
        <text x="220" y="35" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Members</text>
        <text x="180" y="53" fontSize="8" fill="hsl(var(--foreground))" fontWeight="500">🔑 member_id</text>
        <text x="180" y="63" fontSize="8" fill="hsl(var(--muted-foreground))">   name</text>
      </g>
      
      <g filter="url(#shadow-lib)">
        <rect x="85" y="82" width="110" height="40" fill="hsl(var(--muted))" stroke="hsl(var(--secondary))" strokeWidth="2.5" strokeDasharray="4,3" rx="8" opacity="0.7" />
        <rect x="85" y="82" width="110" height="18" fill="hsl(var(--secondary))" rx="8" opacity="0.7" />
        <text x="140" y="95" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Loans</text>
        <text x="90" y="113" fontSize="8" fill="hsl(var(--muted-foreground))">🔗 book_id, member_id</text>
      </g>
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
