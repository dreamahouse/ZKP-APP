import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import postCssPxToRem from "postcss-pxtorem";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 192,
          propList: ["*"],
          exclude: function(file) {
            // 排除 src/view/home2 目录
            return /src[\\/]phone/.test(file);
          }
        }),

      ],
    },
  },
});
