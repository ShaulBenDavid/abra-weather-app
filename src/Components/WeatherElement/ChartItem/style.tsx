import styled from "styled-components";
import getMediaQuery from "../../../Utils/GetMediaQuery";
// Components
import { IconSunFlat, IconMoonFlat } from "../../Ui/IconsComponent";
import { CHART_ITEM_WIDTH, CHART_ITEM_WIDTH_MOBILE } from "./types";

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
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    width: ${CHART_ITEM_WIDTH_MOBILE};
    /* Hover */
  &:hover {
    background-color: #f2f2f2;
  }
  `}
`;

// Chart item time section
export const StyledChartItemTime = styled.div`
  margin-top: 19px;
  color: ${({ theme }) => theme.white};
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    margin-top: 16px;
  `}
`;

// Chart item day
export const StyledChartItemDay = styled.h3`
  font-weight: 500;
  line-height: 1.25;
  font-size: 1.5rem;
  margin-bottom: 6px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 1px;
    font-size: 1.125rem;
  `}
`;

// Chart item date
export const StyledChartItemDate = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 24px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    color: ${({ theme }) => theme.gray};
    font-size: 0.875rem;
    margin-bottom: 23px;
  `}
`;

// ---- Icons ----
export const StyledDayIcon = styled(IconSunFlat)`
  width: 35px;
  height: 35px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    width: 16px;
    height: 16px;
  `}
`;
export const StyledNightIcon = styled(IconMoonFlat)`
  width: 35px;
  height: 35px;
  margin-bottom: 34px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    width: 16px;
    height: 16px;
    margin-bottom: 15px;
  `}
`;
