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
    let menuHight = 81


    let bagForTurn = [...storeObject.bag];

    if(!storeObject.menuShow) {menuHight = 4}

    function handleMenuToggle() {
        storeObject.setMenuShow((pre) =>  !pre) 
    }

    return (
        <div className="homeMain">
            {storeObject.menuShow ? <Header toggleMenu={handleMenuToggle} /> : ""}
            <div 
            className="homeBody" 
            style={{minHeight: (storeObject.height - menuHight)}}
            >
                
                <div className="buttonLine">
                    <button className="menuToggleBtn" style={{ visibility: "hidden"}}>.</button>
                    <div className="buttonBox">
                        {storeObject.menuShow ? "" : <button className="menuToggleBtn" onClick={handleMenuToggle}><FontAwesomeIcon icon={faBars} /></button>}
                    </div>
                </div>
                <BoardP1 bagForTurn={bagForTurn} scoreTrack={storeObject.scoreTrack} chipSpace={0} screenWidth={500} />
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