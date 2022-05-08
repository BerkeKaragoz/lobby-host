const fs = require("fs")
const path = require("path")
const express = require("express")
const Gun = require("gun")
const { createServer: createViteServer } = require("vite")

async function createServer() {
   const app = express()

   app.use(Gun.serve)

   const vite = await createViteServer({
      server: { middlewareMode: "ssr" },
   })

   app.use(vite.middlewares)

   app.use(express.static(__dirname))

   app.use("*", async (req, res, next) => {
      const url = req.originalUrl

      try {
         let template = fs.readFileSync(
            path.resolve(__dirname, "index.html"),
            "utf-8"
         )

         template = await vite.transformIndexHtml(url, template)

         const { render } = await vite.ssrLoadModule("/src/entry-server.jsx")
         const appHtml = await render(url)

         const html = template.replace(`<!--ssr-outlet-->`, appHtml)

         res.status(200).set({ "Content-Type": "text/html" }).end(html)
      } catch (e) {
         vite.ssrFixStacktrace(e)
         next(e)
      }
   })

   const server = app.listen(3002)

   const gun = Gun({ file: "radata", web: server })
}

createServer()
