import { useState } from "react"
import { Button, Input, Link } from "ui"

const App = () => {
   const [count, setCount] = useState(0)

   return (
      <div className="App">
         <header className="App-header">
            <p>Hello Vite + React!</p>
            <p>
               <Button onClick={() => setCount((count) => count + 1)}>
                  count is: {count}
               </Button>
            </p>
            <p>
               Edit <code>App.tsx</code> and save to test HMR updates.
            </p>
            <p>
               <Link
                  className="App-link"
                  to="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React
               </Link>
               {" | "}
               <a
                  className="App-link"
                  href="https://vitejs.dev/guide/features.html"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Vite Docs
               </a>
            </p>
         </header>
         <form action="" id="said">
            <Input type="text" id="say" />
            <Input type="text" id="speak" />
         </form>
      </div>
   )
}

export default App
