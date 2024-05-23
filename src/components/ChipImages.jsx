import React, { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"

const ChipImages = (props) => {
  const storeObject = useContext(StoreContextWrapper)
  let smaller = (storeObject.width < storeObject.height) ? storeObject.width : storeObject.height
  let chipSize = (smaller < 1000) ? smaller / 13 : 78


  return (
    <div>
      <img
        className={"chips chip" + props.chipSpace}
        src={props.img}
        width={chipSize}
        style={{
          maxWidth: "80px",
          top: (storeObject.centerHeight / 1.12) + (storeObject.menuShow ? 130 : 53),
          left: storeObject.centerWidth / 1.17, // storeObject.chipLeftArr[props.chipSpace]  &&&& storeObject.chipTopArr[props.chipSpace]
        }}
      ></img>
    </div>
  );
};

export default ChipImages;
