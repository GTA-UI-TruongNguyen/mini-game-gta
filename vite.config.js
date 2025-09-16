import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // ✅ Đúng: cần để asset path tương đối
  build: {
    outDir: "build", // ✅ Đúng
    emptyOutDir: true,
    target: "chrome58", // Optional: để tương thích với CEF
    assetsDir: ".", // ✅ Để tránh đường dẫn như `assets/index-xxxxx.js`, sẽ thành `./index-xxxxx.js`
    rollupOptions: {
      input: "index.html", // ✅ cần rõ ràng đường vào
    },
  },
});
