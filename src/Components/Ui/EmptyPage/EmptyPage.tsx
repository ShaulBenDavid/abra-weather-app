// Types
import { EmptyPageProps } from "./types";
// Styles
import * as S from "./style";

const EmptyPage: React.FC<EmptyPageProps> = ({ src, title, p, children, className }) => {
  return (
    <S.EmptyPageContainer className={className}>
      <S.WeatherMapImg src={src} alt="Weather map" />
      {title && <S.EmptyPageTitle>{title}</S.EmptyPageTitle>}
      <S.EmptyPageP>
        {/* For error set children */}
        {p}{children}
      </S.EmptyPageP>
    </S.EmptyPageContainer>
  );
};

export default EmptyPage;
