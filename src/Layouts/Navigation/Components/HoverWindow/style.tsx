import styled from "styled-components";
// Wrapper
export const StyledWindowHoverWrapper = styled.span`
    position: absolute;
    bottom: -200%;
    left: 50%;
    transform: translateX(-50%);
`;
// Window
export const StyledWindow = styled.span`
      text-align: center;
      position: relative;
      white-space: nowrap;
      padding: 12px;
      font-weight: bold;
      font-size: 1.125rem;
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.secondary};
      box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1), 0 2px 60px 0 rgba(0, 0, 0, 0.3);
      border-radius: 5px;
`;
// Arrow
export const StyledWindowArrow = styled.span`
    position: absolute;
    width: 30px;
    height: 30px;
    left: 50%;
    top: -30%;
    transform: translateX(-50%) rotate(45deg);
    background-color: ${({ theme }) => theme.white};
    border-radius: 5px 5px 90px 5px ;
`;