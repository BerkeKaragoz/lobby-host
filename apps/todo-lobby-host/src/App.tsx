import React from "react"
import { Button } from "ui"

import db from "./gun"

const user = db.user().recall({ sessionStorage: true })

const App = () => {
   const [count, setCount] = React.useState(0)
   const [isLoggedIn, setIsLoggedIn] = React.useState(false)
   const [saidList, setSaidList] = React.useState<any[]>([])
   const aliasRef = React.useRef<HTMLInputElement>(null)
   const sayRef = React.useRef<HTMLInputElement>(null)
   const passwordRef = React.useRef<HTMLInputElement>(null)

   const onCreateUser = () => {
      if (!(aliasRef.current && passwordRef.current)) return
      const alias = aliasRef.current.value
      const pass = passwordRef.current.value

      user.create(alias, pass, (res) => {
         if ("err" in res) {
            console.error("Failed to create user: ", { res, alias })
         } else {
            console.log("User created: ", { res, alias })
         }
      })
   }

   const onAuth = (e: React.FormEvent) => {
      e.preventDefault()
      if (!(aliasRef.current && passwordRef.current)) return
      const alias = aliasRef.current.value
      const pass = passwordRef.current.value

      user.auth(alias, pass, () => {
         console.log("User auth: ", alias)
      })
   }

   const onSaid = (e: React.FormEvent) => {
      console.log("submit", user.is)
      if (!sayRef.current) return
      e.preventDefault()
      if (!user.is) return

      const say = sayRef.current.value

      user.get("said").set({
         value: say,
      })

      sayRef.current.value = ""
   }

   const qwe = (say: any, id: any) => {
      setSaidList((s) => s.concat({ say: say.value, id }))
   }

   React.useEffect(() => {
      db.on("auth", (u) => {
         console.log("auth", u)
      })

      user.get("alias").on((u: string | undefined) => {
         console.log("Alias: ", u)
         if (!u) return

         setIsLoggedIn(true)

         user.get("said").map().once(qwe)
      })
   }, [db])

   return (
      <div className="App">
         <header className="App-header">
            <p>Gun Server</p>
            <p>
               <Button type="button" onClick={() => setCount((count) => count + 1)}>
                  count is: {count}
               </Button>
            </p>
         </header>

         <hr />

         <form id="sign">
            <input id="alias" ref={aliasRef} placeholder="username" />
            {!isLoggedIn && (
               <>
                  <input
                     id="pass"
                     ref={passwordRef}
                     type="password"
                     placeholder="passphrase"
                  />
                  <input id="in" type="submit" value="sign in" onClick={onAuth} />
                  <input
                     id="up"
                     type="button"
                     value="sign up"
                     onClick={onCreateUser}
                  />
               </>
            )}
         </form>

         <ul></ul>

         <form id="said" onSubmit={onSaid}>
            <input id="say" ref={sayRef} />
            <input id="speak" type="submit" value="speak" />
         </form>

         <br />

         <Button
            onClick={() => {
               user.leave()
               setIsLoggedIn(false)
               console.log("Logged out.")
            }}
         >
            Logout
         </Button>

         <hr />

         <pre>{JSON.stringify(saidList, null, 2)}</pre>
      </div>
   )
}

export default App
