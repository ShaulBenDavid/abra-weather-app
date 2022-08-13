import styled from "styled-components";

export const MobileSearchWrapper = styled.div`
  width: 100%;
  height: 80vh;
`;

export const MobileSearchContainer = styled.div`
  width: 354px;
  margin: 0 auto;
`;

export const SearchBoxWrapper = styled.div`
  margin-top: 16px;
`;

export const SearchResults = styled.div``;

export const EmptySearch = styled.div`
  margin: 0 auto;
  margin-top: 103px;
  width: 270px;
  height: 174px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CityImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const EmptySearchP = styled.p`
  margin-top: 36px;
  font-size: 14px;
  line-height: 1.25;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
`;
