import { useContext } from "react"
import { StoreContextWrapper } from "../store/ContextProvider"

export default function Home() {
    const storeObject = useContext(StoreContextWrapper)

    console.log(storeObject)

    return (
        <>ORITE{storeObject.checkState}</>
    )
}