import styled from "styled-components";

export const StyledSearchItemWrapper = styled.a`
  all: unset;
  display: flex;
  padding: 12px 36px;
  column-gap: 2px;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background-color: rgba(242, 242, 242, 0.8);
  }

  @media (max-width: 1207px) {
    padding: 12px 0;
  }
`;

export const StyledSearchCityName = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.5;
  color: ${({ theme }) => theme.secondary};
`;

export const StyledSearchCountryName = styled.p`
  font-size: 1.25rem;
  font-weight: normal;
  line-height: 1.5;
  color: ${({ theme }) => theme.fadeText};
`;
