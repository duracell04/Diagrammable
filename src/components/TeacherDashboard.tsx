import { Download, Eye, MessageSquare, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dashboardMock from "@/assets/dashboard-mock.jpg";

const StudentDiagram = () => {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
    >
      <defs>
        <marker
          id="arrow-teacher"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="2"
          orient="auto"
        >
          <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
        </marker>
        <filter id="shadow-teacher">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="2"
            floodOpacity="0.12"
          />
        </filter>
        <linearGradient id="tableGrad-teacher" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary-light))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
        <linearGradient id="tableGrad-teacher-junction" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--secondary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary-light))" />
        </linearGradient>
      </defs>

      <g transform="translate(160, 90) scale(0.9) translate(-160, -90)">
        {/* Relationships */}
        <line
          x1={95}
          y1={70}
          x2={160}
          y2={70}
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          markerEnd="url(#arrow-teacher)"
        />
        <circle
          cx={110}
          cy={62}
          r={9}
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
        />
        <text
          x={110}
          y={66}
          fontSize={10}
          fontWeight={700}
          fill="hsl(var(--primary))"
          textAnchor="middle"
        >
          1
        </text>
        <circle
          cx={145}
          cy={62}
          r={9}
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
        />
        <text
          x={145}
          y={66}
          fontSize={10}
          fontWeight={700}
          fill="hsl(var(--primary))"
          textAnchor="middle"
        >
          N
        </text>

        <line
          x1={205}
          y1={95}
          x2={205}
          y2={132}
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          markerEnd="url(#arrow-teacher)"
        />
        <circle
          cx={197}
          cy={110}
          r={9}
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
        />
        <text
          x={197}
          y={114}
          fontSize={10}
          fontWeight={700}
          fill="hsl(var(--primary))"
          textAnchor="middle"
        >
          1
        </text>
        <circle
          cx={197}
          cy={129}
          r={9}
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
        />
        <text
          x={197}
          y={133}
          fontSize={10}
          fontWeight={700}
          fill="hsl(var(--primary))"
          textAnchor="middle"
        >
          N
        </text>

        {/* Customers table */}
        <g filter="url(#shadow-teacher)">
          <rect
            x={25}
            y={40}
            width={120}
            height={80}
            fill="url(#tableGrad-teacher)"
            stroke="hsl(var(--primary))"
            strokeWidth={2.5}
            rx={8}
          />
          <rect
            x={25}
            y={40}
            width={120}
            height={30}
            fill="hsl(var(--primary))"
            rx={8}
          />
          <text
            x={85}
            y={59}
            fontSize={13}
            fontWeight={700}
            fill="white"
            textAnchor="middle"
          >
            Customers
          </text>
          <text
            x={32}
            y={80}
            fontSize={10}
            fill="hsl(var(--foreground))"
            fontWeight={500}
          >
            🔑 customer_id
          </text>
          <text
            x={32}
            y={94}
            fontSize={10}
            fill="hsl(var(--muted-foreground))"
          >
            name
          </text>
          <text
            x={32}
            y={108}
            fontSize={10}
            fill="hsl(var(--muted-foreground))"
          >
            email
          </text>
        </g>

        {/* Orders table */}
        <g filter="url(#shadow-teacher)">
          <rect
            x={160}
            y={40}
            width={120}
            height={80}
            fill="url(#tableGrad-teacher)"
            stroke="hsl(var(--primary))"
            strokeWidth={2.5}
            rx={8}
          />
          <rect
            x={160}
            y={40}
            width={120}
            height={30}
            fill="hsl(var(--primary))"
            rx={8}
          />
          <text
            x={220}
            y={59}
            fontSize={13}
            fontWeight={700}
            fill="white"
            textAnchor="middle"
          >
            Orders
          </text>
          <text
            x={168}
            y={80}
            fontSize={10}
            fill="hsl(var(--foreground))"
            fontWeight={500}
          >
            🔑 order_id
          </text>
          <text
            x={168}
            y={94}
            fontSize={10}
            fill="hsl(var(--muted-foreground))"
          >
            🔗 customer_id
          </text>
          <text
            x={168}
            y={108}
            fontSize={10}
            fill="hsl(var(--muted-foreground))"
          >
            total
          </text>
        </g>

        {/* Order_Items junction table */}
        <g filter="url(#shadow-teacher)">
          <rect
            x={120}
            y={120}
            width={150}
            height={50}
            fill="url(#tableGrad-teacher-junction)"
            stroke="hsl(var(--secondary))"
            strokeWidth={2.5}
            rx={8}
          />
          <rect
            x={120}
            y={120}
            width={150}
            height={22}
            fill="hsl(var(--secondary))"
            rx={8}
          />
          <text
            x={195}
            y={135}
            fontSize={12}
            fontWeight={700}
            fill="white"
            textAnchor="middle"
          >
            Order_Items
          </text>
          <text
            x={127}
            y={152}
            fontSize={10}
            fill="hsl(var(--muted-foreground))"
          >
            🔗 order_id, product_id
          </text>
        </g>
      </g>
    </svg>
  );
};

const TeacherDashboard = () => {
  const submissions = [
    { student: "Maya Chen", status: "Submitted", activity: "2h ago", time: "18m", grade: "—", flag: false },
    { student: "Alex Kumar", status: "Submitted", activity: "5h ago", time: "24m", grade: "95", flag: false },
    { student: "Jordan Lee", status: "In Progress", activity: "1h ago", time: "12m", grade: "—", flag: false },
    { student: "Sam Rivera", status: "Submitted", activity: "3h ago", time: "7s", grade: "—", flag: true },
    { student: "Riley Park", status: "Submitted", activity: "4h ago", time: "31m", grade: "88", flag: false },
  ];

  return (
    <section className="bg-background py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Module 4: Teacher Dashboard
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Review all submissions from one dashboard.
          </h2>
          <p className="text-lg text-muted-foreground">
            See every student diagram for an assignment in a single list. Open, comment, grade, and export CSV/PNGs – 
            no more download/open/annotate/upload loops.
          </p>
        </div>

        {/* Dashboard Table */}
        <div className="rounded-xl border border-border bg-card shadow-xl overflow-hidden mb-8">
          <div className="bg-muted border-b border-border px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Database Schema Assignment</h3>
              <p className="text-sm text-muted-foreground">CS 201 • Due March 15, 2025</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export PNGs (ZIP)
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Last Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Time Spent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Grade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {submissions.map((sub, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                          {sub.student.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium">{sub.student}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant={sub.status === "Submitted" ? "default" : "secondary"}
                        className={sub.status === "Submitted" ? "bg-primary" : ""}
                      >
                        {sub.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{sub.activity}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{sub.time}</span>
                        {sub.flag && (
                          <div className="group relative">
                            <AlertCircle className="h-4 w-4 text-accent cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-accent-light border border-accent rounded text-xs">
                              Completed in under 10 seconds – check for copying
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium">{sub.grade}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-muted border-t border-border px-6 py-3 text-sm text-muted-foreground">
            5 of 80 submissions shown
          </div>
        </div>

        {/* Single Submission View Mock */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h4 className="font-semibold mb-4 text-sm">Single Submission View</h4>
              <div className="aspect-video bg-muted rounded border border-border flex items-center justify-center p-4">
                <StudentDiagram />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <label className="text-sm font-medium mb-2 block">Add Comment</label>
              <textarea 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                rows={3}
                placeholder="Good work on normalization..."
              />
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <label className="text-sm font-medium mb-2 block">Grade</label>
              <input 
                type="text"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="0-100"
              />
            </div>

            <Button variant="hero" className="w-full">
              Save & Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDashboard;
