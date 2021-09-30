
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
      }
    },
  });
};