import { useState } from "react"
import { Button, Link } from "ui"
import Gun from "gun/gun"
import SEA from "gun/sea.js"
import "gun/lib/radix"
import "gun/lib/radisk"
import "gun/lib/store"
import "gun/lib/rindexed"
import "gun/lib/webrtc"
import "gun/nts"

export const gun = Gun({ peers: ["https://your.gun.peer"], localStorage: false })

const App = () => {
   const [count, setCount] = useState(0)

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
      </div>
   )
}

export default App
