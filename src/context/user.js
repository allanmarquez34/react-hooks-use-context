import React from "react"

const UserContext = React.createContext();

function UserProvider({childern}){
    const [user, setUser]= useState(null);
    const currentUser ={
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
    }
    return( <UserContext.Provider value ={{user, setUser}}>{childern}</UserContext.Provider>
    )
}

export default UserProvider