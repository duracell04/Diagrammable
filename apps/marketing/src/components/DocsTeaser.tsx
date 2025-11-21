import Link from "next/link";
import { GitBranch, ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DocsTeaser = () => {
  return (
    <section id="docs" className="bg-background py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-block rounded-md bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
            LivingCanvas Docs
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Keep your WordPress diagrams in sync with Git.
          </h2>
          <p className="text-lg text-muted-foreground">
            LivingCanvas Docs connects your Mermaid files in GitHub to your WordPress pages. 
            Update the diagram in the repo; your docs follow automatically – with pinned commit SHAs and no broken embeds.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center mb-12">
          {/* Left: GitHub */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <GitBranch className="h-5 w-5 text-foreground" />
              <span className="font-semibold text-sm">GitHub Repository</span>
            </div>

            <div className="bg-muted rounded-lg p-4 mb-3 font-mono text-xs">
              <div className="text-muted-foreground mb-2">diagrams/payment-flow.mmd</div>
              <div className="space-y-1 text-[10px]">
                <div>graph TD</div>
                <div className="ml-2">A[User] --&gt; B[Gateway]</div>
                <div className="ml-2">B --&gt; C[Processor]</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <Badge variant="outline" className="font-mono text-[10px]">
                3f9a7c9
              </Badge>
              <span className="text-muted-foreground">Latest commit</span>
            </div>
          </div>

          {/* Center: Arrow + Pipeline */}
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-primary mb-1">Webhook Trigger</div>
              <div className="text-[10px] text-muted-foreground">Auto-render on push</div>
            </div>
          </div>

          {/* Right: WordPress */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5 text-foreground" />
              <span className="font-semibold text-sm">WordPress Editor</span>
            </div>

            <div className="rounded-lg border-2 border-secondary bg-secondary-light p-4 mb-3">
              <div className="text-xs font-medium text-secondary mb-2">LivingCanvas Diagram (Git-synced)</div>
              <div className="h-20 bg-background rounded flex items-center justify-center text-[10px] text-muted-foreground">
                Rendered diagram SVG
              </div>
            </div>

            <div className="text-[10px] text-muted-foreground">
              Synced from <code className="bg-muted px-1 rounded">docs/payment-flow.mmd</code>
              {' '}@ <code className="bg-muted px-1 rounded">3f9a7c9</code>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-secondary-light to-primary-light border-2 border-secondary p-8 text-center">
          <h3 className="text-xl font-bold mb-3">
            Never log into WP to "fix a screenshot" again.
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Source of truth stays in Git. Your docs stay accurate. Perfect for DevRel teams, engineering docs, 
            and agencies managing technical content.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/waitlist">
              Join Docs Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DocsTeaser;
