import React, { useState } from 'react'


export const UserContext = React.createContext();

const Provider = ({ children }) => {
    const [Name, setName] = useState("");
    return <UserContext.Provider value={{Name,setName}}>
        {children}
    </UserContext.Provider>
}

export default Provider