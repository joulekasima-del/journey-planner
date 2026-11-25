/**
 * Primary interactive action. Pill-shaped per JP brand geometry.
 */
export interface ButtonProps {
  /** Visual treatment. primary = filled Canopy Green, secondary = outlined, ghost = text-only, danger = destructive actions. */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
