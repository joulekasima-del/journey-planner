/** Compact label for categories, filters, and selected discovery criteria. */
export interface TagProps {
  children: React.ReactNode;
  tone?: "quiet" | "brand";
  onRemove?: () => void;
}
export function Tag(props: TagProps): JSX.Element;
