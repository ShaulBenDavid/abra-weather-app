import { useAppSelector } from "../../Redux/hooks";
import { selectSearchValue } from "../../Redux/Search/Search";
import useMediaQuery from "../../Hooks/useMediaQuery";
// Conponents
import EmptyHome from "./Components/EmptyHome";
import SearchFailed from "../../Components/Ui/SearchFailed";
import CurrentWeather from "../../Components/WeatherElement/CurrentWeather";
import Button from "../../Components/Ui/Button";

// Styles
import * as S from "./style";
import { IconFavOutline } from "../../Components/Ui/IconsComponent";

const Home = () => {
  // Media query
  const matches = useMediaQuery("(min-width: 1207px)");

  const searchValue = useAppSelector(selectSearchValue);
  return (
    <S.HomeWrapper>
      {/* If home page empty */}
      {/* {searchValue ? <S.HomeFailedSearch searchValue={searchValue} useCase="home" /> : <EmptyHome />} */}
      {/* ----- Current weather section */}
      <S.CurrentWeatherSection>
        <CurrentWeather />
        {/* LayOut for desk or mobile */}
        {!matches ? (
          <S.FavLightIconButton>
            <IconFavOutline style={{ width: "30px", height: "30px" }} />
          </S.FavLightIconButton>
        ) : (
          <S.FavAddingButton variant="white">
            <S.FavIconButton />
            Add to favorites
          </S.FavAddingButton>
        )}
      </S.CurrentWeatherSection>
    </S.HomeWrapper>
  );
};

export default Home;
