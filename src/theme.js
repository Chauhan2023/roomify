// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#e0f5ff',
      100: '#b3e1ff',
      200: '#80cdff',
      300: '#4db9ff',
      400: '#1aa4ff',
      500: '#008ae6', // primary
      600: '#006db4',
      700: '#004f80',
      800: '#00324d',
      900: '#00151a',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'primary.50',
        color: 'primary.900',
      },
    },
  },
});

export default theme;
