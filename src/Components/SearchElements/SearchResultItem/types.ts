import { SearchOptionsProps } from "../../../Features/Search/types";

export const LIST_ITEM_HEIGHT: number = 54;

export interface SearchItemProps extends SearchOptionsProps {
    placeKey: number;
    idx: number;
    active?: boolean
    handleClick: (arg: number) => void;
    setHovered: (arg: number | undefined) => void;
};

export interface SearchItemStyledProps {
    active?: boolean;
};

export type CurrentPlaceProps = {
    placeKey?: number;
    city: string;
    country: string;
    key?: number;
    status?: number;
}

