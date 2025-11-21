import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Database, Clock, CheckCircle2, Users, ArrowLeft, Eye, MessageSquare, Star, Download, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const StudentDiagram = () => {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      className="max-w-full max-h-full"
    >
      <defs>
        <marker
          id="arrow-rel"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="2"
          orient="auto"
        >
          <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
        </marker>
        <filter id="shadow-student">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="2"
            floodOpacity="0.12"
          />
        </filter>
        <linearGradient id="tableGrad-student" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary-light))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
        <linearGradient id="tableGrad-junction" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--secondary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary-light))" />
        </linearGradient>
      </defs>

      {/* Wrap whole diagram so it sits nicely inside the box */}
      <g transform="translate(160, 90) scale(0.9) translate(-160, -90)">
        {/* Relationships */}
        {/* Customers 1 — N Orders */}
        <line
          x1={95}
          y1={70}
          x2={160}
          y2={70}
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          markerEnd="url(#arrow-rel)"
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

        {/* Orders 1 — N Order_Items */}
        <line
          x1={205}
          y1={95}
          x2={205}
          y2={132}
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          markerEnd="url(#arrow-rel)"
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
        <g filter="url(#shadow-student)">
          <rect
            x={25}
            y={40}
            width={120}
            height={80}
            fill="url(#tableGrad-student)"
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
        <g filter="url(#shadow-student)">
          <rect
            x={160}
            y={40}
            width={120}
            height={80}
            fill="url(#tableGrad-student)"
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
        <g filter="url(#shadow-student)">
          <rect
            x={120}
            y={120}
            width={150}
            height={50}
            fill="url(#tableGrad-junction)"
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

const DemoAssignment = () => {
  const { toast } = useToast();

  const students = [
    { initials: "MC", name: "Maya Chen", status: "Submitted", lastActivity: "2h ago", timeSpent: "18m", grade: "—" },
    { initials: "AK", name: "Alex Kumar", status: "Submitted", lastActivity: "5h ago", timeSpent: "24m", grade: "95" },
    { initials: "JL", name: "Jordan Lee", status: "In Progress", lastActivity: "1h ago", timeSpent: "12m", grade: "—" },
    { initials: "SR", name: "Sam Rivera", status: "Submitted", lastActivity: "3h ago", timeSpent: "7s", grade: "—" },
    { initials: "RP", name: "Riley Park", status: "Submitted", lastActivity: "4h ago", timeSpent: "31m", grade: "88" },
  ];

  const [selectedStudent, setSelectedStudent] = useState<typeof students[0] | null>(null);
  const [comment, setComment] = useState("");
  const [grade, setGrade] = useState("");

  const handleView = (student: typeof students[0]) => {
    setSelectedStudent(student);
    setComment("");
    setGrade(student.grade !== "—" ? student.grade : "");
  };

  const handleComment = (studentName: string) => {
    toast({
      title: "Add feedback",
      description: `Adding comment for ${studentName}...`,
    });
  };

  const handleGrade = (studentName: string) => {
    toast({
      title: "Grading",
      description: `Opening grade panel for ${studentName}...`,
    });
  };

  const handleExportCSV = () => {
    toast({
      title: "Exporting CSV",
      description: "Generating CSV file with all submissions...",
    });
  };

  const handleSaveAndNext = () => {
    if (!selectedStudent) return;
    
    toast({
      title: "Saved",
      description: `Grade and feedback saved for ${selectedStudent.name}`,
    });
    
    // Find next student
    const currentIndex = students.findIndex(s => s.name === selectedStudent.name);
    const nextStudent = students[currentIndex + 1];
    
    if (nextStudent) {
      setSelectedStudent(nextStudent);
      setComment("");
      setGrade(nextStudent.grade !== "—" ? nextStudent.grade : "");
    } else {
      setSelectedStudent(null);
      toast({
        title: "All done!",
        description: "You've reviewed all submissions",
      });
    }
  };

  const handleExportPNGs = () => {
    toast({
      title: "Exporting PNGs",
      description: "Creating ZIP file with all diagram images...",
    });
  };

  return (
    <main className="min-h-screen bg-muted py-16">
      <div className="container mx-auto max-w-7xl px-6">
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
            Database Schema Assignment
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            CS 201 • Due March 15, 2025
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="default" variant="outline" onClick={handleExportCSV}>
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
            <Button size="default" variant="outline" onClick={handleExportPNGs}>
              <Download className="mr-2 h-4 w-4" />
              Export PNGs (ZIP)
            </Button>
          </div>
        </header>

        {/* Grading explanation */}
        <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Eye className="h-4 w-4 text-primary" />
            How grading works
          </h3>
          <p className="text-sm text-muted-foreground">
            Click <strong>View</strong> on any row to open the student's diagram in a grading modal: 
            you'll see their read-only diagram, can type comments, assign a grade, and jump to the next 
            student without leaving the screen.
          </p>
        </div>

        {/* Full Dashboard Table */}
        <Card className="overflow-hidden border-border bg-background shadow-sm mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Student</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold">Last Activity</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold">Time Spent</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold">Grade</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {students.map((student, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {student.initials}
                        </div>
                        <span className="text-sm font-medium">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <Badge 
                        variant={student.status === "Submitted" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {student.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">{student.lastActivity}</td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">{student.timeSpent}</td>
                    <td className="px-4 py-4">
                      <span className="text-sm font-semibold text-primary">
                        {student.grade}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleView(student)}
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleComment(student.name)}
                          className="h-8 w-8 p-0"
                        >
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleGrade(student.name)}
                          className="h-8 w-8 p-0"
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Single Submission View Modal */}
        <Dialog open={!!selectedStudent} onOpenChange={() => setSelectedStudent(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {selectedStudent?.initials}
                </div>
                <div>
                  <div className="text-lg font-bold">{selectedStudent?.name}</div>
                  <div className="text-sm font-normal text-muted-foreground">
                    {selectedStudent?.status} • {selectedStudent?.timeSpent} spent
                  </div>
                </div>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              {/* Read-only diagram */}
              <div>
                <Label className="text-sm font-semibold mb-2 block">Student Diagram (Read-only)</Label>
                <div className="rounded-lg border border-border bg-muted/40 p-8 flex items-center justify-center min-h-[300px]">
                  <StudentDiagram />
                </div>
              </div>

              {/* Comment section */}
              <div>
                <Label htmlFor="comment" className="text-sm font-semibold mb-2 block">
                  Add Comment
                </Label>
                <Textarea
                  id="comment"
                  placeholder="Good work on normalization..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-24"
                />
              </div>

              {/* Grade section */}
              <div>
                <Label htmlFor="grade" className="text-sm font-semibold mb-2 block">
                  Grade
                </Label>
                <Input
                  id="grade"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0-100"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="max-w-32"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <Button onClick={handleSaveAndNext} className="flex-1">
                  Save & Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => setSelectedStudent(null)}>
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default DemoAssignment;
