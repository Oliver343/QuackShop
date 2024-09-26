import React, { useContext } from "react";
import { StoreContextWrapper } from "../store/ContextProvider"

const ChipImages = (props) => {
  const storeObject = useContext(StoreContextWrapper)


  return (
    <div>
      <img
        className={"chips chip" + props.chipSpace}
        src={props.img}
        width={storeObject.chipSize }
        style={{
          maxWidth: "80px",
          top: (storeObject.centerHeight / storeObject.chipTopArr[props.chipSpace]) + (storeObject.menuShow ? 130 : 53),
          left: storeObject.centerWidth / storeObject.chipLeftArr[props.chipSpace], // storeObject.chipLeftArr[props.chipSpace]  &&&& storeObject.chipTopArr[props.chipSpace]
        }}
      ></img>
    </div>
  );
};

export default ChipImages;
