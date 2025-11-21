import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Database, Users, FileText, Download, Lock } from "lucide-react";

const UserManual = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-muted/30 py-8">
        <div className="container mx-auto max-w-4xl px-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">
              LivingCanvas Classroom – User Manual (MVP)
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground font-medium">
            Grade diagrams, not file uploads.
          </p>
          
          <p className="mt-4 text-muted-foreground max-w-3xl">
            LivingCanvas turns schema and system-design tasks into interactive assignments inside Moodle and WordPress-based LMSs. 
            Students work on diagrams directly in the browser; you review everything from a single dashboard instead of juggling dozens of PDFs or screenshots.
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="container mx-auto max-w-4xl px-6 py-12">
        {/* Table of Contents */}
        <Card className="mb-12 p-6 bg-muted/30">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Table of Contents
          </h2>
          <nav className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#what-is" className="text-primary hover:underline">1. What LivingCanvas Classroom is</a>
            <a href="#core-concepts" className="text-primary hover:underline">2. Core concepts</a>
            <a href="#getting-started" className="text-primary hover:underline">3. Getting started</a>
            <a href="#template-library" className="text-primary hover:underline">4. Template Library</a>
            <a href="#creating-assignment" className="text-primary hover:underline">5. Creating an assignment</a>
            <a href="#student-experience" className="text-primary hover:underline">6. Student experience</a>
            <a href="#reviewing" className="text-primary hover:underline">7. Reviewing submissions</a>
            <a href="#grading" className="text-primary hover:underline">8. Grading & exporting</a>
            <a href="#managing-templates" className="text-primary hover:underline">9. Managing templates</a>
            <a href="#settings" className="text-primary hover:underline">10. Settings & privacy</a>
            <a href="#quick-reference" className="text-primary hover:underline">11. Quick reference</a>
          </nav>
        </Card>

        {/* Section 1 */}
        <section id="what-is" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="h-6 w-6 text-primary" />
            1. What LivingCanvas Classroom is
          </h2>
          
          <p className="mb-4 text-muted-foreground">
            LivingCanvas Classroom is an LMS integration (Moodle module + WordPress plugin) that lets you:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            <li>Assign interactive diagrams (database schemas, system diagrams, flows, etc.) instead of "upload a JPEG/PDF" tasks.</li>
            <li>Give every student their own editable copy of a diagram (Student-Copy).</li>
            <li>Review all submissions from a single instructor dashboard:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Open any diagram in one click.</li>
                <li>Inspect structure (tables, relationships, services, flows).</li>
                <li>Add feedback and record a grade.</li>
              </ul>
            </li>
            <li>Export all submissions as:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>PNGs (for archiving or external sharing).</li>
                <li>CSV (for gradebook import or analysis).</li>
              </ul>
            </li>
          </ul>

          <Card className="p-4 bg-muted/30 border-l-4 border-l-primary">
            <h3 className="font-semibold mb-2">1.1 Supported platforms (MVP)</h3>
            <p className="text-sm text-muted-foreground mb-3">LivingCanvas Classroom currently supports:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li><strong>Moodle</strong> (as an activity module: mod_livingcanvas)</li>
              <li><strong>WordPress LMS</strong>, via a WordPress plugin:
                <ul className="list-disc pl-6 mt-1">
                  <li>LearnDash</li>
                  <li>TutorLMS</li>
                  <li>LifterLMS</li>
                  <li>LearnPress</li>
                </ul>
              </li>
            </ul>
          </Card>
        </section>

        {/* Section 2 */}
        <section id="core-concepts" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">2. Core concepts</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">2.1 Template</h3>
              <p className="text-muted-foreground mb-3">
                A Template is a pre-built diagram that defines the starting point of an assignment.
              </p>
              <p className="text-sm text-muted-foreground mb-2">Examples:</p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1 mb-3">
                <li>"Normalize Customer/Orders Schema"</li>
                <li>"Add Caching Layer"</li>
                <li>"Microservices Architecture"</li>
                <li>"Library Management DB"</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-2">Each template includes:</p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                <li><strong>Subject</strong> – e.g. Databases, Systems, Networking.</li>
                <li><strong>Level</strong> – e.g. Beginner, Intermediate, Advanced.</li>
                <li><strong>Diagram structure</strong> – nodes (tables/services), arrows (relationships), labels.</li>
                <li><strong>Locked parts</strong> – fixed context (e.g., existing tables and keys that must stay).</li>
                <li><strong>Editable parts</strong> – what students can change (e.g., missing relationships, new entities).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2.2 Student-Copy</h3>
              <p className="text-muted-foreground mb-3">
                A Student-Copy is an individual instance of a template for one student.
              </p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                <li>Created automatically the first time the student opens the assignment.</li>
                <li>Bound to a specific student + a specific assignment.</li>
                <li>Behaves like an in-browser diagram file with auto-save.</li>
                <li>After submission, becomes read-only for the student but inspectable for the instructor.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2.3 Assignment</h3>
              <p className="text-muted-foreground mb-3">
                A LivingCanvas Assignment is a regular LMS activity that uses a specific template and automatically creates Student-Copies as students open it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2.4 Dashboard</h3>
              <p className="text-muted-foreground mb-3">
                The Dashboard is the instructor view for one assignment, showing all students' status, time spent, and grades in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="getting-started" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">3. Getting started</h2>
          
          <h3 className="text-lg font-semibold mb-3">3.1 Prerequisites</h3>
          <p className="text-muted-foreground mb-2">You need:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-6">
            <li>A supported LMS (Moodle or WordPress with a supported LMS plugin)</li>
            <li>Instructor/teacher privileges in that LMS</li>
            <li>The LivingCanvas Classroom plugin/module installed and activated</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">3.2 Installation overview</h3>
          
          <Card className="mb-4 p-4 bg-muted/30">
            <h4 className="font-semibold mb-2">3.2.1 WordPress</h4>
            <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
              <li>Log in as a WordPress admin</li>
              <li>Go to Plugins → Add New</li>
              <li>Search for "LivingCanvas Classroom" or upload the provided .zip file</li>
              <li>Click Install, then Activate</li>
              <li>Follow the plugin's onboarding wizard</li>
            </ol>
          </Card>

          <Card className="p-4 bg-muted/30">
            <h4 className="font-semibold mb-2">3.2.2 Moodle</h4>
            <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
              <li>Log in as a site administrator</li>
              <li>Upload the mod_livingcanvas package via Site administration → Plugins → Install plugins</li>
              <li>Confirm installation and run any database upgrade steps</li>
              <li>Optionally configure global settings</li>
            </ol>
          </Card>
        </section>

        {/* Section 4 */}
        <section id="template-library" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Template Library</h2>
          <p className="text-muted-foreground mb-4">
            The Template Library is where you browse, preview, and select diagram templates.
          </p>
          
          <h3 className="text-lg font-semibold mb-3">4.1 Opening the Template Library</h3>
          <p className="text-sm text-muted-foreground mb-4">
            From within your course editor, you can access the template library through the block settings (WordPress) 
            or activity settings (Moodle).
          </p>

          <h3 className="text-lg font-semibold mb-3">4.2 Choosing a template</h3>
          <p className="text-sm text-muted-foreground mb-2">Filter by:</p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground mb-4 space-y-1">
            <li><strong>Subject:</strong> Databases, Systems, Networking</li>
            <li><strong>Level:</strong> Beginner, Intermediate, Advanced</li>
          </ul>
          
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-sm">
              <strong className="text-primary">✅ Tip:</strong> For MVP, the strongest pack is <strong>Databases – Beginner/Intermediate</strong>, 
              ideal for "Databases 1" / "Intro to Databases" courses and bootcamp modules covering relational design.
            </p>
          </Card>
        </section>

        {/* Sections 5-11 with similar structure */}
        <section id="creating-assignment" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Creating a LivingCanvas assignment</h2>
          <div className="space-y-4">
            <Card className="p-4 bg-muted/30">
              <h3 className="font-semibold mb-2">5.1 In WordPress LMS</h3>
              <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
                <li>Edit a lesson/topic</li>
                <li>Add "LivingCanvas Assignment" block</li>
                <li>Select template from the library</li>
                <li>Set points and due date (optional)</li>
                <li>Save lesson</li>
              </ol>
            </Card>

            <Card className="p-4 bg-muted/30">
              <h3 className="font-semibold mb-2">5.2 In Moodle</h3>
              <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
                <li>Turn editing on</li>
                <li>Add an activity → LivingCanvas Assignment</li>
                <li>Name it and choose template</li>
                <li>Set grade and due date</li>
                <li>Save and return to course</li>
              </ol>
            </Card>
          </div>
        </section>

        <section id="student-experience" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            6. Student experience
          </h2>
          <p className="text-muted-foreground mb-4">
            From the student's perspective, LivingCanvas looks and behaves like part of the LMS.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">6.1 Opening the assignment</h3>
              <p className="text-sm text-muted-foreground">
                Students see an embedded diagram frame with a "Start" button. On first open, 
                LivingCanvas creates their personal Student-Copy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">6.2 Working on the diagram</h3>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                <li>Drag nodes (tables, services, components)</li>
                <li>Fill missing labels (column names, foreign keys, service names)</li>
                <li>Add connections where allowed</li>
                <li>Changes auto-save every few seconds</li>
                <li>Can close and resume anytime before submission</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">6.3 Submitting the assignment</h3>
              <p className="text-sm text-muted-foreground">
                When done, students click Submit. The Student-Copy becomes read-only and their status changes to Submitted.
              </p>
            </div>

            <Card className="p-4 bg-muted/30 border-l-4 border-l-secondary">
              <p className="text-sm">
                <strong>🧑‍🎓 No extra accounts:</strong> Students never create a LivingCanvas account. 
                All access happens via their existing Moodle / WordPress LMS session.
              </p>
            </Card>
          </div>
        </section>

        <section id="reviewing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Reviewing submissions (Instructor dashboard)</h2>
          
          <h3 className="text-lg font-semibold mb-3">7.1 Opening the Dashboard</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Access the dashboard by opening the assignment as an instructor. Instead of the student view, 
            you'll see the submissions overview.
          </p>

          <h3 className="text-lg font-semibold mb-3">7.2 Submissions overview</h3>
          <p className="text-sm text-muted-foreground mb-2">For each student you'll see:</p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1 mb-4">
            <li><strong>Name</strong> – as provided by the LMS</li>
            <li><strong>Status</strong> – Not started / In progress / Submitted</li>
            <li><strong>Time spent</strong> – approximate cumulative editing time</li>
            <li><strong>Grade</strong> – current grade if set</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">7.3 Inspecting a Student-Copy</h3>
          <p className="text-sm text-muted-foreground">
            Click any row to open the student's diagram in read-only mode. Zoom/pan to inspect 
            keys, relationships, and structure without opening separate files.
          </p>
        </section>

        <section id="grading" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Download className="h-6 w-6 text-primary" />
            8. Grading & exporting
          </h2>
          
          <h3 className="text-lg font-semibold mb-3">8.1 Grading a submission</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Enter a score in the Grade field and save. In Moodle, the grade syncs to the gradebook automatically. 
            In WordPress LMS, grades are stored in the plugin and optionally synced to the LMS.
          </p>

          <h3 className="text-lg font-semibold mb-3">8.2 Bulk export</h3>
          <div className="space-y-3">
            <Card className="p-4 bg-muted/30">
              <h4 className="font-semibold mb-2">8.2.1 Export PNGs</h4>
              <p className="text-sm text-muted-foreground">
                Generates a ZIP file with one PNG per student diagram. Use for offline archiving, 
                documentation, or sharing with other staff.
              </p>
            </Card>

            <Card className="p-4 bg-muted/30">
              <h4 className="font-semibold mb-2">8.2.2 Export CSV</h4>
              <p className="text-sm text-muted-foreground">
                Includes student identifier, name, submission time, time spent, grade, and structural metrics. 
                Use for uploading grades to another system or running analysis.
              </p>
            </Card>
          </div>
        </section>

        <section id="managing-templates" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">9. Managing templates</h2>
          
          <h3 className="text-lg font-semibold mb-3">9.1 Using built-in curriculum packs</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Most instructors use the built-in templates from Curriculum Pack v1, which are maintained centrally 
            and updated regularly with new subjects.
          </p>

          <h3 className="text-lg font-semibold mb-3">9.2 Duplicating and customising templates</h3>
          <p className="text-sm text-muted-foreground mb-4">
            If your edition supports custom templates, you can duplicate existing templates and edit them 
            to adjust difficulty or customize for your course.
          </p>

          <h3 className="text-lg font-semibold mb-3">9.3 Department / site template library (Edu tier)</h3>
          <p className="text-sm text-muted-foreground">
            In the education tier, templates can be shared across instructors, and department leads can 
            mark templates as official for standardized assessments.
          </p>
        </section>

        <section id="settings" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            10. Settings & privacy
          </h2>
          
          <h3 className="text-lg font-semibold mb-3">10.1 Site-level settings (admin)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            LMS admins can configure global settings including API keys, grade sync options, 
            and analytics features.
          </p>

          <h3 className="text-lg font-semibold mb-3">10.2 Privacy model</h3>
          <Card className="p-4 bg-muted/30 border-l-4 border-l-primary">
            <p className="text-sm text-muted-foreground mb-3">
              LivingCanvas is designed to keep personally identifiable information (PII) inside your LMS.
            </p>
            <p className="text-sm text-muted-foreground mb-2">The LivingCanvas backend stores:</p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
              <li>A hashed student identifier (e.g. sha256(siteSalt + lmsStudentId))</li>
              <li>Diagram data (shapes, labels, connections)</li>
              <li>Timestamps (createdAt, updatedAt, submittedAt)</li>
              <li>Assignment IDs and site IDs</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              It does <strong>not</strong> know student names or email addresses. The mapping from hash to 
              real student identity remains exclusively inside your LMS.
            </p>
          </Card>
        </section>

        <section id="quick-reference" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">11. Quick reference (cheat sheet)</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 bg-muted/30">
              <h3 className="font-semibold mb-3">Create assignment (WordPress)</h3>
              <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
                <li>Edit lesson → Add LivingCanvas Assignment block</li>
                <li>Click Select template → pick one</li>
                <li>Set points/due date (optional)</li>
                <li>Save lesson</li>
              </ol>
            </Card>

            <Card className="p-4 bg-muted/30">
              <h3 className="font-semibold mb-3">Create assignment (Moodle)</h3>
              <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
                <li>Turn editing on → Add activity → LivingCanvas</li>
                <li>Name it, choose template</li>
                <li>Set grade/due date</li>
                <li>Save and return to course</li>
              </ol>
            </Card>

            <Card className="p-4 bg-muted/30">
              <h3 className="font-semibold mb-3">Student flow</h3>
              <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
                <li>Open lesson/activity → "Start diagram"</li>
                <li>Edit diagram → auto-save</li>
                <li>Click Submit → diagram locks</li>
                <li>Status becomes Submitted</li>
              </ol>
            </Card>

            <Card className="p-4 bg-muted/30">
              <h3 className="font-semibold mb-3">Instructor flow</h3>
              <ol className="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
                <li>Open assignment → Dashboard</li>
                <li>See students with status, time, grade</li>
                <li>Click student → inspect → grade</li>
                <li>Export PNG/CSV if needed</li>
              </ol>
            </Card>
          </div>
        </section>

        {/* Back to top */}
        <div className="text-center pt-8 border-t border-border">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </article>
    </main>
  );
};

export default UserManual;

