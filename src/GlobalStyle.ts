import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #807ece 0%, #8e7ece 100%);

  display: flex;
  justify-content: center;
  align-items: center;
    }
`;
