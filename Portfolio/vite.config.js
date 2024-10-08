import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./", // Ensure this points to the root where your index.html is located
  build: {
    outDir: "dist", // Specify the output directory for the build
  },
});
