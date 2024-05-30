import { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import scoreBoard from "../img/scoreboard.png"

export default function ScoreBoard(props) {
    const storeObject = useContext(StoreContextWrapper)
    const dice = [
        {name: "Pumpkin"},
        {name: "1VP"},
        {name: "1VP"},
        {name: "2VP"},
        {name: "Ruby"},
        {name: "Droplet"},
    ]
    let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )

    return(
        <div>
            <div className="boardBar">
                <div className="buttonBox">
                    <div>
                        {" "}
                        {(storeObject.pageActive === 2) ? <button>Roll the dice</button> : ""}
                    </div>
            <div>
              {storeObject.menuShow ? "" : <button className="menuToggleBtn" onClick={props.handleMenuToggle}><FontAwesomeIcon icon={faBars} /></button>}
            </div>
        </div>
      </div>
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