import styled from "styled-components";
// Components
import { IconSunFlat, IconMoonFlat } from "../../Ui/IconsComponent";
import { CHART_ITEM_WIDTH } from "./types";

// Chart item container
export const StyledChartItemContainer = styled.div`
  height: 100%;
  width: ${CHART_ITEM_WIDTH};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  /* Hover */
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
  }
`;

// Chart item time section
export const StyledChartItemTime = styled.div`
  margin-top: 19px;
  color: ${({ theme }) => theme.white};
`;

// Chart item day
export const StyledChartItemDay = styled.h3`
  font-weight: 500;
  line-height: 1.25;
  font-size: 1.5rem;
  margin-bottom: 6px;
`;

// Chart item date
export const StyledChartItemDate = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 24px;
`;

// ---- Icons ----
export const StyledDayIcon = styled(IconSunFlat)`
  width: 35px;
  height: 35px;
`;
export const StyledNightIcon = styled(IconMoonFlat)`
  width: 35px;
  height: 35px;
  margin-bottom: 34px;
`;
