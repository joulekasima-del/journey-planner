export interface RadioProps {
  label: string;
  checked: boolean;
  onChange?: () => void;
  name?: string;
}
export function Radio(props: RadioProps): JSX.Element;
