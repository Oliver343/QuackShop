import React, { forwardRef, useState, useEffect, useRef } from "react";
import ChipImages from "../components/ChipImages";

import scoreSpace from "../img/scoreSpace.png";
import board from "../img/board.png";
import boardBoom from "../img/boardboom.png";
import dropG from "../img/dropG.png"

const BoardP1 = (props) => {
  const [currentPot, setCurrentPot] = useState([]);
  const [exploded, setExploded] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  let boardImage = board
  let maxValue = ((width < height ? width : height) - 4 )

  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  } 

  window.addEventListener('resize', handleResize);

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
  console.log("CHIPSPACE");
  console.log(chipSpace);

  console.log("WIDTH")
  console.log(props.width)

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

      <div className="boardBox">
        <div className="row">
          <div className="col-6">
            {" "}
            <h1 id="explodedText" hidden={true} style={{ color: "red" }}>
              BOOM!
            </h1>
            <button id="pullButton" onClick={() => drawRandomIngredient()}>
              PULL!
            </button>{" "}
            <button id="stopButton" onClick={() => setStopped(true)}>
              STOP!
            </button>{" "}
            <h2 id="scoreBox" hidden={true}>
              VP = {props.scoreTrack[chipSpace.current +1].victoryPoints} BP = {props.scoreTrack[chipSpace.current +1].buyingPower}
            </h2>{" "}
          </div>
        </div>
        <div className="newBoard" style={{backgroundImage: "url(" + boardImage + ")", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: 1000, maxWidth: maxValue, height: 1000, maxHeight: maxValue}}>
          {mappedChips}
        </div>
        {/* <img className="boardMain" src={boardImage} style={{width: 900}}/> */}
        <img className="drop" width="90px" src={dropG} />
        <img className={"chips chip" + (chipSpace.current + 1)} width="125px" src={scoreSpace} />

      </div>
    </div>
  );
};

export default BoardP1;
