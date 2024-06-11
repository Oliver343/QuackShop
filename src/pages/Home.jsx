import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { StoreContextWrapper } from "../store/ContextProvider"
import Header from "../components/Header"
import BoardP1 from './BoardP1';
import './main.css';
import './chips.css'
import ScoreBoard from "./ScoreBoard"
import Shop from "./Shop"

export default function Home() {
    const storeObject = useContext(StoreContextWrapper)
    let menuHight = 81

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
                {storeObject.pageTarget === 1 ? 
                                <>
                                <div className="buttonLine">
                                    <button className="menuToggleBtn" style={{ visibility: "hidden"}}>.</button>
                                    <div className="buttonBox">
                                        {storeObject.menuShow ? "" : <button className="menuToggleBtn" onClick={handleMenuToggle}><FontAwesomeIcon icon={faBars} /></button>}
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
                            </> :
                            <div> 
                            {storeObject.pageTarget === 2 ?
                            <BoardP1 chipSpace={0} handleMenuToggle={handleMenuToggle}/> :
                            ""}
                            {storeObject.pageTarget === 3 ?
                            <ScoreBoard handleMenuToggle={handleMenuToggle} /> : 
                            ""}
                            {storeObject.pageTarget === 4 ?
                            <Shop /> : ""}
                            </div>



                }
            </div>
        </div>
    )
}