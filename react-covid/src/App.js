import React from 'react';
import { StyleProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core' 
import globalStyle from './commons/styles/global-style';
import Main from './containers/Main'


function App() {
  return (
    <StyleProvider injectFirst>   
      <CssBaseline />
      <globalStyle />
      <main />>der>
  );
}

export default App;
