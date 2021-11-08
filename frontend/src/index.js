import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis";

//retrieve info from your Moralis account
const appId = "nQqqhP8hpj9dSBDDxTwSnOdNQJSDIaJnNCzOwWdQ"
const serverUrl = "https://dehmiewhp5pm.usemoralis.com:2053/server"

const theme = extendTheme({
  config:{
    initialColorMode:'dark',
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
     <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
