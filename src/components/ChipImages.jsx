import React, { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"

const ChipImages = (props) => {
  const storeObject = useContext(StoreContextWrapper)
  let smaller = (storeObject.width < storeObject.height) ? storeObject.width : storeObject.height
  let chipSize = (smaller < 1000) ? smaller / 13 : 78
  let leftSize = (smaller < 1000) ? smaller / 2.18 : 460
  let topSize = ((smaller < 1000) ? (smaller -60) / 2.80 : 330) + 230

  const maxW = 1000
  const maxH = 1000

  let leftSizeB = (maxW > storeObject.width) ?  storeObject.width / 2 : maxW / 2
  let topSizeB = (maxH > storeObject.heigt) ?  storeObject.height / 2 : maxH / 2

  console.log(storeObject.centerHeight)
  console.log(storeObject.centerWidth)

  return (
    <div>
      <img
        className={"chips chip" + props.chipSpace}
        src={props.img}
        width={chipSize}
        style={{
          maxWidth: "80px",
          top: storeObject.centerHeight,
          left: storeObject.centerWidth,
        }}
      ></img>
    </div>
  );
};

export default ChipImages;
