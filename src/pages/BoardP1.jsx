import React, { useState, useRef, useContext, useEffect } from "react";
import ChipImages from "../components/ChipImages";
import { StoreContextWrapper } from "../store/ContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import scoreSpace from "../img/scoreSpace.png";
import board from "../img/board.png";
import boardBoom from "../img/boardboom.png";
import dropG from "../img/dropG.png"
import ModalEffect from "../components/ModalEffect";

const BoardP1 = (props) => {
  const exploaded = useRef(false);
  const storeObject = useContext(StoreContextWrapper)
  let boardImage = board
  let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )

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


  async function drawRandomIngredient() {
    storeObject.p2DrawDecide()
    const randomNo = Math.floor(Math.random() * storeObject.p1BagCurrentRound.length);
    let currentIngredient = storeObject.p1BagCurrentRound[randomNo]

    storeObject.setP1BagCurrentRound(prev => prev.filter(item => item !== currentIngredient ))

    storeObject.setP1ChipSpace(prev => {
      console.log("SET CHIP SPACE")
      currentIngredient["chipSpace"] = prev + currentIngredient.value;
      return prev + currentIngredient.value
    })

    storeObject.setP1PotCurrentRound(prev => {
      return (prev ? [...prev, currentIngredient] : currentIngredient)
    })


    if (currentIngredient.volatile) {
      storeObject.setP1CherrybombValue((prev) => {
        if ((prev + currentIngredient.value) >= 8) {
          console.log("BLOWED UP")
          storeObject.setP1Exploded(true);
          exploaded.current = true;
          storeObject.setP1Stopped(true);
          storeObject.setPageActive(2)
        }
        return prev + currentIngredient.value
      })
    }

    if (currentIngredient.effect){
      storeObject.setModalEffect(true)
    }

  
  }

  let mappedChips = storeObject.p1PotCurrentRound.map((ingredient, i) => {
    return <ChipImages key={i} chipSpace={ingredient.chipSpace} img={ingredient.img} />;
  });

  storeObject.setBuyPowerP1(storeObject.scoreTrack[storeObject.p1ChipSpace +1].buyingPower)

  return (
    <div>
      {(storeObject.modalEffect ? <ModalEffect /> : "")}
      <div className="boardBar">
        <div className="buttonBox">
            <div>
              {storeObject.p1CherrybombValue}
              {" "}
              <div id="explodedText" hidden={true} style={{ color: "red" }}>
                BOOM!
              </div>
              <button id="pullButton" onClick={() => drawRandomIngredient()}>
                PULL!
              </button>{" "}
              <button id="stopButton" onClick={() => {
                storeObject.setP1Stopped(true);
                storeObject.setP2Stopped(true);
                storeObject.setPageActive(2);
                }}>
                STOP!
              </button>{" "}
              <div id="scoreBox" >
                VP = {storeObject.scoreTrack[storeObject.p1ChipSpace +1].victoryPoints} BP = {storeObject.scoreTrack[storeObject.p1ChipSpace +1].buyingPower}
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
          top: (storeObject.centerHeight / storeObject.chipTopArr[storeObject.player1Stats.droplet]) + (storeObject.menuShow ? 130 : 54),
          left: storeObject.centerWidth / storeObject.chipLeftArr[storeObject.player1Stats.droplet], 
        }}/>

      </div>
    </div>
  );
};

export default BoardP1;
