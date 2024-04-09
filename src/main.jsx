/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{ MyContext} from './context/context.jsx';
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContext>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </MyContext>
);
