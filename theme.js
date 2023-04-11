import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A8B6C1',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2), -2px -2px 8px rgba(255, 255, 255, 0.2)',
          '&:hover': {
            boxShadow: 'inset 1px 1px 4px rgba(0, 0, 0, 0.2), inset -1px -1px 4px rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
  },
});

export default theme;
