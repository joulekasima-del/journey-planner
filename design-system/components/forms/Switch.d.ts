export interface SwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}
export function Switch(props: SwitchProps): JSX.Element;
