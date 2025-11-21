import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-in">
            <div className="mb-4 inline-block rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
              For CS, IT and system-design courses
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Grade diagrams, not file uploads.
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground max-w-xl">
              LivingCanvas turns schema and system-design tasks into interactive assignments inside Moodle and WordPress LMS. 
              Students complete diagrams in the browser; you review every submission from one dashboard and cut grading time in half.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start free 30-day trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-secondary" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Play with demo assignment
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • Moodle, LearnDash, TutorLMS, LifterLMS
            </p>
          </div>

          {/* Right: Visual Mock */}
          <div className="animate-slide-in">
            <div className="relative rounded-xl border border-border bg-card p-6 shadow-2xl">
              <div className="absolute -top-3 left-4 rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                LivingCanvas Assignment
              </div>
              
              {/* LMS Interface Mock */}
              <div className="rounded-lg border border-border bg-muted/30 p-4 mb-4">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                      LC
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Database Schema Assignment</div>
                      <div className="text-xs text-muted-foreground">CS 201 • Due Mar 15, 2025</div>
                    </div>
                  </div>
                  <Badge className="bg-primary">Active</Badge>
                </div>
                
                {/* Diagram Preview */}
                <div className="bg-gradient-to-br from-background to-muted rounded-lg p-6 border border-border">
                  <svg viewBox="0 0 320 160" className="w-full h-auto">
                    <defs>
                      <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
                      </marker>
                      <filter id="shadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
                      </filter>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <linearGradient id="tableGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary-light))" />
                        <stop offset="100%" stopColor="hsl(var(--background))" />
                      </linearGradient>
                      <linearGradient id="linkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--secondary-light))" />
                        <stop offset="100%" stopColor="hsl(var(--background))" />
                      </linearGradient>
                    </defs>
                    
                    <style>{`
                      @keyframes fadeInScale {
                        from {
                          opacity: 0;
                          transform: scale(0.8);
                        }
                        to {
                          opacity: 1;
                          transform: scale(1);
                        }
                      }
                      @keyframes drawLine {
                        from {
                          stroke-dashoffset: 100;
                        }
                        to {
                          stroke-dashoffset: 0;
                        }
                      }
                      @keyframes pulse {
                        0%, 100% {
                          opacity: 0.9;
                        }
                        50% {
                          opacity: 1;
                          filter: url(#glow);
                        }
                      }
                      @keyframes float {
                        0%, 100% {
                          transform: translateY(0px);
                        }
                        50% {
                          transform: translateY(-4px);
                        }
                      }
                      .table-1 {
                        animation: fadeInScale 0.6s ease-out 0.2s both, float 3s ease-in-out infinite;
                      }
                      .table-2 {
                        animation: fadeInScale 0.6s ease-out 0.4s both, float 3s ease-in-out 0.5s infinite;
                      }
                      .table-3 {
                        animation: fadeInScale 0.6s ease-out 0.6s both, float 3s ease-in-out 1s infinite;
                      }
                      .arrow-main {
                        stroke-dasharray: 100;
                        animation: drawLine 0.8s ease-out 0.8s both;
                      }
                      .connection-line {
                        stroke-dasharray: 100;
                        animation: drawLine 0.8s ease-out 1s both;
                      }
                      .relationship-label {
                        animation: fadeInScale 0.4s ease-out 1.2s both;
                      }
                    `}</style>
                    
                    {/* Customers table */}
                    <g filter="url(#shadow)" className="table-1">
                      <rect x="15" y="15" width="110" height="75" fill="url(#tableGradient)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
                      <rect x="15" y="15" width="110" height="28" fill="hsl(var(--primary))" rx="8" />
                      <path d="M 15 43 Q 15 43, 15 43 L 125 43 Q 125 43, 125 43" fill="none" />
                      <text x="70" y="34" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Customers</text>
                      <text x="23" y="58" fontSize="10" fill="hsl(var(--foreground))" fontWeight="500">🔑 customer_id</text>
                      <text x="23" y="72" fontSize="10" fill="hsl(var(--muted-foreground))">   name</text>
                      <text x="23" y="86" fontSize="10" fill="hsl(var(--muted-foreground))">   email</text>
                    </g>
                    
                    {/* Orders table */}
                    <g filter="url(#shadow)" className="table-2">
                      <rect x="195" y="15" width="110" height="75" fill="url(#tableGradient)" stroke="hsl(var(--primary))" strokeWidth="2.5" rx="8" />
                      <rect x="195" y="15" width="110" height="28" fill="hsl(var(--primary))" rx="8" />
                      <text x="250" y="34" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">Orders</text>
                      <text x="203" y="58" fontSize="10" fill="hsl(var(--foreground))" fontWeight="500">🔑 order_id</text>
                      <text x="203" y="72" fontSize="10" fill="hsl(var(--muted-foreground))">🔗 customer_id</text>
                      <text x="203" y="86" fontSize="10" fill="hsl(var(--muted-foreground))">   total</text>
                    </g>
                    
                    {/* Cardinality labels */}
                    <g className="relationship-label">
                      <circle cx="138" cy="52" r="8" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
                      <text x="138" y="56" fontSize="10" fontWeight="700" fill="hsl(var(--primary))" textAnchor="middle">1</text>
                      
                      <circle cx="182" cy="52" r="8" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
                      <text x="182" y="56" fontSize="10" fontWeight="700" fill="hsl(var(--primary))" textAnchor="middle">N</text>
                    </g>
                    
                    {/* Relationship arrow - thin arrow between badges */}
                    <line x1="148" y1="52" x2="172" y2="52" stroke="hsl(var(--primary))" strokeWidth="2.5" markerEnd="url(#arrow)" className="arrow-main" />
                    
                    {/* Order_Items table */}
                    <g filter="url(#shadow)" className="table-3">
                      <rect x="105" y="115" width="110" height="38" fill="url(#linkGradient)" stroke="hsl(var(--secondary))" strokeWidth="2.5" rx="8" />
                      <rect x="105" y="115" width="110" height="20" fill="hsl(var(--secondary))" rx="8" />
                      <text x="160" y="129" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Order_Items</text>
                      <text x="113" y="147" fontSize="9" fill="hsl(var(--muted-foreground))">🔗 order_id, product_id</text>
                    </g>
                    
                    {/* Connection lines */}
                    <line x1="70" y1="90" x2="140" y2="115" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.6" strokeDasharray="4,3" className="connection-line" />
                    <line x1="250" y1="90" x2="180" y2="115" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.6" strokeDasharray="4,3" className="connection-line" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Normalize Customer/Orders Schema</span>
                <Badge variant="outline" className="bg-primary-light text-primary border-primary">
                  80 submissions
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
