import React, { useState, useRef, useContext } from "react";
import ChipImages from "../components/ChipImages";
import { StoreContextWrapper } from "../store/ContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import scoreSpace from "../img/scoreSpace.png";
import board from "../img/board.png";
import boardBoom from "../img/boardboom.png";
import dropG from "../img/dropG.png"

const BoardP1 = (props) => {
  const [exploded, setExploded] = useState(false);
  const [stopped, setStopped] = useState(false);
  const storeObject = useContext(StoreContextWrapper)
  let boardImage = board
  let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )
  console.log(storeObject.p1BagCurrentRound)


  if (exploded || stopped) {
    document.getElementById("pullButton").disabled = true;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("scoreBox").hidden = false;
    if (exploded) {
      document.getElementById("explodedText").hidden = false;
      boardImage = boardBoom
    }
  }

  let chipSpace = useRef(0);
  let cherrybombValue = useRef(0);

  function drawRandomIngredient() {
    const randomNo = Math.floor(Math.random() * storeObject.p1BagCurrentRound.length);
    let currentIngredient = storeObject.p1BagCurrentRound[randomNo]

    storeObject.setP1BagCurrentRound(prev => prev.filter(item => item !== currentIngredient ))

    chipSpace.current = chipSpace.current + currentIngredient.value;
    currentIngredient["chipSpace"] = chipSpace.current;

    storeObject.setP1PotCurrentRound(pre => {
      return (pre ? [...pre, currentIngredient] : currentIngredient)
    })

    if (currentIngredient.volatile) {
      cherrybombValue.current =
        cherrybombValue.current + currentIngredient.value;
    }
    if (cherrybombValue.current >= 8) {
      setExploded(true);
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
              <button id="stopButton" onClick={() => setStopped(true)}>
                STOP!
              </button>{" "}
              <div id="scoreBox" hidden={true}>
                VP = {props.scoreTrack[chipSpace.current +1].victoryPoints} BP = {props.scoreTrack[chipSpace.current +1].buyingPower}
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
        style={{backgroundImage: 
        "url(" + boardImage + ")", 
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat', 
        width: 1000, maxWidth: maxValue, 
        height: 914, maxHeight: maxValue}}
        >
          {mappedChips}
        </div>
        <img className="drop"  src={dropG} 
        
        style={{
          top: (storeObject.centerHeight /1.470) + (storeObject.menuShow ? 130 : 54),
          left: storeObject.centerWidth /1.071, 
        }}/>

      </div>
    </div>
  );
};

export default BoardP1;
