import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // Set this to the current directory where your index.html is located
  build: {
    outDir: "dist", // Output directory for the build
  },
});
