import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/court-sponsors-hub/", // 👈 replace with your repo name
  plugins: [react()],
});
