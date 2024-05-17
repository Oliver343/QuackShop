import React, { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"

const ChipImages = (props) => {
  const storeObject = useContext(StoreContextWrapper)
  let smaller = (storeObject.width < storeObject.height) ? storeObject.width : storeObject.height
  let chipSize = (smaller < 1000) ? smaller / 13 : 68
  let leftSize = (smaller < 1000) ? smaller / 2 : 400

  console.log(leftSize)

  return (
    <div>
      <img
        className={"chips chip" + props.chipSpace}
        src={props.img}
        width={chipSize}
        style={{
          maxWidth: "80px",
          top: "300px",
          left: leftSize,
        }}
      ></img>
    </div>
  );
};

export default ChipImages;
