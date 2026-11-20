import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project URL: update this to your repository name.
  base: "/paradise-nursery/"
});