import { useAppSelector } from "../../Redux/hooks";
import { selectSearchValue } from '../../Redux/Search/Search';
// Conponents
import EmptyHome from "./Components/EmptyHome";
import SearchFailed from "../../Components/Ui/SearchFailed";
// Styles
import * as S from "./style";
import CurrentWeather from "../../Components/WeatherElement/CurrentWeather";

const Home = () => {
  const searchValue = useAppSelector(selectSearchValue)
  return (
    <S.HomeWrapper>
      {/* If home page empty */}
      {searchValue ? <S.HomeFailedSearch searchValue={searchValue} useCase="home" /> : <EmptyHome />}
      {/* <CurrentWeather /> */}
    </S.HomeWrapper>
  );
};

export default Home;
