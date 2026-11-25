export interface ToastProps {
  message: string;
  tone?: "neutral" | "success" | "danger";
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;
