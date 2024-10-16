import './modal.css'
import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"

export default function ModalEffect(props) {
    const storeObject = useContext(StoreContextWrapper)

    function useChipEffect() {
        switch(props.color) {
            case "red":
                storeObject.redEffect()
                break;
            case "blue":
                storeObject.blueEffect()
                break;
            case "yellow":
                storeObject.yellowEffect()
                break;
        }
    }

    return(
        <div className="modal">
            <div>
            Would you like to use the bonus effect for the {props.color} chip drawn?
            <button onClick={() => {useChipEffect(); storeObject.setModalEffect(false)} }>YES</button>
            <button onClick={() => storeObject.setModalEffect(false) }>NO</button>
            </div>
            
        </div>
    )
}