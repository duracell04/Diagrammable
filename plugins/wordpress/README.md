# Diagrammable WordPress Plugin

Thin WordPress/LMS adapter that embeds the Diagrammable Classroom app in Gutenberg blocks or shortcodes.

Responsibilities:
- Provide admin settings for the Classroom base URL and API key/shared secret.
- Render iframes/widgets with assignmentId, courseId, role, and hashed user identifier.
- Stay presentation-only: no grading or editor logic lives here.
