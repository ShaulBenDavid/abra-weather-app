import CityImg from "../../../../Assets/city.svg";
// Components
import SearchBox from "../../../../Components/Ui/SearchBox";
import { IconArrow } from "../../../../Components/Ui/IconsComponent";
// Types
import { MobileSearchProps } from "./types";
// Styles
import * as S from "./style";

const MobileSearch: React.FC<MobileSearchProps> = ({ onClick }) => {
  return (
    <S.MobileSearchWrapper>
      {/* Container */}
      <S.MobileSearchContainer>
        <IconArrow onClick={onClick}/>
        {/* Search box */}
        <S.SearchBoxWrapper>
          <SearchBox />
        </S.SearchBoxWrapper>
        {/* Search result */}
        <S.SearchResults>
          {/* Emppty search */}
          <S.EmptySearch>
            <S.CityImage src={CityImg} alt="City img" />
            <S.EmptySearchP>Please search any city in the search button.</S.EmptySearchP>
          </S.EmptySearch>
        </S.SearchResults>
      </S.MobileSearchContainer>
    </S.MobileSearchWrapper>
  );
};

export default MobileSearch;
