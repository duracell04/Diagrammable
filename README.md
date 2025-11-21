# Diagrammable

> **Grade diagrams, not file uploads.**  
> Diagrammable turns schema & system-design tasks into interactive assignments inside **Moodle** and **WordPress LMS**.  
> Students complete diagrams in the browser; you review everything from one dashboard - with integrity checks and AI-assisted feedback on the roadmap.

---

## Quick links

- [Why Diagrammable?](#why-diagrammable)
- [Who is it for?](#who-is-it-for)
- [Key concepts](#key-concepts)
- [MVP scope](#mvp-scope)
  - [Template Library](#template-library)
  - [Assignment Builder](#assignment-builder)
  - [Student Editor](#student-editor)
  - [Teacher Dashboard](#teacher-dashboard)
  - [Integrity Analytics (MVP)](#integrity-analytics-mvp)
- [Architecture overview](#architecture-overview)
- [Local development](#local-development)
  - [Prerequisites](#prerequisites)
  - [Install & run](#install--run)
  - [Project structure](#project-structure)
  - [Demo playground](#demo-playground)
- [LMS integration status](#lms-integration-status)
- [Roadmap](#roadmap)
  - [Phase 0 - MVP Classroom (what is being built now)](#phase-0---mvp-classroom-what-is-being-built-now)
  - [Phase 1 - Deeper analytics & cohorts](#phase-1---deeper-analytics--cohorts)
  - [Phase 2 - Diagrammable Docs](#phase-2---diagrammable-docs)
- [AI integration roadmap](#ai-integration-roadmap)
  - [1. AI for template & assignment design](#1-ai-for-template--assignment-design)
  - [2. AI for instructor feedback & grading support](#2-ai-for-instructor-feedback--grading-support)
- [3. AI for integrity analytics](#3-ai-for-integrity-analytics)
- [4. AI helpers for students (opt-in)](#4-ai-helpers-for-students-opt-in)
- [5. AI for Docs product (later phase)](#5-ai-for-docs-product-later-phase)
- [Status (2025-11)](#status-2025-11)
- [Contributing](#contributing)
- [License](#license)

---

## Status (2025-11)

- Done: landing site + demo dashboard (marketing app) with mock data
- Done: Template Library UI and demo assignment walkthrough
- In progress: student editor wiring (marketing demo only today)
- Not started: Moodle/WordPress plugins and docs folder (demo shell only right now)

---

## Why Diagrammable?

Today, diagram assignments in most courses look like this:

- Students draw schemas or architectures in draw.io, Miro, or on paper, then upload JPEGs or PDFs to the LMS.
- Instructors download 50 files, click through them one by one, and try to give feedback.
- There is no easy way to see how students thought about the problem, compare submissions quickly, or spot suspiciously similar work in a structured way.

Generative AI makes it trivial to generate passable essays and text answers. What is harder to fake is structural understanding: how entities, flows, and relationships fit.

Diagrammable exists to make diagrams a first-class, gradable object in your LMS - not a static screenshot buried in a ZIP file.

---

## Who is it for?

- University CS/IT instructors: database design, systems design, networking, software architecture.
- Bootcamps and internal academies: full-stack, DevOps, data engineering, microservices training.
- Instructional designers and LMS teams: people who need reusable, interactive templates instead of file-upload busywork.

Longer-term, the same ideas power Diagrammable Docs for developer documentation.

---

## Key concepts

Diagrammable Classroom revolves around four core ideas.

### Template

A Template is a pre-built diagram that defines the starting point of an assignment.

Examples:

- Normalize Customer/Orders Schema
- Add Caching Layer
- Microservices Architecture
- Library Management DB

Each template specifies:

- Subject: e.g. databases, systems, networking.
- Level: beginner / intermediate / advanced.
- Diagram structure: nodes or entities (tables or services), edges or relations, labels.
- Locked parts: fixed context that must stay as-is.
- Editable parts: what students work on (missing tables, keys, relationships).

### Student-Copy

When a student opens a Diagrammable assignment for the first time, the system creates a Student-Copy:

- A private instance of the template bound to that student and assignment.
- Edits auto-save as they work.
- Once submitted, it becomes read-only for that student but remains fully visible to the instructor.

### Assignment

An Assignment is a normal LMS activity (lesson block in WordPress LMS, activity in Moodle) that:

- Uses a specific template.
- Has optional points and a due date.
- Produces Student-Copies for all enrolled learners who open it.

### Dashboard

The Teacher Dashboard is where instructors:

- See all students for a given assignment.
- Inspect each Student-Copy in one click.
- Record grades and feedback.
- Export results (PNG and CSV).
- Glance at light-weight integrity signals (time, similarity).

---

## MVP scope

The initial MVP focuses on Diagrammable Classroom for Moodle and WordPress LMS (LearnDash, TutorLMS, LifterLMS, LearnPress, and others).

### Template Library

Browse ready-made, structured diagram templates instead of starting from an empty canvas.

- Subjects:
  - Databases (ERD, normalization, junction tables)
  - Systems (microservices, caching layers, auth flows)
  - Networking and basic architectures (later)
- Levels: beginner / intermediate / advanced
- Each template defines node types (tables, services, components), which parts are locked versus editable, and a clear task description (for example, Normalize this schema or Add a caching layer between X and Y).

Example: Normalize Customer/Orders Schema - students add the `order_items` junction table and fix keys and relationships.

### Assignment Builder

Attach a template to an LMS activity in a few clicks.

- WordPress LMS
  - Gutenberg block: `Diagrammable Assignment`
  - Pick template from library
  - Set points and due date
  - Save lesson; students see an embedded diagram frame
- Moodle
  - Activity module: `Diagrammable Assignment`
  - Choose template, grading method, and due date
  - Save and return to course; activity appears like any other graded item

Every learner who opens the activity gets a Student-Copy of that diagram to work on.

### Student Editor

Students work in a constrained editor inside the LMS - no extra accounts, no external apps.

- Drag and drop entities or nodes within the allowed space.
- Fill in fields, labels, and relationships where the template allows.
- Auto-save with clear submitted or not-submitted state.
- No freeform chaos: the editor only supports the operations that make sense for that problem type.

The goal is structured practice, not a general-purpose drawing tool.

### Teacher Dashboard

One place to review the whole cohort.

- Overview table:
  - Student name
  - Status (Not started, In progress, Submitted)
  - Time spent in editor (approximate)
  - Grade (if given)
- Click View to open Single Submission View:
  - Read-only student diagram (for example, their normalized schema)
  - Comment box (feedback)
  - Grade field
  - Save and Next button to step through the class efficiently
- Export:
  - CSV with basic metrics and grades
  - ZIP of PNGs (one diagram per student)

### Integrity Analytics (MVP)

A very light-weight signal layer in the first version:

- Track time spent per assignment.
- Highlight:
  - Very short completion times (for example, 7 seconds) as suspicious.
  - Batches of diagrams with near-identical structure (simple similarity metric).

This is not a full plagiarism engine. It is a way to help instructors spot unusual patterns quickly without pretending to be a judge.

---

## Architecture overview

High-level architecture (MVP):

- Frontend apps (Next.js pages router + TypeScript + Tailwind + shadcn-ui):
  - `apps/marketing`: public site and interactive demo (no real LMS calls).
  - `apps/classroom`: real teacher + student experience that reads LMS context and talks to live repositories.
- Shared packages:
  - `packages/core`: domain model, types, repositories (demo + live), integrity helpers.
  - `packages/theme`: shared Tailwind tokens/brandbook (imported by both apps).
- Backend (planned):
  - Node/TS API (REST or Next route handlers), storing templates, assignments, student copies, and integrity data.
  - No raw student PII: only hashed IDs from the LMS.
- LMS plugins:
  - WordPress plugin with a Gutenberg block and admin pages embedding the classroom views.
  - Moodle `mod_diagrammable` activity with gradebook integration and a privacy provider.

Privacy by design: Diagrammable stores a hashed student identifier plus diagram data and timestamps. The mapping from hash to real student identity stays inside the LMS.

---

## Local development

### Prerequisites

- Node.js 18 or newer (recommended)
- Package manager: `pnpm` 9.x (workspace is configured for pnpm)

### Install & run

Clone the repo and install dependencies:

```bash
git clone https://github.com/duracell04/Diagrammable.git
cd Diagrammable

pnpm install
```

Run the dev servers (separate Next.js apps):

```bash
# Marketing site + demo (demo LMS data, public pages)
pnpm dev:marketing

# Classroom app (teacher dashboards + student editor, real LMS context)
pnpm dev:classroom
```

Open the marketing playground at http://localhost:3000/ in your browser.

- Browse the Template Library (mock data).
- Open a Demo Assignment with fake student data.
- Use the Single Submission View modal to see how grading will work.
- Experiment with the dashboard UI before wiring it up to a real LMS.

Open the classroom app at http://localhost:3001/ (or the port reported by Next) to work on the real flows against live repositories as they land.

Note: LMS plugins now live under `plugins/wordpress` and `plugins/moodle`.

### Project structure

- `apps/marketing/` - public Next.js site + interactive demo (mock LMS data).
- `apps/classroom/` - Next.js app for real teacher/student flows (LMS context integration).
- `packages/core/` - shared domain model, repositories, and integrity helpers (framework-agnostic).
- `packages/theme/` - shared brandbook and Tailwind tokens imported by both apps.
- `plugins/wordpress/` - WordPress LMS adapter (PHP; planned scaffold).
- `plugins/moodle/` - Moodle activity module (PHP; planned scaffold).
- Root configs - `package.json` (workspace scripts), `pnpm-workspace.yaml`, `tsconfig.base.json`.

### Demo playground

The marketing app (`apps/marketing`) simulates both instructor and student flows with mock data.

- Instructor view:
  - Template Library
  - Demo Assignment dashboard
  - Single Submission View (fake student diagrams)
- Student view (planned):
  - Minimal Student Editor with constrained interactions

Use this to try UX ideas before they hit a real course, capture screenshots or GIFs for docs and plugin listings, and test integrity metrics and analytics layouts with mock data.

Quick tweaks for contributors:
- Demo assignment rows and grading modal live in `apps/marketing/src/pages/demo-assignment.tsx`.
- Template Library cards are defined in `apps/marketing/src/components/TemplateLibrary.tsx`.

---

## LMS integration status

Diagrammable is being developed with LMS integration in mind but Moodle and WordPress plugins are not yet production-ready.

Planned structure (to be scaffolded):

- `plugins/moodle/mod_diagrammable/`: activity plugin, privacy provider, gradebook integration.
- `plugins/wordpress/` (plugin slug TBD): Gutenberg block, settings page for API key and site ID.

Until these land, the repo primarily provides the editor and dashboard UI plus a fake LMS wrapper in the marketing demo.

---

## Roadmap

### Phase 0 - MVP Classroom (what is being built now)

Goal: prove that instructors can grade 50+ diagram assignments faster and more reliably than file uploads.

- Template Library UI (mock data)
- Demo Assignment (fake submissions)
- Single Submission View (diagram plus comment plus grade plus Save and Next)
- Real diagram data model (JSON) behind templates
- Minimal Student Editor with constrained interactions
- Local fake LMS wrapper to mimic Moodle and WordPress
- Basic integrity metrics (time spent, simple similarity cluster)

### Phase 1 - Deeper analytics & cohorts

Goal: make Diagrammable practical for real courses.

- Real Moodle and WordPress LMS integrations
- Per-course and per-assignment dashboards
- Better similarity metrics (graph-based comparisons)
- Instructor-created custom templates
- Department-level template library (education tier)
- Cohort views across multiple assignments

### Phase 2 - Diagrammable Docs

Goal: extend the same idea to developer documentation.

- GitHub/GitLab integration for .mmd or diagram files
- Render and embed widgets for WordPress docs
- Auto-sync diagrams between repo and docs site
- Docs-side integrity view (which diagrams are stale versus code)
- AI-assisted explain-this-diagram blocks

---

## AI integration roadmap

AI is not the product; it is a set of helpers layered onto a clear, auditable workflow. It is introduced in small, optional steps.

### 1. AI for template & assignment design

Where in the workflow: when an instructor wants a new assignment template.

Planned features:

- Describe the assignment you want; AI suggests a basic diagram structure (entities and relationships), locked versus editable parts, and suggested student instructions and rubric hints.
- Make this harder or easier; AI tweaks a template by hiding more labels, increasing or reducing complexity, or changing from concrete names to generic patterns.

Benefits: instructional designers can go from idea to working template much faster and non-DB experts can still create solid DB exercises.

### 2. AI for instructor feedback & grading support

Where in the workflow: inside the Single Submission View while the teacher is grading.

Planned features:

- Draft feedback button: AI inspects the student diagram versus a reference solution and produces 1-2 short feedback sentences (for example, You correctly created a junction table, but the FK from Orders is missing.).
- Highlight missing or extra elements overlay: draws attention to missing relationships or incorrect cardinalities.
- Suggest grade range: based on a rubric provided by the instructor, AI suggests a grade band (for example, 8-9/10).

Benefits: speeds up grading without removing instructor control; keeps comments focused and less repetitive; instructors can accept, edit, or ignore suggestions. Nothing is auto-graded silently.

### 3. AI for integrity analytics

Where in the workflow: in the dashboard view after submissions.

Planned features:

- Cluster diagrams into families to show which submissions are structurally near-identical.
- Suspicious patterns flags: very low time spent plus high similarity plus good score is marked for review.
- Explanation tool: for a flagged pair, AI explains how they are similar (same node names, same layout, same mistakes).

Benefits: gives teachers signals, not verdicts; helps defend grading decisions and academic integrity with concrete evidence.

### 4. AI helpers for students (opt-in)

Where in the workflow: inside the student editor, but only if the course enables it.

Planned features:

- Hint button: AI gives conceptual hints (for example, You probably need a table between Orders and Products) without drawing it automatically.
- Check my work: AI points out missing keys or relationships but does not fix them.
- Explanation mode: clicking on a relation or key shows a short explanation (for example, This is a foreign key linking order_items to orders; it enforces referential integrity.).

Benefits: encourages learning over blind trial and error; keeps ownership of the final diagram with the student; can be disabled per course for high-stakes exams.

### 5. AI for Docs product (later phase)

Where in the workflow: for Diagrammable Docs, helping maintain live diagrams in technical documentation.

Planned features:

- Generate candidate diagrams from existing schema definitions, API descriptions, or documentation text.
- Propose updates when schema or API models change or a diagram becomes misaligned with the latest code.
- Explain this diagram blocks: AI-generated narrative that explains the diagram to new developers.

Benefits: reduces documentation debt by keeping visual models in sync with real systems; makes docs more approachable for new team members or external developers.

---

## Contributing

Contributions, issues, and feature requests are welcome.

- Use Issues for bug reports and feature ideas.
- Use Discussions (if enabled) for higher-level design questions.
- For larger changes, please open an issue first so we can align on scope.

Early areas where help is especially valuable:

- Accessibility and keyboard navigation in the editor
- LMS plugin scaffolding (Moodle and WordPress)
- Simple graph similarity functions for integrity analytics
- Better sample templates and demo data
- Test coverage for core editor and dashboard components

---

## License

TBD - currently in early development. The intention is to release Diagrammable under a permissive license (MIT or similar) for the core, with optional hosted offerings later.
