import { SearchOptionsProps } from "../../../Features/Search/types";

export interface SearchItemProps extends SearchOptionsProps {
    placeKey: number;
    clearSearchBox: () => void;
    closeMobileSearch?: () => void;
};

export type SearchItemActionProps = {
    placeKey: number;
    city: string;
    country: string;
}