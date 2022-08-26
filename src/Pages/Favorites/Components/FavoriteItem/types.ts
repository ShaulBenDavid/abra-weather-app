import { CurrentPlaceProps } from "../../../../Components/Ui/SearchResultItem/types";

export interface FavoriteItemProps extends CurrentPlaceProps {
    hr?: boolean;
}

export type FavItemStyleProps = {
    hr?: boolean;
}