import { SearchOptionsProps } from "../../../Features/Search/types";

export interface SearchItemProps extends SearchOptionsProps {
    placeKey: number;
};

export type SearchItemActionProps = {
    placeKey: number;
    city: string;
    country: string;
}