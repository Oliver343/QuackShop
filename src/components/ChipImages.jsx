import React from "react";

const ChipImages = (props) => {
  return (
    <div>
      <img
        className={"chips chip" + props.chipSpace}
        src={props.img}
        width="125px"
      ></img>
    </div>
  );
};

export default ChipImages;
