const { heroui } = require("@heroui/theme");
const plugin = require("tailwindcss/plugin");
const theme_config = require("./src/config/theme.json");

let fontPrimaryType, fontSecondaryType;
if (theme_config.fonts.font_family.primary) {
  fontPrimaryType = theme_config.fonts.font_family.primary_type;
}
if (theme_config.fonts.font_family.secondary) {
  fontSecondaryType = theme_config.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /^col-/ },
    ...theme_config.colors.flatMap((color) => [
      { pattern: new RegExp(`bg-${color}`) },
    ]),
    { pattern: /^btn-/ },
  ],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        ...theme_config.colors.reduce((acc, key) => {
          acc[key] = "rgba(var(--" + key + "))";
          return acc;
        }, {}),
      },
      fontFamily: {
        primary: ["var(--font-primary)", fontPrimaryType],
        secondary: ["var(--font-secondary)", fontSecondaryType],
      },
      textShadow: {
        sm: "0 0px 2px var(--tw-shadow-color)",
        DEFAULT: "0 0px 3px var(--tw-shadow-color)",
        lg: "0 0px 8px var(--tw-shadow-color)",
      },

      keyframes: {
        "scrolling-banner": {
            from: {transform: "translateX(0)"},
            to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
          },
          "scrolling-banner-vertical": {
            from: {transform: "translateY(0)"},
            to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
          },
        "fade-in": {
          "0%": { transform: "translateY(15pt)", opacity: 0 },
          "100%": { transform: "translateY(0pt)" },
        },
        "fade-out": {
          "0%": { transform: "translateY(0pt)" },
          "100%": { transform: "translateY(15pt)", opacity: 0 },
        },
        dissappear: {
          "0%": { opacity: 1, visibility: "visible" },
          "100%": { visibility: "hidden", opacity: 0 },
        },
      },
      animation: {
        "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
        "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
        "fade-in": "fade-in 1s ease-in-out",
        "fade-out": "fade-out 1s ease-in-out",
        dissappear: "dissappear 1.5s ease-in-out forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
    heroui(),
  ],
};
