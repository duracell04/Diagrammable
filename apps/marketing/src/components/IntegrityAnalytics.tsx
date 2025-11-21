import { BarChart3, Flag, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const IntegrityAnalytics = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-block rounded-md bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground">
            Module 5: Integrity & Analytics (v1.2)
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Built to support integrity, not just grading.
          </h2>
          <p className="text-lg text-muted-foreground">
            Diagrammable surfaces basic similarity and timing signals so you can focus your attention where it matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Analytics Visualizations */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Submissions Over Time</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-end gap-2 h-32">
                  <div className="flex-1 bg-primary/20 rounded-t" style={{ height: '45%' }}>
                    <div className="h-full bg-primary rounded-t" />
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t" style={{ height: '70%' }}>
                    <div className="h-full bg-primary rounded-t" />
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t" style={{ height: '60%' }}>
                    <div className="h-full bg-primary rounded-t" />
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t" style={{ height: '85%' }}>
                    <div className="h-full bg-primary rounded-t" />
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t" style={{ height: '100%' }}>
                    <div className="h-full bg-primary rounded-t" />
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t" style={{ height: '55%' }}>
                    <div className="h-full bg-primary rounded-t" />
                  </div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-secondary" />
                <h3 className="font-semibold">Average Time Spent</h3>
              </div>
              <div className="text-3xl font-bold text-secondary">23 minutes</div>
              <p className="text-sm text-muted-foreground mt-1">
                Across 80 submissions
              </p>
            </Card>
          </div>

          {/* Right: Integrity Flags */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Flag className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">Flagged for Review</h3>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-accent mb-2">5</div>
              <p className="text-sm text-muted-foreground">submissions need attention</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-accent/30 bg-accent-light p-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-1">Completed too quickly</div>
                    <p className="text-xs text-muted-foreground mb-2">
                      3 students completed in under 10 seconds
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-background rounded px-2 py-1">Sam Rivera</span>
                      <span className="text-xs bg-background rounded px-2 py-1">Taylor Kim</span>
                      <span className="text-xs bg-background rounded px-2 py-1">Jamie Wu</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-accent/30 bg-accent-light p-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Flag className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-1">High similarity detected</div>
                    <p className="text-xs text-muted-foreground mb-2">
                      2 diagrams are highly similar to others
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-background rounded px-2 py-1">Alex Kumar</span>
                      <span className="text-xs bg-background rounded px-2 py-1">Jordan Lee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                These are basic signals, not accusations. Use them to guide your review workflow.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegrityAnalytics;
