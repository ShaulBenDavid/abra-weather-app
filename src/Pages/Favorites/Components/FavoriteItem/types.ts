import { CurrentPlaceProps } from "../../../../Components/SearchElements/SearchResultItem/types";

export interface FavoriteItemProps extends CurrentPlaceProps {
    hr?: boolean;
}

export type FavItemStyleProps = {
    hr?: boolean;
}