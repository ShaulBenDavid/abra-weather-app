import { useEffect } from "react"
import { useAppSelector } from "../../Redux/hooks"
import { selectUser } from "../../Redux/User/User"
import { GetFetchApi } from "../../Services/FetchApi"

const Favorites = () => {
  const currentUser = useAppSelector(selectUser);

  useEffect(() => {
    const getFav = async () => {
      const res = await GetFetchApi('/favorites/', currentUser?.token);
      console.log(res)
    }

    getFav();
  },[])
    return (
      <div>Favorites</div>
    )
  }
  
  export default Favorites