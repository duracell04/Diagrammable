import { Download, Eye, MessageSquare, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
                <p className="text-sm text-muted-foreground text-center">
                  The student&apos;s diagram will be visible here.
                </p>
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

