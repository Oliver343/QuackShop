import React, { useState, useRef, useContext } from "react";
import ChipImages from "../components/ChipImages";
import { StoreContextWrapper } from "../store/ContextProvider"

import scoreSpace from "../img/scoreSpace.png";
import board from "../img/board.png";
import boardBoom from "../img/boardboom.png";
import dropG from "../img/dropG.png"

const BoardP1 = (props) => {
  const [currentPot, setCurrentPot] = useState([]);
  const [exploded, setExploded] = useState(false);
  const [stopped, setStopped] = useState(false);
  const storeObject = useContext(StoreContextWrapper)
  let boardImage = board
  let maxValue = ((storeObject.width < storeObject.height ? storeObject.width : storeObject.height) - 4 )


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
    const randomNo = Math.floor(Math.random() * props.bagForTurn.length);
    const currentIngredient = props.bagForTurn.splice(randomNo, 1)[0];
    console.log(currentIngredient);
    chipSpace.current = chipSpace.current + currentIngredient.value;
    currentIngredient["chipSpace"] = chipSpace.current;
    let tempArr = [...currentPot];
    tempArr.push(currentIngredient);
    console.log(tempArr);
    setCurrentPot(tempArr);
    console.log(props.bagForTurn);
    if (currentIngredient.volatile) {
      cherrybombValue.current =
        cherrybombValue.current + currentIngredient.value;
    }
    if (cherrybombValue.current >= 8) {
      setExploded(true);
    }
  }

  let mappedChips = currentPot.map((ingredient) => {
    return <ChipImages chipSpace={ingredient.chipSpace} img={ingredient.img} />;
  });

  return (
    <div>
      <div className="boardBar">
        <div className="row">
          <div className="col-6">
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
        <img className="drop"  src={dropG} />

      </div>
    </div>
  );
};

export default BoardP1;
