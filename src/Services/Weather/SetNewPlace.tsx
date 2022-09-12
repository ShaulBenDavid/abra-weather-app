import { useAppDispatch } from "../../Redux/hooks";
import { setSearchChoice } from "../../Redux/Search/Search";
import { useNavigate } from "react-router-dom";
// Types
import { CurrentPlaceProps } from "../../Components/SearchElements/SearchResultItem/types";


const SetNewPlace = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const setCurrentPlace = (payload: CurrentPlaceProps) => {
        // Set new weather place on the home
        dispatch(setSearchChoice(payload));
        navigate('/');
        return;
    }
    return { setCurrentPlace };
}

export default SetNewPlace;