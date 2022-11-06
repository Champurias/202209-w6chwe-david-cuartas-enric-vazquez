import { createGlobalStyle } from "styled-components";

const MainStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Coda, cursive;
}

button {
  cursor: pointer;
  padding: 8px 12px;
  border: none;
  font-family: inherit;
}
`;

export default MainStyle;
