// Types
import { EmptyPageProps } from "./types";
// Styles
import * as S from "./style";

const EmptyPage: React.FC<EmptyPageProps> = ({ src, title, p }) => {
  return (
    <S.EmptyPageContainer>
      <S.WeatherMapImg src={src} alt="Weather map" />
      <S.EmptyPageTitle>{title}</S.EmptyPageTitle>
      <S.EmptyPageP>
        {p}
      </S.EmptyPageP>
    </S.EmptyPageContainer>
  );
};

export default EmptyPage;
