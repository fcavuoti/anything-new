import React from "react";
import styled from 'styled-components/macro';
import TweetEmbed from 'react-tweet-embed';
import ProjectCard from "../components/ProjectCard.js";
import cds from "../assets/cds.png";
import lionclubs from "../assets/lionclubs.png";
import theshaft from "../assets/theshaft.png";
import whs from "../assets/whs.png";
import shaftlogo from "../assets/shaft-logo.png";
import twtsign from "../assets/tweet-sign.png";
import spfsign from "../assets/spotify-sign.png";
import heart from "../assets/heart.png";


const MainWrapper = styled.div`
    width: 100vw;
    //height: 100vh;
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    //background-color: ${props => props.theme.silk};
`;

const RowOne = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    //background-color: pink;
`;

const ColOne = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    //background-color: pink;
`;

const IntroBox = styled.div`
    width: 50rem;
    height: fit-content;
    margin: 3rem 0 0 4rem;
    padding: 4rem 0 0 3rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
    text-align: bottom;
    border-radius: 10px;
    background-color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.lightGreen};
`;

const TextLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: .6rem;

    &>img {
        width: 7rem;
        padding-left: 1rem;
        margin: 0;
        align-self: center;
    }
`;

const PronounsBox = styled.h5`
    margin: 0 .7rem;
    font-size: 1.5rem;

    &>a {
        color: inherit;
        text-decoration: none;
    }

    &:hover {
        border-bottom: 2px solid ${props => props.theme.yellow};
    }
`;

const OrgBox = styled.h2`
    background-color: ${props => props.color};
    margin: 0 .7rem;
    opacity: 80%;
    padding: 0.3rem;
    border-radius: 10px;
    color: ${props => props.theme.white};
    transition: ease-in-out 1s;

    &.first{
        opacity: 100%;
        //margin-left: 0;
    }

    &.last{
        margin-right: 0;
    }

    &:hover{
        animation: bounce 0.5s;
        animation-direction: alternate;
        animation-timing-function: translateY(.005, .5, .01, .5);
        animation-iteration-count: infinite;
}
`;

const OrgLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

const SignRow = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    padding-top: 3rem;
    flex-direction: row;
    //background-color: pink;
    align-items: space-between;
`;

const SignBox = styled.div`
    border-radius: 10px;
    border: 1px solid ${props => props.theme.lightGreen};
    height: fit-content;

    &.left {
        width: 12rem;
        margin-top: auto;
        margin-left: 4rem;
    }

    &.right {
        width: 15rem;
        margin-top: 0;
        margin-left: auto;
    }
`;

const Sign = styled.img`
    border-radius: 10px;
    width: inherit;
    object-fit: cover;
`;

const ScrollBox = styled.div`
    height: fit-content;
    padding: .5rem 1rem;
    margin-left: 20%;
    border-radius: 10px;
    border: none;
    background-color: ${props => props.theme.lightGreen};
    justify-content: center;
    color: ${props => props.theme.white};

    animation: bounce 0.5s;
    animation-direction: alternate;
    animation-timing-function: translateY(.005, .5, .01, .5);
    animation-iteration-count: infinite;

    &.center{
        margin: 2rem 0 5rem 0;
    }
`;

const SpotifyBox = styled.div`
    width: 60%;
    align-self: flex-start;
    margin-left: 8rem;
    margin-top: 1rem;
    opacity: 93%;
`;

const TweetBox = styled.div`
    width: 20%;
    margin: 2.5rem 4rem 0 1.5rem;
    border-radius: 10px;
    opacity: 90%;
`;

const RowTwo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 5rem;
`;

const ProjectsWrapper = styled.div`
    width: 80%;
    //background-color: ${props => props.theme.lightGreen};
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ProjectsTitle = styled.h2`
    //background-color: ${props => props.theme.yellow};
`;


const Main = () => {
    return (
        <div className="App">
            <MainWrapper>
                <RowOne>
                    <ColOne>
                        <IntroBox>
                            <TextLine>
                                <h1>hi! i'm francesca</h1>
                                <PronounsBox><a href="https://mypronouns.org/what-and-why">[they/she]</a></PronounsBox>
                            </TextLine>
                            <TextLine>
                                <h2>student, software engineer at</h2>
                                <OrgBox color={props => props.theme.cuBlue} className="first">
                                    <OrgLink href="https://twitter.com/Columbia">columbia</OrgLink>
                                </OrgBox>
                                <h2> + </h2>
                                {/* <OrgBox color={props => props.theme.twtBlue}>
                                    <OrgLink href="https://twitter.com/TwitterEng">twitter</OrgLink>
                                </OrgBox>
                                <h2> + </h2> */}
                                <OrgBox color={props => props.theme.specBlue} className="last">
                                    <OrgLink href="https://twitter.com/ColumbiaSpec">spec</OrgLink>
                                </OrgBox>
                                <h2>.</h2>
                                <Sign src={heart}></Sign>
                            </TextLine>
                            <TextLine>
                                {/* <OrgBox color={props => props.theme.lightGreen} className="first">
                                    <OrgLink href="https://twitter.com/ColumbiaSpec">anything-new</OrgLink>
                                </OrgBox>
                                <h2>is where i ramble about movies</h2> */}
                                
                            </TextLine>
                        </IntroBox>
                        <SignRow>
                            <SignBox className="left">
                                {/* <p>very cool tweet to check out</p> */}
                                <Sign  src={spfsign}></Sign>
                            </SignBox>
                            <ScrollBox>scroll to see more</ScrollBox>
                            <SignBox className="right">
                                <Sign  src={twtsign}></Sign>
                            </SignBox>
                        </SignRow>
                        <SpotifyBox>
                            <iframe
                                style={{borderRadius:"10px"}}
                                src="https://open.spotify.com/embed/track/3W2ZcrRsInZbjWylOi6KhZ?utm_source=generator&theme=0"
                                width="100%"
                                height="80"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            >
                            </iframe>
                        </SpotifyBox>
                    </ColOne>
                    <TweetBox>
                        <TweetEmbed tweetId="1498417730298523652" options={{theme: 'dark', dnt: 'true'}}/>
                    </TweetBox>
                </RowOne>
        
                <RowTwo>
                    <ProjectsTitle>work</ProjectsTitle>
                    <ProjectsWrapper>
                        <ProjectCard 
                            title="the doordle" img={shaftlogo}
                            color={props => props.theme.shaftBlue}
                            details="designed and built a wordle-style game for doordash"
                            url="https://doordash.columbiaspectator.com"
                            tagNames={["figma", "javascript", "react", "mongodb"]}
                        />
                        <ProjectCard 
                            title="theShaft" img={shaftlogo}
                            color={props => props.theme.shaftBlue}
                            details="providing the Columbia community with real time info about housing options"
                            url="https://theshaft.info"
                            tagNames={["javascript", "react", "bootstrap", "mysql"]}
                        />
                        <ProjectCard
                            title="Columbia Daily Spectator" img={cds}
                            details="largest independent student-run daily media publication on campus"
                            url="https://columbiaspectator.com"
                            tagNames={["javascript", "react", "node", "pagebuilder"]}
                        />
                        <ProjectCard
                            title="Women's History Month" img={whs}
                            details="special edition for women's history month 2021"
                            url="https://columbiaspectator.com/se"
                            tagNames={["javascript", "react", "mongodb"]}
                        />
                        <ProjectCard
                            title="LionClubs" color={props => props.theme.darkGreen}
                            details="aggregating 200+ student organizations and clubs on campus"
                            url="https://lionclubs.info"
                            tagNames={["javascript", "python", "embed api"]}
                        />
                        <ProjectCard
                            title="QuAD" color={props => props.theme.darkGreen}
                            details="automating affinity diagramming with large language models"
                            url="https://lionclubs.info"
                            tagNames={["python", "pytorch", "BERT", "graph theory", "clustering"]}
                        />
                    </ProjectsWrapper>
                    <ScrollBox className="center">scroll to see more</ScrollBox>
                </RowTwo>
                
            </MainWrapper>
        </div>
    );
}

export default Main
