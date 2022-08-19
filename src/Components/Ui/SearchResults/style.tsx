import styled from "styled-components";

export const StyledSearchResultsContainer = styled.div`
  margin-top: 24px;
  height: calc(100% - 48px);
  overflow: auto;

  @media (max-width: 1207px) {
    margin-top: 11px;
    height: calc(100% - 22px);
  }
  `;

export const StyledNoResultContainer = styled.div`
  padding: 64px 30px;
`;

