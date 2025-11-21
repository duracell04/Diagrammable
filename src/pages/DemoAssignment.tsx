import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Clock, CheckCircle2, Users, ArrowLeft } from "lucide-react";

const DiagramPreview = () => {
  return (
    <svg viewBox="0 0 260 120" preserveAspectRatio="xMidYMid meet" className="max-w-full max-h-full">
      <defs>
        <marker id="arrow-norm" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
        </marker>
        <filter id="shadow-norm">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.10"/>
        </filter>
        <linearGradient id="tableGrad-norm" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary-light))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
      </defs>
      
      <g transform="translate(130, 60) scale(0.82) translate(-160, -52)">
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
      </g>
    </svg>
  );
};

const DemoAssignment = () => {
  return (
    <main className="min-h-screen bg-muted py-16">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Header */}
        <header className="mb-10 space-y-4">
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Database className="h-4 w-4" />
            Live demo assignment · Databases · Intermediate
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            See a LivingCanvas assignment from the instructor's view.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            This demo shows exactly what a CS instructor sees when they assign a
            database-normalisation task. Students complete the schema diagram in
            the browser; you review every submission from a single dashboard.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg">
              Open interactive demo
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/#classroom">
                Back to template library
              </Link>
            </Button>
          </div>
        </header>

        {/* Main layout: assignment card + sidebar */}
        <section className="grid gap-8 lg:grid-cols-[2fr,1.4fr]">
          {/* Assignment card */}
          <Card className="overflow-hidden border-border bg-background shadow-sm">
            <div className="border-b border-border bg-muted/50 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <Badge variant="outline">Databases</Badge>
                    <Badge variant="secondary">Intermediate</Badge>
                    <span className="text-muted-foreground">CS 201</span>
                  </div>
                  <h2 className="mt-1 text-sm font-semibold">
                    Database Schema Assignment
                  </h2>
                </div>
              </div>

              <Badge className="bg-emerald-500 text-xs text-white">
                Active
              </Badge>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Due Mar 15, 2025 · 23:59</span>
                <span>80 submissions · 2 late</span>
              </div>

              <Card className="border border-border bg-background px-4 py-3">
                <p className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Student task
                </p>

                <h3 className="mb-2 text-sm font-semibold">
                  Normalize the Customer / Orders schema
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Convert this denormalised customer/orders structure into a
                  properly normalised design using a junction table. Add missing
                  keys and fix the 1:N relationship.
                </p>

                <div className="rounded border border-border bg-muted/40 px-3 py-2 flex items-center justify-center overflow-hidden h-32">
                  <DiagramPreview />
                </div>
              </Card>

              <div className="rounded-md bg-muted/60 px-4 py-3 text-xs text-muted-foreground">
                <p className="mb-1 font-medium text-foreground">
                  What you'd see as the instructor
                </p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Each student gets their own copy of this schema.</li>
                  <li>You see all 80 diagrams in a single dashboard.</li>
                  <li>Click to open, comment, and assign a grade.</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Sidebar: sample dashboard & metrics */}
          <div className="space-y-4">
            {/* Submissions summary */}
            <Card className="border-border bg-background">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Submission overview</span>
                </div>
                <Badge variant="outline" className="text-[10px]">
                  Demo data
                </Badge>
              </div>
              <div className="px-4 py-3 text-xs text-muted-foreground space-y-2">
                <div className="flex items-center justify-between">
                  <span>Students enrolled</span>
                  <span className="font-medium text-foreground">80</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Submitted on time</span>
                  <span className="font-medium text-emerald-600">78</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Median time spent</span>
                  <span className="font-medium text-foreground">14 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Flagged as "very similar"</span>
                  <span className="font-medium text-amber-600">3</span>
                </div>
              </div>
            </Card>

            {/* Sample rows from grading table */}
            <Card className="border-border bg-background">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Sample submissions</span>
                </div>
              </div>
              <div className="divide-y divide-border text-xs">
                {[
                  {
                    name: "Alex Müller",
                    status: "Graded",
                    grade: "9 / 10",
                    time: "16 min"
                  },
                  {
                    name: "Sara K.",
                    status: "Needs review",
                    grade: "—",
                    time: "5 min"
                  },
                  {
                    name: "Dev Patel",
                    status: "Graded",
                    grade: "10 / 10",
                    time: "19 min"
                  }
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-4 py-3"
                  >
                    <div>
                      <p className="font-medium text-foreground">{s.name}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {s.status} • {s.time} in editor
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-primary">
                      {s.grade}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* "How this demo works" */}
            <Card className="border-dashed border-border bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
              <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-foreground">
                <Clock className="h-3 w-3" />
                <span>What happens when you click "Open interactive demo"</span>
              </div>
              <ol className="list-decimal space-y-1 pl-4">
                <li>A demo class with 10 fake students is created.</li>
                <li>You see the same dashboard our real customers use.</li>
                <li>No signup required; nothing you do here is permanent.</li>
              </ol>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DemoAssignment;
