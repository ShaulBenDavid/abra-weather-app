// Components
import { IconArrow } from "../../../../Components/Ui/IconsComponent";
// Types
import { MobileSearchProps } from "./types";
// Styles
import * as S from "./style";
import Search from "../../../../Features/Search";

const MobileSearch: React.FC<MobileSearchProps> = ({ onClick }) => {
  return (
    <S.MobileSearchWrapper>
      {/* Container */}
      <S.MobileSearchContainer>
        <S.ArrowButton onClick={onClick}>
          <IconArrow />
        </S.ArrowButton>
        {/* Search feature */}
        <Search />
      </S.MobileSearchContainer>
    </S.MobileSearchWrapper>
  );
};

export default MobileSearch;
