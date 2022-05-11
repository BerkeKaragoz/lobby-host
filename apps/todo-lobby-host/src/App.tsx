import React from "react"
import Home from "@/modules/Home"
import { getGun, getGunEventsChannel } from "@/modules/Gun"
import { UserProvider } from "@/modules/Gun/User"

const $gun = getGun()

const $user = $gun.user()
$user.recall({ sessionStorage: true })

const App = () => {
   React.useEffect(() => {
      getGunEventsChannel()
   }, [])

   return (
      <>
         <UserProvider value={$user.is}>
            <header>Header</header>
            <div />
            <div className="main-wrapper">
               <Home />
            </div>
            <footer>Footer</footer>
         </UserProvider>
      </>
   )
}

export default App

// const onCreateUser = () => {

//    user.create(alias, pass, (res: any) => {
//       if ("err" in res) {
//          console.error("Failed to create user: ", { res, alias })
//       } else {
//          console.log("User created: ", { res, alias })
//       }
//    })
// }

// const onAuth = (e: React.FormEvent) => {
//    user.auth(alias, pass, () => {
//       console.log("User auth: ", alias)
//    })
// }

// const onSaid = (e: React.FormEvent) => {
//    user.get("said").set({
//       value: say,
//    })

//    sayRef.current.value = ""
// }

// const qwe = (say: any, id: any) => {
//    setSaidList((s) => s.concat({ say: say.value, id }))
// }
