import { useQueryClient } from "@tanstack/react-query";

import UseFavorites from "./UseFavorites";
import { setChoosingFav, setFavValidation } from "../../Redux/Favorites/Favorites.redux";
//Types
import { FavoritesProps } from "../../Pages/Favorites/types";
import { useDispatch } from "react-redux";

const ChangeFavorites = () => {
    const client = useQueryClient();
    const dispatch = useDispatch()
  // Favorites action
  const { handleFav } = UseFavorites();
    
    // Check if the fav exist if is exist so it throw you a modal to validate delete
    // if he no exist it will add the fav
    const UseChangeFavorite = (favotriteItem: any): void => {

    
        // Get current favorites
        const currentFav: FavoritesProps[] | undefined = client.getQueryData([
            "Favorites",
        ]);
        // Check if the current place is in the favorites
        const existingFav = currentFav?.find(
            (fav) => fav.key === favotriteItem.placeKey
        );

        // ------ If fav exist open window to validate delete ------ 
        // Window will open on page layout
        if (existingFav) {
            console.log(1, existingFav);
            const payload = {
                title: "Remove from favorites",
                p: `Are you sure you want to remove ${favotriteItem.city}  from favorites list?`,
                primaryButton: "Yes, remove",
                secondaryButton: "Keep it",
            };
            dispatch(setChoosingFav(favotriteItem))
            dispatch(setFavValidation(payload));
            return;
        }

        // else add fav
        handleFav(favotriteItem);
        return;
    }
    return { UseChangeFavorite } as const;
};

export default ChangeFavorites;
