import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    padding: 8px 10px;
    column-gap: 5px;

    border-radius: 5px;

    font-size: 17px;
    font-weight: 500;
    background-color: #e5beec;

    &:hover{
    color: aqua;
    background-color: aliceblue;
    }
`;

export const MovieContainer = styled.div`
    display: flex;
    column-gap: 20px;
    margin: 15px 0;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

export const Overview = styled.p`
    line-height: 1.3;
`;

export const GenresList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const Genre = styled.li`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #fde2f3;

    padding: 7px 10px;
    border-radius: 5px;
`;

export const AdditionalInfo = styled.h3`
    margin-bottom: 15px;
`;

export const AddInfoList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
`;
