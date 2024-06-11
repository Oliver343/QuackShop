import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider";
import Book1 from "../img/bookSet1.png";
import Book2 from "../img/bookSet2.png";
import Book3 from "../img/bookSet3.png";

export default function Shop() {
    const storeObject = useContext(StoreContextWrapper)
    let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )
    return (
        <div>
            <img src={Book1} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
            <br />
            <img src={Book2} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
            <br />
            <img src={Book3} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
        </div>
    )
}