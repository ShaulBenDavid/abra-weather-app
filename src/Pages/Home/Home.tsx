import { useAppSelector } from "../../Redux/hooks";
import { selectSearchValue } from '../../Redux/Search/Search';
// Conponents
import EmptyHome from "./Components/EmptyHome";
import SearchFailed from "../../Components/Ui/SearchFailed";
// Styles
import * as S from "./style";

const Home = () => {
  const searchValue = useAppSelector(selectSearchValue)
  return (
    <S.HomeWrapper>
      {/* If home page empty */}
      {searchValue ? <S.HomeFailedSearch searchValue={searchValue} useCase="home" /> : <EmptyHome />}
    </S.HomeWrapper>
  );
};

export default Home;
