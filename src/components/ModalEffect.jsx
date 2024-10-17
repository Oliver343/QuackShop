import './modal.css'
import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"

export default function ModalEffect() {
    const storeObject = useContext(StoreContextWrapper)

    const currentColor = storeObject.p1PotCurrentRound[storeObject.p1PotCurrentRound.length - 1].color

    function chipEffect() {
        switch(currentColor) {
            case "red":
                storeObject.redEffect(true)
                break;
            case "blue":
                storeObject.blueEffect()
                break;
            case "yellow":
                storeObject.yellowEffect(true)
                break;
        }
    }

    return(
        <div className="modal">
            <div>
            Would you like to use the bonus effect for the {currentColor} chip drawn?
            <button onClick={() => {chipEffect(); storeObject.setModalEffect(false)} }>YES</button>
            <button onClick={() => storeObject.setModalEffect(false) }>NO</button>
            </div>
            
        </div>
    )
}