import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/",
    plugins: [react()],
    build: {
        rollupOptions: {
            treeshake: true,
        },
        outDir: "dist",
        assetsDir: "assets",
    },
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
