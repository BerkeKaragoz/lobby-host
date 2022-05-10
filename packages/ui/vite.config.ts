import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: [{ find: /^@\/(*)/, replacement: "src/$1" }],
   },
   build: {
      lib: {
         entry: resolve(__dirname, "src/main.tsx"),
         name: "ui",
         fileName: (format) => `ui.${format}.js`,
      },
      rollupOptions: {
         // make sure to externalize deps that shouldn't be bundled
         // into your library
         external: ["react"],
         output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
               react: "react",
            },
         },
      },
   },
})
