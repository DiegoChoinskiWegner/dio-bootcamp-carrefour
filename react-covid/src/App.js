import React from 'react';
import { StyleProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core' 
import globalStyle from './commons/styles/global-style';



function App() {
  return (
    <StyleProvider injectFirst>   
      <CssBaseline />
      <globalStyle />
      <div>
        teste
      </div>
    </StylesProvider>
  );
}

export default App;
