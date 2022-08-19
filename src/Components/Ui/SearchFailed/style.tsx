import styled from "styled-components";

export const StyledNotExistResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCityDrew = styled.img`
  width: 120px;
  height: 120px;
`;

export const StyledP = styled.p`
  margin-top: 24px;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
`;
