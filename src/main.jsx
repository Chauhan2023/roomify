import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import theme from './theme';

ReactDOM.render(
  <ChakraProvider theme={theme}> {/* Pass the custom theme here */}
  <App />
</ChakraProvider>,
  document.getElementById('root')
)
