import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { StoreContextWrapper } from "../store/ContextProvider"
import Header from "../components/Header"
import BoardP1 from './BoardP1';
import './main.css';
import './chips.css'

export default function Home() {
    const storeObject = useContext(StoreContextWrapper)

    const [menuShow, setMenuShow] = useState((storeObject.height < 600) ? false : true)
    // Header only shown by default on screen with greater than 600px height
    let menuHight = 81


    let bagForTurn = [...storeObject.bag];

    if(!menuShow) {menuHight = 4}

    function handleMenuToggle() {
        setMenuShow((pre) =>  !pre) 
    }

    return (
        <div className="homeMain">
            {menuShow ? <Header toggleMenu={handleMenuToggle} /> : ""}
            <div 
            className="homeBody" 
            style={{minHeight: (storeObject.height - menuHight)}}
            >
                <BoardP1 bagForTurn={bagForTurn} scoreTrack={storeObject.scoreTrack} chipSpace={0} screenWidth={500} />
                <div className="buttonLine">
                    <button className="menuToggleBtn" style={{ visibility: "hidden"}}>.</button>
                    <div className="buttonBox">
                        {menuShow ? "" : <button className="menuToggleBtn" onClick={handleMenuToggle}><FontAwesomeIcon icon={faBars} /></button>}
                    </div>
                </div>
                <div className="homeSub">
                    HOME - {storeObject.checkState}
                    <br />
                    width - {storeObject.width}
                    <br />
                    height - {storeObject.height}
                </div>
                <div className="homeSub">
                    <button disabled={true}>Start Game</button>
                </div>
                
            </div>
        </div>
    )
}