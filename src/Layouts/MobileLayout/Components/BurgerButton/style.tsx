import styled from "styled-components";

// Burger button
export const StyledBurgerButton = styled.button`
    all: unset;
    position: fixed;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 2;
    
    span {
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.white};
        box-shadow: inset -1px 1px 2px 0 rgba(255, 255, 255, 0.25), -2px 3px 1px 0 rgba(0, 0, 0, 0.1);
    }
`