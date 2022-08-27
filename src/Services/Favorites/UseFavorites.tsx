import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { useAppSelector } from "../../Redux/hooks";
import { selectUser } from "../../Redux/User/User";
import { AbraGetApi, AbraPostApi } from "../Api/AbraApi";
// Types
import { FavoritesProps } from "../../Pages/Favorites/types";
import { CurrentPlaceProps } from "../../Components/Ui/SearchResultItem/types";

const UseFavorites = () => {
  const currentUser = useAppSelector(selectUser);
  const client = useQueryClient();
  // ---- Query getting data ----
  const { isLoading, data }: UseQueryResult<FavoritesProps[] | [], Error> =
    useQuery<FavoritesProps[], Error>(
      ["Favorites"],
      async () => {
        const res = await AbraGetApi("/favorites/", currentUser?.access_token);
        return res.data.results;
      },
      {
        cacheTime: 20 * (60 * 1000),
        staleTime: 20 * (60 * 1000),
      }
    );

  // ------- Add or remove fav ------
  const addOrRemoveFavMutation: UseMutationResult<
    CurrentPlaceProps,
    Error,
    CurrentPlaceProps | null
    > = useMutation<CurrentPlaceProps, Error, CurrentPlaceProps | null>({
      mutationFn: (payload) => {return AbraPostApi("/favorites/", payload, currentUser?.access_token)},
      onSuccess: () => client.invalidateQueries(["Favorites"]),
    });
  
  const handleFav = async (payload: CurrentPlaceProps) => {
    console.log(payload)
    const parsePayload = {
      key: payload.placeKey,
      city: payload.city,
      country: payload.country,
    }
    addOrRemoveFavMutation.mutate(parsePayload);
  }

  return { isLoading, data, handleFav };
};

export default UseFavorites;
