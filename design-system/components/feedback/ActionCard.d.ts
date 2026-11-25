/**
 * Intentional addition — not from a source component inventory (none exists), but a
 * directly-documented locked pattern (growth-design-adaptation-report.md, JP-023):
 * "what happened / why it matters / what to do / current status" for booking, readiness,
 * offline, and route-conflict messaging.
 */
export interface ActionCardProps {
  what: string;
  why: string;
  status?: string;
  tone?: "attention" | "danger" | "info" | "success";
  actionLabel?: string;
  onAction?: () => void;
}
export function ActionCard(props: ActionCardProps): JSX.Element;
