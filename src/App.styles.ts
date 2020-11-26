import styled, { createGlobalStyle } from 'styled-components';
import imgBG from './img/mi.jpg';

export const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
}

body {
    background-image: url(${imgBG});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
    color: #000;
}

.score {
    color: #333;
    font-size: 2 rem;
    margin: 0;
}

h1 {
    font-size: 4rem;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    text-align: center;
    margin: 2rem;
}

`;