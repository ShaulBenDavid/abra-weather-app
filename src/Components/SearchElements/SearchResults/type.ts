import { SearchOptionsProps } from "../../../Features/Search/types";

export interface SearchResultsProps {
    searchOptions: SearchOptionsProps[];
    clearSearchBox: () => void;
    closeMobileSearch?: () => void;
}