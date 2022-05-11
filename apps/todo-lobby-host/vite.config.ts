import { defineConfig, resolveConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

const moduleExclude = (match) => {
   const m = (id) => id.indexOf(match) > -1
   return {
      name: `exclude-${match}`,
      resolveId(id) {
         if (m(id)) return id
      },
      load(id) {
         if (m(id)) return `export default {}`
      },
   }
}

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
      alias: {
         "@": resolve(__dirname, "src/"),
      },
   },
   optimizeDeps: {
      include: [
         "gun",
         "gun/gun",
         "gun/sea",
         "gun/sea.js",
         "gun/lib/then",
         "gun/lib/webrtc",
         "gun/lib/radix",
         "gun/lib/radisk",
         "gun/lib/store",
         "gun/lib/rindexed",
      ],
   },
   plugins: [react(), moduleExclude("text-encoding")],
})
