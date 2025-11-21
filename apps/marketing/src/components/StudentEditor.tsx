import { Save, Lock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const StudentEditor = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Module 3: Student Diagram Editor (Student-Copy workflow)
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Students complete diagrams directly in the browser.
          </h2>
          <p className="text-lg text-muted-foreground">
            Each student gets their own Student-Copy of the template, with only the relevant nodes and edges editable. 
            Changes auto-save; submission locks the diagram.
          </p>
        </div>

        <div className="space-y-8">
          {/* Active State */}
          <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
            <div className="bg-muted border-b border-border px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Student View: Database Schema Assignment</span>
                <Badge variant="outline" className="bg-primary-light text-primary border-primary">
                  <Save className="h-3 w-3 mr-1" />
                  Auto-saved 2s ago
                </Badge>
              </div>
              <Button variant="hero" size="sm">
                Submit Assignment
              </Button>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Editable nodes */}
                <div className="rounded-lg border-2 border-primary bg-primary-light p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="text-xs font-medium text-primary mb-2">TABLE (editable)</div>
                  <div className="text-sm font-semibold">Customers</div>
                  <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                    <div>• customer_id</div>
                    <div>• name</div>
                    <div>• email</div>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-primary bg-primary-light p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="text-xs font-medium text-primary mb-2">TABLE (editable)</div>
                  <div className="text-sm font-semibold">Orders</div>
                  <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                    <div>• order_id</div>
                    <div>• customer_id</div>
                    <div>• total</div>
                  </div>
                </div>

                {/* Locked node */}
                <div className="rounded-lg border border-locked bg-locked p-4 opacity-60">
                  <div className="flex items-center gap-1 text-xs font-medium text-locked-foreground mb-2">
                    <Lock className="h-3 w-3" />
                    <span>LOCKED</span>
                  </div>
                  <div className="text-sm font-semibold text-locked-foreground">Reference Data</div>
                  <div className="mt-2 text-xs text-locked-foreground">
                    Pre-configured
                  </div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground text-center">
                Teal borders = editable • Grey = locked template elements
              </div>
            </div>
          </div>

          {/* Submitted State */}
          <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden opacity-80">
            <div className="bg-primary-light border-b border-primary px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Student View: Database Schema Assignment</span>
                <Badge variant="default" className="bg-primary">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Submitted
                </Badge>
              </div>
            </div>

            <div className="p-8">
              <div className="text-center text-muted-foreground">
                <Lock className="h-12 w-12 mx-auto mb-3 opacity-40" />
                <p className="text-sm">
                  Assignment submitted. Diagram is now read-only.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-card border border-border p-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Save className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Student-Copy Workflow</h4>
              <p className="text-sm text-muted-foreground">
                Each student receives a personal copy of the template via <code className="bg-muted px-1.5 py-0.5 rounded text-xs">POST /studentCopies</code>. 
                Changes are auto-saved to their copy. Instructors only see submitted final diagrams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentEditor;
