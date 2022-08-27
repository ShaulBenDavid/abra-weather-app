import { useEffect, useState } from "react";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  selectFavAlert,
  setFavAlert,
} from "../../Redux/Favorites/Favorites.redux";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectUser } from "../../Redux/User/User";

import { AbraGetApi, AbraPostApi } from "../Api/AbraApi";

import { FAV_ADDED_ALERT, FAV_REMOVED_ALERT } from "../../Utils/Constants";
// Types
import { CurrentPlaceProps } from "../../Components/Ui/SearchResultItem/types";
import { FavoritesProps } from "../../Pages/Favorites/types";

// delete or add fav from api
const UseFavorites = () => {
  // Alert
  const [currentCity, setCurrentCity] = useState<string>("");
  const currentUser = useAppSelector(selectUser);
  const client = useQueryClient();
  // Selectors
  const favAlert = useAppSelector(selectFavAlert);
  const dispatch = useAppDispatch();


    // ----==== Query getting data ====----
    const { isLoading, data }: UseQueryResult<FavoritesProps[] | [], Error> =
    useQuery<FavoritesProps[], Error>(
      ["Favorites"],
      async () => {
        const res = await AbraGetApi("/favorites/", currentUser?.access_token);
        return res.data.results;
      },
      {
        enabled: !!currentUser,
        cacheTime: 20 * (60 * 1000),
        staleTime: 20 * (60 * 1000),
      }
    );


  // -------===== Add or remove fav =======------
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
    // Show alert only for 4 second
    const timer = setTimeout(() => {
      dispatch(setFavAlert(''));
    }, 1000 * 4);
    return () => clearTimeout(timer);
  }, [addOrRemoveFavMutation.data]);

  return { UseHandleFav, favAlert, isLoading, data };
};

export default UseFavorites;
