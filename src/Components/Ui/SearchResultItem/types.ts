import { SearchOptionsProps } from "../../../Features/Search/types";

export interface SearchItemProps extends SearchOptionsProps {
    placeKey: number;
    idx: number;
    active?: boolean
    handleClick: (arg: CurrentPlaceProps) => void;
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