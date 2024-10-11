import './modal.css'
import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"

export default function ModalEffect(props) {
    const storeObject = useContext(StoreContextWrapper)

    return(
        <div className="modal">
            <div>
            I AM A MODAL FOR {props.color}
            <button onClick={() => storeObject.setModalEffect(false) }>CANCEL</button>
            </div>
            
        </div>
    )
}