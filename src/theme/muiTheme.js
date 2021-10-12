
import { createTheme } from '@mui/material/styles';
import { purple, green, grey } from '@mui/material/colors';

export const customTheme = () => {
  return createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple['A700'],
      },
      secondary: {
        // This is green.A700 as hex.
        main: green['A700'],
      },
      neutral: {
        main: grey['A700'],
      },
      bus: {
        main: '#007AC9',
      },
      bicycle: {
        main: '#FCBC19'
      },
      tram: {
        main: '#00985F'
      },
      train: {
        main: '#8C4799'
      },
      subway: {
        main: '#FF6319'
      },
      joker: {
        main: '#00B2A9'
      },
      ferry: {
        main: '#00B9E4'
      },
      other: {
        main: '#333333'
      }
    },
  });
};