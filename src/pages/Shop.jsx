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
            <button>Pumpkin 1</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button>Spider 1</button><button>Spider 2</button><button>Spider 4</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button>Mushroom 1</button><button>Mushroom 2</button><button>Mushroom 4</button>
            <br />
            <img src={Book2} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
            <br />
            <button>Crow Skull 1</button><button>Crow Skull 2</button><button>Crow Skull 4</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button>Moth 1</button>
            <br />
            <img src={Book3} 
            style={{
                width: 1000, maxWidth: maxValue
            }}
            />
                        <br />
            <button>Root 1</button><button>Root 2</button><button>Root 4</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button>Ghost 1</button><button>Ghost 2</button><button>Ghost 4</button>
        </div>
    )
}