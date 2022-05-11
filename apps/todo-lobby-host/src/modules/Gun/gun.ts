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
import { IGunInstance } from "gun/types"

/** And start shooting! */
export const getGun = (() => {
   const gun = Gun({
      peers: ["http://localhost:8765/gun"],
      localStorage: false,
   })

   return () => gun
})()

export const getGunEventsChannel = ((gun: IGunInstance) => {
   return () => {
      gun.on("auth", (user) => {
         console.log("in event channel: AUTH")
         console.log("auth", user)
      })

      gun.on("bye", (peer) => {
         console.log("bye", peer.id)
      })
   }
})(getGun())
