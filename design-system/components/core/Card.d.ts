/** Generic elevated surface — base for Journey cards, experience cards, and inspector panels. */
export interface CardProps {
  children: React.ReactNode;
  padding?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  /** solid = default flat surface. featured = flat Canopy Green surface with a soft contact shadow, for hero/feature surfaces only. */
  variant?: "solid" | "featured";
}
export function Card(props: CardProps): JSX.Element;
