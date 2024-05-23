import { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { StoreContextWrapper } from "../store/ContextProvider"


export default function Header(props) {
    const storeObject = useContext(StoreContextWrapper)

    return(
        <div className="headerMain">
            <div className='headerSub'>
                Quacks Shop &nbsp;&nbsp;
                <button onClick={() => storeObject.setPageTarget(1)}>Home</button>
                <button onClick={() => storeObject.setPageTarget(2)}>Player</button>
                <button onClick={() => storeObject.setPageTarget(3)}>Score</button>
            </div>
            <div className="buttonBox">
                <button className='menuToggleBtn' onClick={props.toggleMenu}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
        </div>
    )
}