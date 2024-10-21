import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { StoreContextWrapper } from "../store/ContextProvider"
import Header from "../components/Header"
import BoardP1 from './BoardP1'
import './main.css'
import './chips.css'
import ScoreBoard from "./ScoreBoard"
import Shop from "./Shop"
import BoardP2 from "./BoardP2"

export default function Home() {
    const storeObject = useContext(StoreContextWrapper)
    let menuHeight = 81

    if(!storeObject.menuShow) {menuHeight = 4}

    function handleMenuToggle() {
        storeObject.setMenuShow((pre) =>  !pre) 
    }

    let width = storeObject.width - 102
    let height = (storeObject.width - 102) / 2

    console.log("hight")
    console.log(height + 200)
    console.log("storeObject.height")
    console.log(storeObject.height)

    if(storeObject.height < (height + 200)) {
        height = storeObject.height - 132
        width = height * 2
        // height = 100
        // width = 100
        if (storeObject.menuShow) {
            height = height - 77
        }
    }

    return (
        <div className="homeMain">
            {storeObject.menuShow ? <Header toggleMenu={handleMenuToggle} /> : ""}
            <div 
            className="homeBody" 
            style={{minHeight: (storeObject.height - menuHeight)}}
            >
                {storeObject.pageTarget === 1 ? 
                                <>
                                <div className="buttonLine">
                                    <button className="menuToggleBtn" style={{ visibility: "hidden"}}>.</button>
                                    <div className="buttonBox">
                                        {storeObject.menuShow ? "" : <button className="menuToggleBtn" onClick={handleMenuToggle}><FontAwesomeIcon icon={faBars} /></button>}
                                    </div>
                                </div> 
                                <div style={{
                                     background: "red",
                                     width: width,
                                     height: height,
                                     }}
                                > 
                                <div style={{
                                     background: "lime",
                                     width: "30px",
                                     height: "30px",
                                     position: "absolute",
                                     top: storeObject.menuShow ? "109px" : "32px",
                                     left: width / 2,
                                     }}> T </div>
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
                            {storeObject.pageTarget === 5 ?
                            <BoardP2 chipSpace={0} handleMenuToggle={handleMenuToggle}/> :
                            ""}
                            </div>



                }
            </div>
        </div>
    )
}