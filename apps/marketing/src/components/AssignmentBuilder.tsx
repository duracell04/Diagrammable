import { Calendar, Hash, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const AssignmentBuilder = () => {
  return (
    <section className="bg-background py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-block rounded-md bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
            Module 2: Assignment Builder (Moodle / WordPress LMS plugin)
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Add a Diagrammable assignment to your course.
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose a template, set points and a due date, and publish – all inside the LMS you already use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Moodle Editor Mock */}
          <Card className="p-6 shadow-lg">
            <div className="mb-4 rounded-t-lg bg-muted border border-border p-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/40" />
                  <div className="h-3 w-3 rounded-full bg-accent/40" />
                  <div className="h-3 w-3 rounded-full bg-primary/40" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">Moodle Lesson Editor</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="rounded border border-border p-3 bg-card">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>Introduction text block</span>
                </div>
              </div>

              <div className="rounded border-2 border-primary bg-primary-light p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-white text-xs font-bold">
                    LC
                  </div>
                  <span className="font-semibold text-sm">Diagrammable Assignment</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Template: Normalize Customer/Orders Schema
                </div>
              </div>

              <div className="rounded border border-border p-3 bg-card">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>Follow-up instructions</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Right: Settings Form */}
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-4 text-sm">Assignment Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Template</label>
                  <div className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                    Normalize Customer/Orders Schema
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                      <Hash className="h-4 w-4 text-muted-foreground" />
                      Max Points
                    </label>
                    <div className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                      100
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      Due Date
                    </label>
                    <div className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                      Mar 15, 2025
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="h-32 rounded border border-dashed border-primary bg-primary-light/30 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Diagram preview</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-secondary-light border border-secondary p-4">
              <p className="text-sm text-secondary-foreground">
                <span className="font-semibold">One-click embed.</span> Diagrammable appears as a 
                native assignment type in your course editor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentBuilder;
