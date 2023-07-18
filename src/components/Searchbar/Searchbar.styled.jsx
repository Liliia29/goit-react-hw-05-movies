import styled from "@emotion/styled";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledField = styled(Field)`
    height: 35px;
    border: 1px solid #e5beec;
    outline: none;
    min-width: 220px;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 16px;
    padding: 2px 7px;

    transition: border-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

    &:focus{
    border-color: #2a2f4f;
    }
`;

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    min-width: 100px;
    height: 36px;
    padding: 8px 10px;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    cursor: pointer;

    font-size: 16px;
    font-weight: 600;
    background-color: #e5beec;

    transition: background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1),
    color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);

    &:hover{
        background-color: #2a2f4f;
        color: orangered;
        }
`;