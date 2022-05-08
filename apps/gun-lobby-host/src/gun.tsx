import Gun from "gun/gun"
import SEA from "gun/sea.js"
import "gun/sea"
import "gun/axe"
import "gun/lib/radix"
import "gun/lib/radisk"
import "gun/lib/store"
import "gun/lib/rindexed"
import "gun/lib/webrtc"
import "gun/nts"

const createGun = (() => {
   const gun = Gun({
      peers: [
         "http://localhost:8765/gun",
         "https://gun-manhattan.herokuapp.com/gun",
      ],
      localStorage: false,
   })

   return () => gun
})()

export default createGun()
