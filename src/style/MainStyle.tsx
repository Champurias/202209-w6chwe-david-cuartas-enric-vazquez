import { createGlobalStyle } from "styled-components";

const MainStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Coda, cursive;
}

h1,
h2 {
  margin:0;
}

button {
  cursor: pointer;
  padding: 10px 12px;
  border: none;
  font-family: inherit;
}
`;

export default MainStyle;
