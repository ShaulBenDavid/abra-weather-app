import { useQueryClient } from "@tanstack/react-query";

import UseFavorites from "./UseFavorites";
import { setValidationField } from "../../Redux/ActionValidation/ActionValidation.redux";
//Types
import { ChoosingFavParams, setChoosingFav } from "../../Redux/Favorites/Favorites.redux";
import { FavoritesProps } from "../../Pages/Favorites/types";
import { useDispatch } from "react-redux";

const ChangeFavorites = () => {
  const client = useQueryClient();
  const dispatch = useDispatch();
  // Favorites action
  const { UseHandleFav } = UseFavorites();

    // ---- Check if the favorite exist ---- 
  const checkExistingFavorite = (favotriteItem: ChoosingFavParams) => {
        // Qurey items
        client.invalidateQueries(["Favorites"]);
        // Get current favorites
        const currentFavs: FavoritesProps[] | undefined = client.getQueryData([
          "Favorites",
        ]);
        
        // Check if the current place is in the favorites
        const existingFav = currentFavs?.find(
          (fav) => fav.key === favotriteItem.placeKey
        );
    return existingFav;
  }

  // ---- Handle removing or adding of favorite ----
  const UseChangeFavorite = (favotriteItem: ChoosingFavParams): void => {
    // ------ If fav exist open window to validate delete ------
    // Window will open on page layout
    if (checkExistingFavorite(favotriteItem)) {
      const payload = {
        title: "Remove from favorites",
        p: `Are you sure you want to remove ${favotriteItem.city}  from favorites list?`,
        primaryButton: "Yes, remove",
        secondaryButton: "Keep it",
      };
      dispatch(setChoosingFav(favotriteItem));
      dispatch(setValidationField(payload));
      return;
    }

    // else add fav
    UseHandleFav(favotriteItem);
    return;
  };
  return { UseChangeFavorite, checkExistingFavorite } as const;
};

export default ChangeFavorites;
