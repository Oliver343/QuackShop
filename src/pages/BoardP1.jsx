import React, { useState, useRef, useContext, useEffect } from "react";
import ChipImages from "../components/ChipImages";
import { StoreContextWrapper } from "../store/ContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import scoreSpace from "../img/scoreSpace.png";
import board from "../img/board.png";
import boardBoom from "../img/boardboom.png";
import dropG from "../img/dropG.png"

const BoardP1 = (props) => {
  const exploaded = useRef(false);
  const storeObject = useContext(StoreContextWrapper)
  let boardImage = board
  let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )
  console.log(storeObject.p1BagCurrentRound)

  useEffect(() => {
    if (storeObject.p1Stopped) {
      document.getElementById("pullButton").disabled = true;
      document.getElementById("stopButton").disabled = true;
      document.getElementById("scoreBox").hidden = false;
    }

    if (storeObject.p1Exploded) {
    document.getElementById("explodedText").hidden = false;
    document.getElementById("newBoard").style.backgroundImage = "url(" + boardBoom + ")" ;
    }
  },[storeObject.p1Stopped, storeObject.p1Exploded]);


  let chipSpace = useRef(0);
  let cherrybombValue = useRef(0);

  console.log(storeObject.p1CherrybombValue)

  function drawRandomIngredient() {
    const randomNo = Math.floor(Math.random() * storeObject.p1BagCurrentRound.length);
    let currentIngredient = storeObject.p1BagCurrentRound[randomNo]

    storeObject.setP1BagCurrentRound(prev => prev.filter(item => item !== currentIngredient ))

    storeObject.setP1ChipSpace(prev => {
      currentIngredient["chipSpace"] = prev + currentIngredient.value;
      return prev + currentIngredient.value
    })

    storeObject.setP1PotCurrentRound(prev => {
      return (prev ? [...prev, currentIngredient] : currentIngredient)
    })

    if (currentIngredient.volatile) {
      cherrybombValue.current =
      cherrybombValue.current + currentIngredient.value;
    }
    if (cherrybombValue.current >= 8) {
      storeObject.setP1Exploded(true);
      exploaded.current = true;
      storeObject.setP1Stopped(true);
      storeObject.setPageActive(2)
    }
  
  }

  let mappedChips = storeObject.p1PotCurrentRound.map((ingredient) => {
    return <ChipImages chipSpace={ingredient.chipSpace} img={ingredient.img} />;
  });

  return (
    <div>
      <div className="boardBar">
        <div className="buttonBox">
            <div>
              {" "}
              <div id="explodedText" hidden={true} style={{ color: "red" }}>
                BOOM!
              </div>
              <button id="pullButton" onClick={() => drawRandomIngredient()}>
                PULL!
              </button>{" "}
              <button id="stopButton" onClick={() => {storeObject.setP1Stopped(true); storeObject.setPageActive(2)}}>
                STOP!
              </button>{" "}
              <div id="scoreBox" hidden={true}>
                VP = {props.scoreTrack[storeObject.p1ChipSpace +1].victoryPoints} BP = {props.scoreTrack[storeObject.p1ChipSpace +1].buyingPower}
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
          {mappedChips}
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

export default BoardP1;
