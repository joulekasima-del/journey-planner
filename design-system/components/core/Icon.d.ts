export type IconName = "verified" | "synced" | "syncing" | "connected" | "offline" | "route" | "ready" | "attention" | "selected" | "current";
/** Restrained-line icon set (24×24 grid, 1.75px stroke). Decorative only — always render aria-hidden and pair with a visible text label; never icon-only for meaningful content. */
export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}
export function Icon(props: IconProps): JSX.Element;
