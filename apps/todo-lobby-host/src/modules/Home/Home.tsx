import React from "react"
import Register from "@/modules/Auth/Register"
import Login from "@/modules/Auth/Login"

import { getGun } from "@/modules/Gun"
import { Button } from "ui"
import { useUser } from "../Gun/User"

const $gun = getGun()

const $user = $gun.user()

const Home = () => {
   const [user, setUser] = useUser()

   const onLogout = () => {
      console.log("logout before: ", $user.is)
      $user.leave()
      console.log("logout after: ", $user.is)
      setUser($user.is)
   }

   return (
      <main>
         <h1>Home</h1>
         <hr />
         {user ? (
            <div>
               <h2>Register</h2>
               <Register />
               <br />
               <h2>Login</h2>
               <Login />
               <br />
               <Button onClick={onLogout}>Logout</Button>
            </div>
         ) : (
            <div>
               <p>User: {JSON.stringify(user)}</p>
            </div>
         )}
         <hr />
      </main>
   )
}

export default Home
