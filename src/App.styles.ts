import styled, { createGlobalStyle } from "styled-components";
import imgBG from "./img/mi.jpg";

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
    font-size: 1.25rem;
}

* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

button {
    font-size: 1.25rem;
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
    margin: .5rem;
    padding: 1rem;
    background: #fff;
    border-radius: .5rem;
  }

  h1 {
    font-size: 6rem;
    background-image: linear-gradient(180deg, #fff, #f24e04);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #f24e04);
    text-align: center;
    margin: 2rem;
  }
`;

export const QuestionCardWrapper = styled.div`
  padding: 2rem;
  background: #ffffff;
  border-radius: 0.5rem;
`;
