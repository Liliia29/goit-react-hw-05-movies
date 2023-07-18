import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NFContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    padding: 0 20px;
    margin: 20px auto 0;
`;

export const StyledHomeLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    min-width: 150px;
    padding: 7px 10px;
    border-radius: 5px;

    font-size: 25px;
    font-weight: 500;
    background-color: black;
`;