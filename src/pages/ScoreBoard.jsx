import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"

import scoreBoard from "../img/scoreboard.png"

export default function ScoreBoard() {
    const storeObject = useContext(StoreContextWrapper)
    let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )
    return(
        <div>
            <div 
                className="newBoard" 
                style={{backgroundImage: 
                "url(" + scoreBoard + ")", 
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat', 
                width: 1000, maxWidth: maxValue, 
                height: 914, maxHeight: maxValue}}
            ></div>
        </div>
        
    )
}