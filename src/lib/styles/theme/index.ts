import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";

// [Easily create colors schemes @ Themera](https://themera.vercel.app)
const colors = {
  gray: {
    "50": "#EDF1F8",
    "100": "#CBD9EB",
    "200": "#AAC1DE",
    "300": "#89A8D2",
    "400": "#6890C5",
    "500": "#4777B8",
    "600": "#395F93",
    "700": "#2B476E",
    "800": "#1C304A",
    "900": "#0E1825",
  },
  red: {
    "50": "#FCE8E8",
    "100": "#F8BFBF",
    "200": "#F39696",
    "300": "#EE6D6D",
    "400": "#E94343",
    "500": "#E51A1A",
    "600": "#B71515",
    "700": "#891010",
    "800": "#5B0B0B",
    "900": "#2E0505",
  },
  orange: {
    "50": "#FFEFE5",
    "100": "#FFD3B8",
    "200": "#FFB68A",
    "300": "#FF9A5C",
    "400": "#FF7D2E",
    "500": "#FF6100",
    "600": "#CC4E00",
    "700": "#993A00",
    "800": "#662700",
    "900": "#331300",
  },
};

export const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  colors,
  config,
});
