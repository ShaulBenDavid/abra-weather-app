type SearchVariant = "favSearch" | "mainSearch";

export type SearchBoxProps = {
  variant: SearchVariant;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type SearchBoxStyleProps = {
  variant: SearchVariant;
};
