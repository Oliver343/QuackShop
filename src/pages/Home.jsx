import { useContext, useState } from "react"
import { StoreContextWrapper } from "../store/ContextProvider"

export default function Home() {
    const storeObject = useContext(StoreContextWrapper)

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }

    window.addEventListener('resize', handleResize);

    console.log(storeObject)

    return (
        <>
        HOME - {storeObject.checkState}
        <br />
        width - {width}
        <br />
        height - {height}
        </>
    )
}