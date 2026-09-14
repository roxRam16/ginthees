import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo: "#faf8f4",
        "texto-menu": "#f3e5bc",
        "texto-cuerpo": "#1e1e96",
        "texto-botones": "#1e1e96",
      },
      fontFamily: {
        alegreya: ["Alegreya", "serif"],
      },
      fontSize: {
        menu: ["20px", "1.4"],
        subtitulo: ["24px", "1.5"],
        boton: ["30px", "1.2"],
      },
      spacing: {
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
      },
      backgroundImage: {
        "degradado-azul":
          "linear-gradient(to right, #090d2c, #1e1e96 50%, #090d2c)",
        "degradado-dorado":
          "linear-gradient(to right, #887237, #ebde97 50%, #8f732b)",
        "degradado-dorado-texto":
          "linear-gradient(to right, #887237, #ebde97 50%, #8f732b)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
