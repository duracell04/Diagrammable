import Head from "next/head";

export default function ClassroomLanding() {
  return (
    <>
      <Head>
        <title>Diagrammable Classroom</title>
        <meta
          name="description"
          content="Production-ready teacher and student experience with the same Diagrammable brandbook as the marketing demo."
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-background to-muted text-foreground">
        <section className="relative overflow-hidden px-6 py-16 sm:px-10">
          <div className="absolute inset-0 opacity-40 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative mx-auto max-w-5xl space-y-10">
            <div className="inline-flex rounded-full border border-primary-light/60 bg-primary-light/40 px-4 py-2 text-sm font-semibold text-primary">
              Classroom App · Same brand, real data
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Production-grade teacher + student flows under the marketing brandbook.
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              This app reads real LMS context (assignment, course, hashed student) and uses live repositories from
              <span className="font-semibold text-primary"> @diagrammable/core</span>. Styling, tokens and motion come
              straight from the shared theme package so the experience mirrors the public demo.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-light/70 px-3 py-1 text-xs font-semibold text-primary">
                  Teacher view
                </div>
                <h3 className="mb-2 text-xl font-semibold">Dashboard & grading loop</h3>
                <p className="text-sm text-muted-foreground">
                  Route examples: <code className="rounded bg-muted px-2 py-1">/teacher/assignment/[id]</code> and
                  <code className="ml-2 rounded bg-muted px-2 py-1">/teacher/courses/[courseId]/assignments</code>.
                  Wire these screens to live repositories and integrity services from core.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary-light/70 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  Student view
                </div>
                <h3 className="mb-2 text-xl font-semibold">Editor & submission</h3>
                <p className="text-sm text-muted-foreground">
                  Route example: <code className="rounded bg-muted px-2 py-1">/student/assignment/[id]</code>. Reuse the
                  same tokens and components as marketing, but point repositories at real APIs instead of demo data.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-primary bg-primary-light/40 p-6 text-sm text-primary-foreground">
              Hook up LMS iframes from <span className="font-semibold">plugins/wordpress</span> and
              <span className="font-semibold"> plugins/moodle</span> to these routes with assignmentId, courseId, role,
              and hashed user. This keeps the brand and UX identical across marketing and the real product.
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
