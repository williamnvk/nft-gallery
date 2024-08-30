import { baseTheme, extendTheme, FormLabel } from "@chakra-ui/react";
import "@fontsource/poppins";

import { alertTheme } from "./alert";
import { buttonTheme } from "./button";

import { badgeTheme } from "./badge";

const colors = {
  transparent: "transparent",
  gray: {
    "50": "#f5f5f6",
    "100": "#e5e6e8",
    "200": "#cecfd3",
    "300": "#abadb5",
    "400": "#81838f",
    "500": "#666874",
    "600": "#575763",
    "700": "#4b4b53",
    "800": "#424348",
    "900": "#121214",
    "950": "#09090a",
  },
  green: {
    // lime
    "50": "#edfff5",
    "100": "#d5ffeb",
    "200": "#aeffd7",
    "300": "#70ffb9",
    "400": "#2bfd94",
    "500": "#00ff80", // DEFAULT
    "600": "#00c05c",
    "700": "#00964b",
    "800": "#06753f",
    "900": "#076036",
    "950": "#00371c",
  },
  red: {
    // red (torch red)
    "50": "#fff0f0",
    "100": "#ffdddd",
    "200": "#ffc0c0",
    "300": "#ff9494",
    "400": "#ff5757",
    "500": "#ff2323",
    "600": "#ff0000", // DEFAULT
    "700": "#d70000",
    "800": "#b10303",
    "900": "#920a0a",
    "950": "#500000",
  },
  cyan: {
    // spring-green
    "50": "#edfff8",
    "100": "#d5fff0",
    "200": "#aeffe1",
    "300": "#70ffcb",
    "400": "#2bfdae",
    "500": "#00ffa0", // DEFAULT
    "600": "#00c074",
    "700": "#00965e",
    "800": "#06754d",
    "900": "#076041",
    "950": "#003723",
  },
  yellow: {
    //candlelight
    "50": "#fefde8",
    "100": "#fffdc2",
    "200": "#fff888",
    "300": "#ffeb44",
    "400": "#feda14", // DEFAULT
    "500": "#eec004",
    "600": "#cd9501",
    "700": "#a46a04",
    "800": "#87530c",
    "900": "#734410",
    "950": "#432305",
  },
  blue: {
    // picton-blue
    "50": "#eff8ff",
    "100": "#def1ff",
    "200": "#b6e5ff",
    "300": "#75d2ff",
    "400": "#2dbaff",
    "500": "#14aefe", //DEFAULT
    "600": "#0081d3",
    "700": "#0067aa",
    "800": "#00578c",
    "900": "#064974",
    "950": "#042e4d",
  },
  orange: {
    "50": "#fff6ed",
    "100": "#ffead4",
    "200": "#ffd1a8",
    "300": "#ffb071",
    "400": "#ff8538",
    "500": "#fe6414", //DEFAULT
    "600": "#ef4607",
    "700": "#c63208",
    "800": "#9d290f",
    "900": "#7e2510",
    "950": "#440f06",
  },
};

const base = {
  ...baseTheme,
  styles: {
    global: (props: { colorMode: 'dark'| 'light' | 'system' }) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? 'gray.950' : 'white'
      }
    }),
  },
  fonts: {
    heading: `'Poppins'`,
    body: `'Poppins', 'sans-serif'`,
  },
  textStyles: {
    h1: {
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    h3: {
      fontSize: ["24px", "36px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    h4: {
      fontSize: ["20px", "24px"],
      fontWeight: "normal",
      lineHeight: "110%",
    },
  },
  components: {
    Alert: alertTheme,
    Button: buttonTheme,
    Badge: badgeTheme,
    FormLabel: {
      baseStyle: {
        display: "flex",
        alignItems: "center",
        fontWeight: "normal",
        fontSize: "sm",
        gap: 2,
      },
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const header = {
  height: "72px",
};

const theme = extendTheme({
  ...base,
  config,
  header,
  colors,
  container: {
    xl: "1680px"
  }
});

export { theme };
