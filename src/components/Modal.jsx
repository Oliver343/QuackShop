import './modal.css'
import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"

export default function Modal(props) {
    const storeObject = useContext(StoreContextWrapper)

    function confirmFunc() {
        storeObject.setAllowBuying(false)
        props.scoreVP()
        storeObject.setConfirmVpModal(false)
    }

    return(
        <div className="modal">
            <div>Since your pot exploaded, you can't score VP and buy new ingredients. Are you sure you want to score your VP
                and not buy?
            </div>
            <button onClick={confirmFunc}>CONFIRM TO SCORE AND NOT BUY</button>
            <button onClick={() => storeObject.setConfirmVpModal(false) }>CANCEL</button>
        </div>
    )
}