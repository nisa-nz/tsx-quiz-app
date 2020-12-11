import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
}

body {

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
    margin: 2rem;
  }
`;

export const QuestionCardWrapper = styled.div`
  padding: 2rem;
  background: #ffffff;
  border-radius: 0.5rem;
`;
