import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Match webpack's lookup order (no "jsnext:main"). Otherwise `moment`
    // resolves to its ESM-only build, and CommonJS consumers such as
    // react-moment get a namespace object instead of the moment function.
    mainFields: ["browser", "module", "main"],
  },
  build: {
    // GitHub Actions publishes ./build (same folder Create React App used).
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});
