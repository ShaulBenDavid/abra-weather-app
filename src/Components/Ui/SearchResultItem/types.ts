import { SearchOptionsProps } from "../../../Features/Search/types";

export interface SearchItemProps extends SearchOptionsProps {
    placeKey: number;
    clearSearchBox: () => void;
    closeMobileSearch?: () => void;
};

export type CurrentPlaceProps = {
    placeKey?: number;
    city: string;
    country: string;
    key?: number;
    status?: number;
}