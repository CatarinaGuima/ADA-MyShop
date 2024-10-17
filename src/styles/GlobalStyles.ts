//Css IN TS
import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #f7f7f7;
}

body, button , input {
    font-family: 'Poppins', sans-serif;
}
`