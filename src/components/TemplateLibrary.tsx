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
      <svg viewBox="0 0 320 160" className="w-full h-auto">
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
          <linearGradient id="mutedGrad-cache" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--muted))" />
            <stop offset="100%" stopColor="hsl(var(--background))" />
          </linearGradient>
        </defs>
        
        <line x1="100" y1="80" x2="120" y2="80" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-cache)" markerStart="url(#arrow-cache-back)" />
        <line x1="200" y1="80" x2="220" y2="80" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-cache)" markerStart="url(#arrow-cache-back)" />
        
        <g filter="url(#shadow-cache)">
          <rect x="20" y="50" width="80" height="60" fill="url(#primaryGrad-cache)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="12" />
          <text x="60" y="84" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Client</text>
        </g>
        
        <g filter="url(#shadow-cache)">
          <rect x="120" y="50" width="80" height="60" fill="url(#secondaryGrad-cache)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="12" />
          <text x="160" y="84" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Cache</text>
        </g>
        
        <g filter="url(#shadow-cache)">
          <rect x="220" y="50" width="80" height="60" fill="url(#mutedGrad-cache)" stroke="hsl(var(--muted-foreground))" strokeWidth="2.5" rx="12" />
          <text x="260" y="84" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">DB</text>
        </g>
      </svg>
    );
  }
  
  if (type === "database-ecommerce") {
    return (
      <svg viewBox="0 0 320 180" className="w-full h-auto">
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
          <linearGradient id="linkGrad-ecom" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary-light))" />
            <stop offset="100%" stopColor="hsl(var(--background))" />
          </linearGradient>
        </defs>
        
        <g filter="url(#shadow-ecom)">
          <rect x="15" y="15" width="90" height="61" fill="url(#tableGrad-ecom)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
          <rect x="15" y="15" width="90" height="25" fill="hsl(var(--primary))" rx="8" />
          <text x="60" y="32" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Products</text>
          <text x="23" y="52" fontSize="9" fill="hsl(var(--foreground))" fontWeight="500">🔑 product_id</text>
          <text x="23" y="63" fontSize="9" fill="hsl(var(--muted-foreground))">   name</text>
          <text x="23" y="74" fontSize="9" fill="hsl(var(--muted-foreground))">   price</text>
        </g>
        
        <g filter="url(#shadow-ecom)">
          <rect x="115" y="15" width="90" height="61" fill="url(#tableGrad-ecom)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
          <rect x="115" y="15" width="90" height="25" fill="hsl(var(--primary))" rx="8" />
          <text x="160" y="32" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Orders</text>
          <text x="123" y="52" fontSize="9" fill="hsl(var(--foreground))" fontWeight="500">🔑 order_id</text>
          <text x="123" y="63" fontSize="9" fill="hsl(var(--muted-foreground))">🔗 user_id</text>
        </g>
        
        <g filter="url(#shadow-ecom)">
          <rect x="215" y="15" width="90" height="61" fill="url(#tableGrad-ecom)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
          <rect x="215" y="15" width="90" height="25" fill="hsl(var(--primary))" rx="8" />
          <text x="260" y="32" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Users</text>
          <text x="223" y="52" fontSize="9" fill="hsl(var(--foreground))" fontWeight="500">🔑 user_id</text>
          <text x="223" y="63" fontSize="9" fill="hsl(var(--muted-foreground))">   email</text>
        </g>
        
        <line x1="205" y1="45" x2="215" y2="45" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-ecom)" />
        
        <g filter="url(#shadow-ecom)">
          <rect x="105" y="95" width="110" height="38" fill="url(#linkGrad-ecom)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="8" />
          <rect x="105" y="95" width="110" height="20" fill="hsl(var(--secondary))" rx="8" />
          <text x="160" y="109" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Order_Items</text>
          <text x="113" y="127" fontSize="9" fill="hsl(var(--muted-foreground))">🔗 order_id, product_id</text>
        </g>
        
        <line x1="70" y1="76" x2="140" y2="95" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.6" strokeDasharray="4,3" />
        <line x1="180" y1="76" x2="180" y2="95" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.6" strokeDasharray="4,3" />
      </svg>
    );
  }
  
  if (type === "systems-microservices") {
    return (
      <svg viewBox="0 0 320 140" className="w-full h-auto">
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
        
        <line x1="140" y1="55" x2="52" y2="75" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-micro)" />
        <line x1="160" y1="55" x2="132" y2="75" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-micro)" />
        <line x1="180" y1="55" x2="212" y2="75" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-micro)" />
        
        <g filter="url(#shadow-micro)">
          <rect x="120" y="10" width="80" height="45" fill="url(#primaryGrad-micro)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="12" />
          <text x="160" y="37" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Gateway</text>
        </g>
        
        <g filter="url(#shadow-micro)">
          <rect x="20" y="75" width="65" height="45" fill="url(#secondaryGrad-micro)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="12" />
          <text x="52" y="102" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Auth</text>
        </g>
        
        <g filter="url(#shadow-micro)">
          <rect x="100" y="75" width="65" height="45" fill="url(#secondaryGrad-micro)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="12" />
          <text x="132" y="102" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Orders</text>
        </g>
        
        <g filter="url(#shadow-micro)">
          <rect x="180" y="75" width="65" height="45" fill="url(#secondaryGrad-micro)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="12" />
          <text x="212" y="102" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Payment</text>
        </g>
      </svg>
    );
  }
  
  if (type === "systems-auth") {
    return (
      <svg viewBox="0 0 380 160" className="w-full h-auto">
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
          <linearGradient id="mutedGrad-auth" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--muted))" />
            <stop offset="100%" stopColor="hsl(var(--background))" />
          </linearGradient>
        </defs>
        
        <line x1="90" y1="80" x2="110" y2="80" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-auth)" />
        <line x1="180" y1="80" x2="200" y2="80" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-auth)" />
        <line x1="270" y1="80" x2="290" y2="80" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow-auth)" />
        
        <g filter="url(#shadow-auth)">
          <rect x="20" y="50" width="70" height="60" fill="url(#primaryGrad-auth)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="12" />
          <text x="55" y="84" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">User</text>
        </g>
        
        <g filter="url(#shadow-auth)">
          <rect x="110" y="50" width="70" height="60" fill="url(#secondaryGrad-auth)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="12" />
          <text x="145" y="84" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Login</text>
        </g>
        
        <g filter="url(#shadow-auth)">
          <rect x="200" y="50" width="70" height="60" fill="url(#secondaryGrad-auth)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="12" />
          <text x="235" y="84" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Verify</text>
        </g>
        
        <g filter="url(#shadow-auth)">
          <rect x="290" y="50" width="70" height="60" fill="url(#mutedGrad-auth)" stroke="hsl(var(--muted-foreground))" strokeWidth="2.5" rx="12" />
          <text x="325" y="84" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">DB</text>
        </g>
      </svg>
    );
  }
  
  // Default library database
  return (
    <svg viewBox="0 0 320 180" className="w-full h-auto">
      <defs>
        <marker id="arrow-lib" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
        </marker>
        <filter id="shadow-lib">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
        <linearGradient id="tableGrad-lib" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary-light))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
        <linearGradient id="linkGrad-lib" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--secondary-light))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
      </defs>
      
      <g filter="url(#shadow-lib)">
        <rect x="15" y="15" width="90" height="61" fill="url(#tableGrad-lib)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
        <rect x="15" y="15" width="90" height="25" fill="hsl(var(--primary))" rx="8" />
        <text x="60" y="32" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Books</text>
        <text x="23" y="52" fontSize="9" fill="hsl(var(--foreground))" fontWeight="500">🔑 book_id</text>
        <text x="23" y="63" fontSize="9" fill="hsl(var(--muted-foreground))">   title</text>
        <text x="23" y="74" fontSize="9" fill="hsl(var(--muted-foreground))">   author</text>
      </g>
      
      <g filter="url(#shadow-lib)">
        <rect x="215" y="15" width="90" height="61" fill="url(#tableGrad-lib)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
        <rect x="215" y="15" width="90" height="25" fill="hsl(var(--primary))" rx="8" />
        <text x="260" y="32" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Members</text>
        <text x="223" y="52" fontSize="9" fill="hsl(var(--foreground))" fontWeight="500">🔑 member_id</text>
        <text x="223" y="63" fontSize="9" fill="hsl(var(--muted-foreground))">   name</text>
      </g>
      
      <g filter="url(#shadow-lib)">
        <rect x="105" y="95" width="110" height="50" fill="url(#linkGrad-lib)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="8" />
        <rect x="105" y="95" width="110" height="20" fill="hsl(var(--secondary))" rx="8" />
        <text x="160" y="109" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Loans</text>
        <text x="113" y="127" fontSize="9" fill="hsl(var(--foreground))" fontWeight="500">🔑 loan_id</text>
        <text x="113" y="139" fontSize="9" fill="hsl(var(--muted-foreground))">🔗 book_id, member_id</text>
      </g>
      
      <line x1="70" y1="76" x2="140" y2="95" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.6" strokeDasharray="4,3" />
      <line x1="250" y1="76" x2="180" y2="95" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.6" strokeDasharray="4,3" />
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
