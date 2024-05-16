import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { StoreContextWrapper } from "../store/ContextProvider"
import Header from "../components/Header"
import BoardP1 from './BoardP1';
import './main.css';
import './chips.css'

import chipG1 from "../img/chipG1.png";
import chipO1 from "../img/chipO1.png";
import chipW1 from "../img/chipW1.png";
import chipW2 from "../img/chipW2.png";
import chipW3 from "../img/chipW3.png";

export default function Home() {
    const storeObject = useContext(StoreContextWrapper)

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [menuShow, setMenuShow] = useState((window.innerHeight < 600) ? false : true)
    // Header only shown by default on screen with greater than 600px height
    let menuHight = 81

    let scoreTrack= [
        {
          number: 0,
          buyingPower: 0,
          victoryPoints: 0,
          rubySpace: false,
          end: false
        },
        {
          number: 1,
          buyingPower: 1,
          victoryPoints: 0,
          rubySpace: false,
          end: false
        },
        {
          number: 2,
          buyingPower: 2,
          victoryPoints: 0,
          rubySpace: false,
          end: false
        },
        {
          number: 3,
          buyingPower: 3,
          victoryPoints: 0,
          rubySpace: false,
          end: false
        },
        {
          number: 4,
          buyingPower: 4,
          victoryPoints: 0,
          rubySpace: false,
          end: false
        },
        {
          number: 5,
          buyingPower: 5,
          victoryPoints: 0,
          rubySpace: true,
          end: false
        },
        {
          number: 6,
          buyingPower: 6,
          victoryPoints: 1,
          rubySpace: false,
          end: false
        },
        {
          number: 7,
          buyingPower: 7,
          victoryPoints: 1,
          rubySpace: false,
          end: false
        },
        {
          number: 8,
          buyingPower: 8,
          victoryPoints: 1,
          rubySpace: false,
          end: false
        },
        {
          number: 9,
          buyingPower: 9,
          victoryPoints: 1,
          rubySpace: true,
          end: false
        },
        {
          number: 10,
          buyingPower: 10,
          victoryPoints: 2,
          rubySpace: false,
          end: false
        },
        {
          number: 11,
          buyingPower: 11,
          victoryPoints: 2,
          rubySpace: false,
          end: false
        },
        {
          number: 12,
          buyingPower: 12,
          victoryPoints: 2,
          rubySpace: false,
          end: false
        },
        {
          number: 13,
          buyingPower: 13,
          victoryPoints: 2,
          rubySpace: true,
          end: false
        },
        {
          number: 14,
          buyingPower: 14,
          victoryPoints: 3,
          rubySpace: false,
          end: false
        },
        {
          number: 15,
          buyingPower: 15,
          victoryPoints: 3,
          rubySpace: false,
          end: false
        },
        {
          number: 16,
          buyingPower: 15,
          victoryPoints: 3,
          rubySpace: true,
          end: false
        },
        {
          number: 17,
          buyingPower: 16,
          victoryPoints: 3,
          rubySpace: false,
          end: false
        },
        {
          number: 18,
          buyingPower: 16,
          victoryPoints: 4,
          rubySpace: false,
          end: false
        },
        {
          number: 19,
          buyingPower: 17,
          victoryPoints: 4,
          rubySpace: false,
          end: false
        },
        {
          number: 20,
          buyingPower: 17,
          victoryPoints: 4,
          rubySpace: true,
          end: false
        },
        {
          number: 21,
          buyingPower: 18,
          victoryPoints: 4,
          rubySpace: false,
          end: false
        },
        {
          number: 22,
          buyingPower: 18,
          victoryPoints: 5,
          rubySpace: false,
          end: false
        },
        {
          number: 23,
          buyingPower: 19,
          victoryPoints: 5,
          rubySpace: false,
          end: false
        },
        {
          number: 24,
          buyingPower: 19,
          victoryPoints: 5,
          rubySpace: true,
          end: false
        },
        {
          number: 25,
          buyingPower: 20,
          victoryPoints: 5,
          rubySpace: false,
          end: false
        },
        {
          number: 26,
          buyingPower: 20,
          victoryPoints: 6,
          rubySpace: false,
          end: false
        },
        {
          number: 27,
          buyingPower: 21,
          victoryPoints: 6,
          rubySpace: false,
          end: false
        },
        {
          number: 28,
          buyingPower: 21,
          victoryPoints: 6,
          rubySpace: true,
          end: false
        },
        {
          number: 29,
          buyingPower: 22,
          victoryPoints: 7,
          rubySpace: false,
          end: false
        },
        {
          number: 30,
          buyingPower: 22,
          victoryPoints: 7,
          rubySpace: true,
          end: false
        },
        {
          number: 31,
          buyingPower: 23,
          victoryPoints: 7,
          rubySpace: false,
          end: false
        },
        {
          number: 32,
          buyingPower: 23,
          victoryPoints: 8,
          rubySpace: false,
          end: false
        },
        {
          number: 33,
          buyingPower: 24,
          victoryPoints: 8,
          rubySpace: false,
          end: false
        },
        {
          number: 34,
          buyingPower: 24,
          victoryPoints: 8,
          rubySpace: true,
          end: false
        },
        {
          number: 35,
          buyingPower: 25,
          victoryPoints: 9,
          rubySpace: false,
          end: false
        },
        {
          number: 36,
          buyingPower: 25,
          victoryPoints: 9,
          rubySpace: true,
          end: false
        },
        {
          number: 37,
          buyingPower: 26,
          victoryPoints: 9,
          rubySpace: false,
          end: false
        },
        {
          number: 38,
          buyingPower: 26,
          victoryPoints: 10,
          rubySpace: false,
          end: false
        },
        {
          number: 39,
          buyingPower: 27,
          victoryPoints: 10,
          rubySpace: false,
          end: false
        },
        {
          number: 40,
          buyingPower: 27,
          victoryPoints: 10,
          rubySpace: true,
          end: false
        },
        {
          number: 41,
          buyingPower: 28,
          victoryPoints: 11,
          rubySpace: false,
          end: false
        },
        {
          number: 42,
          buyingPower: 28,
          victoryPoints: 11,
          rubySpace: true,
          end: false
        },
        {
          number: 43,
          buyingPower: 29,
          victoryPoints: 11,
          rubySpace: false,
          end: false
        },
        {
          number: 44,
          buyingPower: 29,
          victoryPoints: 12,
          rubySpace: false,
          end: false
        },
        {
          number: 45,
          buyingPower: 30,
          victoryPoints: 12,
          rubySpace: false,
          end: false
        },
        {
          number: 46,
          buyingPower: 30,
          victoryPoints: 12,
          rubySpace: true,
          end: false
        },
        {
          number: 47,
          buyingPower: 31,
          victoryPoints: 12,
          rubySpace: false,
          end: false
        },
        {
          number: 48,
          buyingPower: 31,
          victoryPoints: 13,
          rubySpace: false,
          end: false
        },
        {
          number: 49,
          buyingPower: 32,
          victoryPoints: 13,
          rubySpace: false,
          end: false
        },
        {
          number: 50,
          buyingPower: 32,
          victoryPoints: 13,
          rubySpace: true,
          end: false
        },
        {
          number: 51,
          buyingPower: 33,
          victoryPoints: 14,
          rubySpace: false,
          end: false
        },
        {
          number: 52,
          buyingPower: 33,
          victoryPoints: 14,
          rubySpace: true,
          end: false
        },
        {
          number: 53,
          buyingPower: 35,
          victoryPoints: 15,
          rubySpace: false,
          end: true
        },
      ]


    let bagForTurn = [...storeObject.bag];

    if(!menuShow) {menuHight = 4}

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }

    function handleMenuToggle() {
        setMenuShow((pre) =>  !pre) 
    }

    window.addEventListener('resize', handleResize);

    console.log(storeObject)

    return (
        <div className="homeMain">
            {menuShow ? <Header toggleMenu={handleMenuToggle} /> : ""}
            <div 
            className="homeBody" 
            style={{minHeight: (height - menuHight)}}
            >
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
                    <button>Start Game</button>
                </div>
                <BoardP1 bagForTurn={bagForTurn} scoreTrack={scoreTrack} chipSpace={0} screenWidth={500} />
            </div>
        </div>
    )
}