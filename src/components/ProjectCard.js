import React from "react";
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import Tags from "./Tags.js";

const Card = styled.div`
    width: 35%;
    background-color: ${props => props.theme.white};
    height: fit-content;
    padding: 1rem;
    margin: 2rem;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.lightGreen};
    display: flex;
    flex-direction: column;
    align-content: center;
    align-self: center;
`;

const Title = styled.div`
    font-size: 1.2rem;
    color: ${props => props.theme.lightGreen};
`;

const Logo = styled.img`
    height: 200px;
    width: fit-content;
    border: 1px solid ${props => props.theme.white};
    object-fit: contain;
    margin: 1rem auto;
`;

const ClubsLogo = styled.div`
  height: 100%;
  font-size: 8rem;
  font-weight: 500;

  svg {
    color: ${(props) => props.theme.red};
    transform: rotate(15deg);
  }

  b {
    font-weight: 900;
    color: ${(props) => props.theme.red};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
  
  @media screen and (max-width: 910px) {
    font-size: 1.5rem;
    padding-left: 0.5rem;
  }
`;

const Details = styled.p``;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.darkGreen};
    justify-content: space-between;
    font-weight: 700;
`;

const Ext = styled.a`
    color: ${props => props.theme.lightGreen};
    text-decoration: none;
    border-bottom: 2px solid ${props => props.theme.lightGreen};
`;


const ProjectCard = (props) => {
    return (
        <>
            <Card color={props.color}>
                <Title>{props.title}</Title>
                <Details>{props.details}</Details>
                <Tags tagNames={props.tagNames} />
                <Links>
                    <Ext href={props.url} target="_blank">live site 🌱</Ext>
                    <Ext href={props.url} target="_blank"> github repo 🐢</Ext>
                </Links>
            </Card>
        </>
    );
}

export default ProjectCard;
