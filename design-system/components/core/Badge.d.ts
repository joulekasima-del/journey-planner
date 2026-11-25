/**
 * Status pill for readiness, trust, booking and connectivity states.
 * Pairs color with a dot + label per the state principle — color never carries meaning alone.
 * Tones map to the approved semantic layer: success=Verified Blue, attention=Beacon Amber,
 * danger=Critical Red, info=Proposal Violet (in-progress/AI), neutral=Slate.
 */
export interface BadgeProps {
  tone?: "neutral" | "success" | "info" | "attention" | "danger";
  children: React.ReactNode;
  dot?: boolean;
}
export function Badge(props: BadgeProps): JSX.Element;
