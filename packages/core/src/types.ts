// src/core/types.ts

/**
 * High-level subject of a diagram template.
 * Used for filtering in the Template Library.
 */
export type TemplateSubject = 'databases' | 'systems' | 'networking' | 'other';

/**
 * Difficulty level of a template.
 */
export type TemplateLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * Where this LMS instance is running.
 * This is intentionally broad; we can add specific values as integrations land.
 */
export type LmsKind =
  | 'moodle'
  | 'wordpress_demo' // demo / fake LMS shell
  | 'wordpress_learndash'
  | 'wordpress_tutor'
  | 'wordpress_lifter'
  | 'wordpress_learnpress'
  | 'other';

/**
 * Basic position for a node on the canvas.
 * The editor can choose any coordinate system; this is just a placeholder.
 */
export interface DiagramPosition {
  x: number;
  y: number;
}

/**
 * Types of nodes we expect in templates.
 * This is mainly for styling and analytics; we don't enforce semantics here.
 */
export type DiagramNodeKind =
  | 'table'
  | 'entity'
  | 'service'
  | 'queue'
  | 'external_system'
  | 'actor'
  | 'other';

/**
 * A single node (table, service, etc.) in a diagram.
 * "locked" means the student cannot move/edit this node.
 */
export interface DiagramNode {
  id: string;
  label: string;
  kind: DiagramNodeKind;
  position: DiagramPosition;
  locked: boolean;
  /**
   * Free-form metadata for templates / analytics.
   * E.g. { isPrimaryKey: true } in a DB template-specific node.
   */
  meta?: Record<string, unknown>;
}

/**
 * Optional multiplicity/cardinality info for relationships.
 */
export interface DiagramMultiplicity {
  from: string; // e.g. "1", "0..*", "N"
  to: string;   // e.g. "N", "1", "0..1"
}

/**
 * A relationship/edge between two nodes.
 * "locked" means the student cannot change/delete this edge.
 */
export interface DiagramEdge {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  label?: string;
  locked: boolean;
  multiplicity?: DiagramMultiplicity;
  meta?: Record<string, unknown>;
}

/**
 * The full, structured state of a diagram: nodes + edges.
 * This is what gets stored in templates and student copies.
 */
export interface DiagramState {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

/**
 * A reusable starting point for assignments.
 * Templates live in the Template Library.
 */
export interface DiagramTemplate {
  id: string;
  slug: string;
  name: string;

  subject: TemplateSubject;
  level: TemplateLevel;

  /**
   * Short instructor-facing description (what this template is for).
   */
  description: string;

  /**
   * Optional student-facing instructions; can also be given in LMS text.
   */
  instructions?: string;

  /**
   * Tags to help filter/search in the Template Library.
   * e.g. ["normalisation", "junction-table", "db1"]
   */
  tags?: string[];

  /**
   * The actual diagram model with locked + editable parts encoded on nodes/edges.
   */
  diagram: DiagramState;

  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
}

/**
 * High-level lifecycle of a student submission.
 * "graded" is just "submitted + grade set".
 */
export type SubmissionStatus =
  | 'not_started'
  | 'in_progress'
  | 'submitted'
  | 'graded';

/**
 * Integrity flags attached to a submission.
 * This is a signal layer, not a verdict.
 */
export type IntegrityFlagCode =
  | 'very_fast_completion'
  | 'similar_to_others'
  | 'suspicious_pattern'
  | 'other';

export interface IntegrityFlag {
  code: IntegrityFlagCode;
  /**
   * Human-readable explanation, e.g.
   * "Completed in 7 seconds (median is 5 minutes)."
   */
  message: string;
}

/**
 * Summary of integrity-related info for a submission.
 */
export interface IntegritySummary {
  suspicious: boolean;
  flags: IntegrityFlag[];
  timeSpentSeconds?: number;
  similarityScore?: number; // 0..1 (1 = identical to reference/cluster)
  clusterId?: string;       // used to group near-identical submissions
}

/**
 * A course assignment that uses a single template.
 * Seen in Moodle / WP as "Diagrammable Assignment".
 */
export interface Assignment {
  id: string;
  lmsKind: LmsKind;
  lmsCourseId: string;
  /**
   * Optionally, the LMS-specific activity/lesson ID for back-references.
   */
  lmsActivityId?: string;

  templateId: string;

  title: string;
  description?: string;

  /**
   * Maximum points for grading; optional if ungraded practice.
   */
  maxPoints?: number;

  /**
   * ISO timestamps; the LMS may be the source of truth here.
   */
  dueAt?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Minimal identity we need for a learner from the perspective
 * of the Diagrammable backend.
 */
export interface LearnerIdentity {
  /**
   * Hashed stable identifier:
   * e.g. sha256(siteSalt + lmsStudentId).
   */
  studentHash: string;

  /**
   * Optional display name used only on the *client* side
   * (never sent to the external backend in privacy-conscious setups).
   */
  displayName?: string;
}

/**
 * A student-specific copy of a template for a given assignment.
 * This is effectively the "submission" object.
 */
export interface StudentCopy {
  id: string;
  assignmentId: string;
  learner: LearnerIdentity;

  /**
   * Current diagram state for this student.
   */
  diagram: DiagramState;

  status: SubmissionStatus;

  startedAt?: string;
  submittedAt?: string;
  gradedAt?: string;

  /**
   * Grade in raw points; actual weighting / percentages are left to the LMS.
   */
  grade?: number;

  /**
   * Short free-text comment from instructor to student.
   */
  instructorComment?: string;

  /**
   * Approximate time spent editing, in seconds.
   */
  timeSpentSeconds?: number;

  /**
   * Integrity summary (if computed).
   */
  integrity?: IntegritySummary;
}

/**
 * A lightweight view used to render rows in the Teacher Dashboard.
 * This can be derived from StudentCopy but is kept explicit for clarity.
 */
export interface SubmissionSummary {
  id: string;
  assignmentId: string;
  learner: LearnerIdentity;
  status: SubmissionStatus;
  submittedAt?: string;
  grade?: number;
  timeSpentSeconds?: number;
  integrity?: IntegritySummary;
}
