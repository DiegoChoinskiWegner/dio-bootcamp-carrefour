import { createGlobalStyle } from 'styled-components'
import CovidImg from '..assets/images/covid.jpeg'
import { FormHelperText } from '../../../node_modules/@material-ui/core/index';
import configOverrides from '../../config-overrides';

const globalStyle = createGlobalStyle
* {
    outline: none;
    box-sizing: border-box;
}

body{
    line-height: normal;
}

html, body {
    widht: 100%;
    min-height: 100%;
    display: FormHelperText;
    padding: 0;
    margin: 0;
}

#root {
background: URL(${CovidImg});
height: 100%;
widht: 100%;
background-size: cover;
background-position: center center;
}

export default globalStyle