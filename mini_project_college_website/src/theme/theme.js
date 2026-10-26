import { createTheme, alpha } from '@mui/material/styles';

const primaryMain = '#0B3A6E';
const secondaryMain = '#E8A317';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
      light: '#1A5A9E',
      dark: '#072849',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: secondaryMain,
      light: '#F0BC4A',
      dark: '#C4890F',
      contrastText: '#1A1A1A',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F7F9FC',
    },
    text: {
      primary: '#1A2332',
      secondary: '#5A6577',
    },
    divider: alpha(primaryMain, 0.12),
  },
  typography: {
    fontFamily: '"Source Sans 3", "IBM Plex Sans", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Libre Baskerville", "Georgia", serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: '"Libre Baskerville", "Georgia", serif',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Libre Baskerville", "Georgia", serif',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Source Sans 3", "IBM Plex Sans", sans-serif',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.35,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    overline: {
      fontWeight: 700,
      letterSpacing: '0.12em',
      fontSize: '0.75rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.65,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 2px rgba(11, 58, 110, 0.06)',
    '0 2px 8px rgba(11, 58, 110, 0.08)',
    '0 4px 16px rgba(11, 58, 110, 0.1)',
    '0 8px 24px rgba(11, 58, 110, 0.12)',
    '0 12px 32px rgba(11, 58, 110, 0.14)',
    '0 16px 40px rgba(11, 58, 110, 0.16)',
    '0 20px 48px rgba(11, 58, 110, 0.18)',
    ...Array(17).fill('0 20px 48px rgba(11, 58, 110, 0.18)'),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: '#FFFFFF',
        },
        '*:focus-visible': {
          outline: `2px solid ${secondaryMain}`,
          outlineOffset: 2,
        },
        img: {
          maxWidth: '100%',
          height: 'auto',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingInline: 20,
          paddingBlock: 10,
          boxShadow: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
          '&:hover': {
            boxShadow: 'none',
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#072849',
          },
        },
        containedSecondary: {
          color: '#1A1A1A',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${alpha(primaryMain, 0.08)}`,
          boxShadow: '0 2px 8px rgba(11, 58, 110, 0.06)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },
});

export default theme;
