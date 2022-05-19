import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {    
    gray: {
      '100': '#e1e1e6',
      '300': '#a8a8b3',
      '500': '#646478',
      '700': '#2b2b3f',
      '800': '#29292e',      
      '850': '#202024',
      '900': '#1a1a1e',
      '950': '#121214',
    },
    purple: {
      "500": "#8769b3",
      "600": "#6d4f9c",
      "700": "#5b3a87",
      "800": "#4a2d6f",
      "900": "#3a1d57",
    },
    pink: {
      "500": "#f779c3",
      "600": "#f05f9e",
      "700": "#e84880",
      "800": "#d82858",
      "900": "#b81234",
    },    
    blue: {
      "50": "#334",
      "500": "#61DCFB",
      "600": "#4EC3F7",
      "700": "#3BA3E3",
      "800": "#2A8CD5",
      "900": "#1E6BC1",
    },
    yellow: {
      "500": "#eba417",
      "600": "#e59e0f",
      "700": "#da8c08",
      "800": "#c87007",
      "900": "#b65f06",      
    },
    green: {
      "500": "#04D361",
      "600": "#04B854",
      "700": "#049A4F",
      "800": "#03844A",
      "900": "#026A44",
    }
  }, 

  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeight: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-r, gray.900, gray.950)",
        color: 'gray.100',
      }
    }
  }
});