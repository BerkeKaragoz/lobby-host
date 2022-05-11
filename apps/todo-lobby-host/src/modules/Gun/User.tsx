import { IGunUserInstance } from "gun"
import React from "react"

type User = IGunUserInstance["is"]

const UserContext = React.createContext<
   [User, React.Dispatch<React.SetStateAction<User>>]
>([undefined, () => {}])

export const useUser = () => React.useContext(UserContext)

export const UserProvider = ({ children }: any) => {
   const [user, setUser] = React.useState<User>(undefined)

   return (
      <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
   )
}
