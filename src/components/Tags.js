import React from "react";
import styled from 'styled-components/macro';
import { GlobalStyles, theme } from "../util/GlobalStyles";

const NAME_TO_COLOR = {
    "javascript": theme.yellow,
    "react": theme.red,
    "pagebuilder": theme.specBlue,
    "node": theme.lightGreen,
    "mongodb": theme.darkGreen,
    "bootstrap": theme.cuBlue,
    "mysql": theme.silk,
    "python": theme.mediumGray,
    "embed api": theme.shaftBlue
}

const TagWrapper = styled.div`
    width: fit-content;
    max-width: 70%;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 1rem;
    //background-color: yellow;
`;

const Tag = styled.div`
    width: fit-content;
    border-radius: 10px;
    padding: 0.1rem 0.3rem;
    margin: .2rem;
    color: ${props => props.theme.white};
    background-color: ${props => props.color};
`;


const Tags = (props) => {
    return (
        <>
        <TagWrapper>
        {props.tagNames.map((tag) => (
            <Tag color={NAME_TO_COLOR[tag]}> {tag} </Tag>
        ))}
        </TagWrapper>
        </>
    );
}

export default Tags;
