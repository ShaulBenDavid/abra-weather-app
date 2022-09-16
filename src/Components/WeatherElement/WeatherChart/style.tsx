import styled from "styled-components";

// Title
export const StyledChartTitle = styled.h2`
  color: ${({ theme }) => theme.white};
`;

// Chart container
export const StyledChartContainer = styled.div`
  width: 100%;
  height: 602px;
  border-radius: 20px;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.3);
  padding: 16px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
