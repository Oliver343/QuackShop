import { createContext, useState } from "react";

export const StoreContextWrapper = createContext({
    checkState: "State-working"
})

export default function ContextProvider({children}){
    const [checkState] = useState("State working");


return (
    <StoreContextWrapper.Provider value={{checkState}}>
        {children}
    </StoreContextWrapper.Provider>
)
}