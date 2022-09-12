import { CurrentPlaceProps } from "../../../../Components/SearchElements/SearchResultItem/types";

export type FavoriteItemPayloadProps = {
    city: string;
    country: string;
    placeKey: number;
} 

export interface FavoriteItemProps extends FavoriteItemPayloadProps {
    hr?: boolean;
}


export type FavItemStyleProps = {
    hr?: boolean;
}