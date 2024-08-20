import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: "Watashi",
})

export default UserContext;