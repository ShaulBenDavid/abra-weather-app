import { SearchOptionsProps } from "../../../Features/Search/types";

export interface SearchItemProps extends SearchOptionsProps {
    value: any;
};

export type SearchItemActionProps = {
    value?: string;
    city: string;
    country: string;
}