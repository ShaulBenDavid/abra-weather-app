import { useEffect, useState } from "react";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  ChoosingFavParams,
  selectFavAlert,
  setFavAlert,
} from "../../Redux/Favorites/Favorites.redux";

import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { logOut, selectUser } from "../../Redux/User/User.redux";

import { AbraGetApi, AbraPostApi } from "../Api/AbraApi";

// Types
import {
  FAVORITES_END_POINT_URL,
  FAV_ADDED_ALERT,
  FAV_REMOVED_ALERT,
} from "../../Utils/Constants";
import { CurrentPlaceProps } from "../../Components/SearchElements/SearchResultItem/types";
import { FavoritesProps } from "../../Pages/Favorites/types";

interface Error {
  response: { status: number };
}
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
        const res = await AbraGetApi(
          FAVORITES_END_POINT_URL,
          currentUser?.access_token
        );
        return res.data.results;
      },
      {
        enabled: !!currentUser,
        cacheTime: 20 * (60 * 1000),
        staleTime: 20 * (60 * 1000),
        onError: (err: Error) => {
          if (err.response.status === 401) {
            dispatch(logOut());
          }
        },
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
      return AbraPostApi(
        FAVORITES_END_POINT_URL,
        payload,
        currentUser?.access_token
      );
    },
    onSuccess: () => {
      client.invalidateQueries(["Favorites"]);
    },
    onError: (err: Error) => {
      if (err.response.status === 401) {
        dispatch(logOut());
      }
    },
  });

  const UseHandleFav = async (payload: ChoosingFavParams) => {
    const parsePayload: CurrentPlaceProps = {
      key: payload.placeKey,
      city: payload.city,
      country: payload.country,
    };
    addOrRemoveFavMutation.mutate(parsePayload);
  };
  // Alert for delete and adding fav
  useEffect(() => {
    // Show alert only for 4 second
    const timer = setTimeout(() => {
      dispatch(setFavAlert(""));
      return;
    }, 1000 * 4);
    // Removed
    if (addOrRemoveFavMutation.data?.status === 204) {
      dispatch(setFavAlert(`${currentCity}${FAV_REMOVED_ALERT}`));
      return () => clearTimeout(timer);
    }
    // Added
    if (addOrRemoveFavMutation.data?.status === 200) {
      dispatch(setFavAlert(`${currentCity}${FAV_ADDED_ALERT}`));
      return () => clearTimeout(timer);
    }
  }, [addOrRemoveFavMutation.data]);

  return { UseHandleFav, favAlert, isLoading, data };
};

export default UseFavorites;
