import { FileX, Eye, Bot } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: FileX,
      title: "Grading JPEG/PDF uploads is slow and painful",
      description: "Downloading, opening, and annotating image files wastes hours."
    },
    {
      icon: Eye,
      title: "Instructors only see final images, not structure",
      description: "No insight into student thinking or workflow."
    },
    {
      icon: Bot,
      title: "Text assignments are trivial to outsource to AI",
      description: "Diagrams require understanding, not just prompting."
    }
  ];

  return (
    <section className="border-b border-border bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The problem with diagrams in courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Traditional diagram assignments force instructors into tedious workflows that don't scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, i) => (
            <div 
              key={i}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mb-2 font-semibold">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-xl border-2 border-primary bg-gradient-to-br from-primary-light to-secondary-light p-8 text-center">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Solution
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Diagrammable turns diagrams into real assignments, not attachments.
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Students work directly in the browser. You see every submission in one dashboard. 
            No downloads. No file chaos. Just grading.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
