import { FavoritesProps } from "../../Pages/Favorites/types";

export type SearchOptionsProps = {
  country: string;
  city: string;
  key: number;
};

export interface SearchProps {
  favoriteData?: FavoritesProps[];
}
