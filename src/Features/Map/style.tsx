import styled from "styled-components";
// Components
import Button from "../../Components/Ui/Button";

export const ContainerStyle = {
  width: "100%",
  height: "100vh",
};

// Map wrapper
export const StyledMapWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: -webkit-fill-available;
  z-index: 1;
`;

// Styled layout button
export const StyledlayoutButton = styled(Button)`
  width: 112px;
  height: 46px;
  position: fixed;
  bottom: 116px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  color: ${({ theme }) => theme.black};
`;
