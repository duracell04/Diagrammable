# Diagrammable Moodle Plugin

Moodle activity module (`mod_diagrammable`) that embeds Diagrammable Classroom for graded assignments.

Responsibilities:
- Store course/activity → Diagrammable assignment mappings.
- Render student/teacher iframes with course, assignmentId, role, and hashed user.
- Declare privacy provider and keep grading/editor logic in the Classroom app and backend.
