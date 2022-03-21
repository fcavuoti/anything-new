import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,
  button {
    @import url('https://fonts.googleapis.com/css?family=Inter:200,400,700,900');
    font-family: 'Inter', sans-serif;
  }
  div {
    color: ${props => props.theme.darkGreen};
  }
  h1 {
    color: ${props => props.theme.darkGreen};
    font-size: 3rem;
    font-weight: 900; // extra bold
    margin: 0;
  }
  h2 {
    color: ${props => props.theme.darkGreen};
    font-size: 1.7rem;
    font-weight: 700; // bold
    margin: 0;
  }
  h3 {
    color: ${props => props.theme.darkGreen};
    font-size: 1.3rem;
    font-weight: 700; // bold
    margin: 0;
  }
  h4 {
    color: ${props => props.theme.darkGreen};
    font-size: 1rem;
    font-weight: 700; // bold
    margin: 0;
  }
  h5 {
    color: ${props => props.theme.darkGreen};
    font-size: 1rem;
    font-weight: 400; // normal
    margin: 0;
  }
  h6 {
    color: ${props => props.theme.darkGreen};
    font-size: 0.8rem;
    font-weight: 700; // bold
    margin: 0;
  }
  p {
    color: ${props => props.theme.darkGreen};
    font-size: 1rem;
    font-weight: 200; // thin
    margin: 0;
  }
  b {
    color: ${props => props.theme.darkGray};
    font-size: 1rem;
    font-weight: 700; // bold
    margin: 0;
  }
`

export const theme = {
  black: "#000000",
  white: "#FFFFFF",
  twtBlue: "#1DA1F2",
  cuBlue: "#9BDDFF",
  specBlue: "#496784",
  shaftBlue: "#A8CFF3",
  silk: "#E8CCBF",
  darkGreen: "#082D0F",
  mediumGray: "#AAAAAA",
  lightGreen: "#17B890",
  yellow: "#FFCB77",
  red: '#EC6C52',
  shadow: "rgba(0, 0, 0, 0.3) 0 0 10px",
  grayBorder: "border: 1px #DDDDDD solid; border-radius: 10px;",
  borderRadius: "10px",
};
