import styled from "styled-components";

import ReactApexChart from "react-apexcharts";
import getMediaQuery from "../../../Utils/GetMediaQuery";

// Title
export const StyledChartTitle = styled.h2`
  color: ${({ theme }) => theme.white};
  margin-bottom: 24px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 36px;
  `}
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
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    height: 323px;
    -webkit-backdrop-filter:none;
    backdrop-filter: none;
    background-color: inherit;
    padding: 0;
    margin-bottom: 32px;
    z-index: 3;
  `}
`;

// Chart item

export const StyledApexChart = styled(ReactApexChart)`
  position: absolute;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%);
  top: 158px;

  svg:not(:root) {
    overflow: visible;
  }
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    top: 98px;
    z-index: 1;
  `}
`;
