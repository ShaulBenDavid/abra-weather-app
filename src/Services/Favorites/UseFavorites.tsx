import { useEffect, useState } from "react";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectUser } from "../../Redux/User/User";
import { AbraPostApi } from "../Api/AbraApi";

import { FAV_ADDED_ALERT, FAV_REMOVED_ALERT } from "../../Utils/Constants";
// Types
import { CurrentPlaceProps } from "../../Components/Ui/SearchResultItem/types";
import {
  selectFavAlert,
  setFavAlert,
} from "../../Redux/Favorites/Favorites.redux";

// delete or add fav from api
const UseFavorites = () => {
  // Alert
  const [currentCity, setCurrentCity] = useState<string>("");
  const currentUser = useAppSelector(selectUser);
  const client = useQueryClient();
  // Selectors
  const favAlert = useAppSelector(selectFavAlert);
  const dispatch = useAppDispatch();
  // ------- Add or remove fav ------
  const addOrRemoveFavMutation: UseMutationResult<
    CurrentPlaceProps,
    Error,
    CurrentPlaceProps | null
  > = useMutation<CurrentPlaceProps, Error, CurrentPlaceProps | null>({
    mutationFn: (payload) => {
      payload && setCurrentCity(payload.city);
      return AbraPostApi("/favorites/", payload, currentUser?.access_token);
    },
    onSuccess: () => {
      client.invalidateQueries(["Favorites"]);
    },
  });

  const UseHandleFav = async (payload: CurrentPlaceProps) => {
    const parsePayload = {
      key: payload.placeKey,
      city: payload.city,
      country: payload.country,
    };
    addOrRemoveFavMutation.mutate(parsePayload);
  };
  // Alert for delete and adding fav
  useEffect(() => {
    if (addOrRemoveFavMutation.data?.status === 204) {
      dispatch(setFavAlert(`${currentCity}${FAV_REMOVED_ALERT}`));
      console.log("remove");
    }
    if (addOrRemoveFavMutation.data?.status === 200) {
      dispatch(setFavAlert(`${currentCity}${FAV_ADDED_ALERT}`));
    }
    // console.log(favAlert)
  }, [addOrRemoveFavMutation.data]);

  return { UseHandleFav, favAlert };
};

export default UseFavorites;
