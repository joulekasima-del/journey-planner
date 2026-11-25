/** Circular icon-only button; always requires an accessible label. */
export interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  size?: number;
  active?: boolean;
  onClick?: () => void;
}
export function IconButton(props: IconButtonProps): JSX.Element;
