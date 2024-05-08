import { createContext, useState } from "react";

export const StoreContextWrapper = createContext({
    checkState: "Working"
})

export default function ContextProvider({children}){
    const [checkState] = useState("Working");


return (
    <StoreContextWrapper.Provider value={{checkState}}>
        {children}
    </StoreContextWrapper.Provider>
)
}