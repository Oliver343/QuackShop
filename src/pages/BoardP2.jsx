import React, { useState, useRef, useContext, useEffect } from "react";
import ChipImages from "../components/ChipImages";
import { StoreContextWrapper } from "../store/ContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import scoreSpace from "../img/scoreSpace.png";
import board from "../img/board.png";
import boardBoom from "../img/boardboom.png";
import dropG from "../img/dropG.png"

const BoardP2 = (props) => {
  const exploaded = useRef(false);
  const storeObject = useContext(StoreContextWrapper)
  let boardImage = board
  let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )

  useEffect(() => {
    if (storeObject.p2Stopped) {
      document.getElementById("pullButton").disabled = true;
      document.getElementById("stopButton").disabled = true;
      document.getElementById("scoreBox").hidden = false;
    }

    if (storeObject.p2Exploded) {
    document.getElementById("explodedText").hidden = false;
    document.getElementById("newBoard").style.backgroundImage = "url(" + boardBoom + ")" ;
    }
  },[storeObject.p2Stopped, storeObject.p2Exploded]);


  let chipSpace = useRef(0);
  let cherrybombValue = useRef(0);

  function drawRandomIngredient() {
    const randomNo = Math.floor(Math.random() * storeObject.p2BagCurrentRound.length);
    let currentIngredient = storeObject.p2BagCurrentRound[randomNo]

    storeObject.setP2BagCurrentRound(prev => prev.filter(item => item !== currentIngredient ))

    storeObject.setP2ChipSpace(prev => {
      currentIngredient["chipSpace"] = prev + currentIngredient.value;
      return prev + currentIngredient.value
    })

    storeObject.setP2PotCurrentRound(prev => {
      return (prev ? [...prev, currentIngredient] : currentIngredient)
    })

    if (currentIngredient.volatile) {
      cherrybombValue.current =
      cherrybombValue.current + currentIngredient.value;
    }
    if (cherrybombValue.current >= 8) {
      storeObject.setP2Exploded(true);
      exploaded.current = true;
      storeObject.setP2Stopped(true);
      // storeObject.setPageActive(2)
    }
  
  }

  console.log("P2 pot...")
  console.log(storeObject.p2PotCurrentRound)

  let mappedChips2 = storeObject.p2PotCurrentRound.map((ingredient, i) => {
    return <ChipImages key={i} chipSpace={ingredient.chipSpace} img={ingredient.img} />;
  });

  return (
    <div>
      <div className="boardBar">
        <div className="buttonBox">
          <div>Player 2...</div>
            <div>
              {" "}
              <div id="explodedText" hidden={true} style={{ color: "red" }}>
                BOOM!
              </div>
              <button id="pullButton" onClick={() => drawRandomIngredient()} disabled>
                PULL!
              </button>{" "}
              <button id="stopButton" onClick={() => {storeObject.setP2Stopped(true); storeObject.setPageActive(2)}} disabled>
                STOP!
              </button>{" "}
              <div id="scoreBox" hidden={true}>
                VP = {storeObject.scoreTrack[storeObject.p2ChipSpace +1].victoryPoints} BP = {storeObject.scoreTrack[storeObject.p2ChipSpace +1].buyingPower}
              </div>{" "}
            </div>
            <div>
              {storeObject.menuShow ? "" : <button className="menuToggleBtn" onClick={props.handleMenuToggle}><FontAwesomeIcon icon={faBars} /></button>}
            </div>
        </div>
      </div>
        
      <div className="boardBox">

        <div 
        className="newBoard" 
        id="newBoard"
        style={{backgroundImage: 
        "url(" + boardImage + ")", 
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat', 
        width: 1000, maxWidth: maxValue, 
        height: 914, maxHeight: maxValue}}
        >
          {mappedChips2}
        </div>
        <img 
        className="drop"  
        src={dropG} 
        width={storeObject.chipSize - (storeObject.chipSize / 3)}
        height={storeObject.chipSize - (storeObject.chipSize / 3)}
        style={{
          maxWidth: "54px",
          maxHeight: "54px",
          top: (storeObject.centerHeight / storeObject.chipTopArr[storeObject.player1Stats.p1Droplet]) + (storeObject.menuShow ? 130 : 54),
          left: storeObject.centerWidth / storeObject.chipLeftArr[storeObject.player1Stats.p1Droplet], 
        }}/>

      </div>
    </div>
  );
};

export default BoardP2;
