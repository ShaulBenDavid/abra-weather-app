// Conponents
// Styles
import EmptyHome from "./Components/EmptyHome";
import * as S from "./style";

const Home = () => {
  return (
    <S.HomeWrapper>
      {/* If home page empty */}
      <EmptyHome />
    </S.HomeWrapper>
  );
};

export default Home;
