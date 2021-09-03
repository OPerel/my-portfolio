import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Londrina Solid',
      'sans-serif'
    ].join(','),
  },
  palette: {
    text: {
      primary: '#AED6D4',
      secondary: '#f36344'
    }
  }
});

export default theme;