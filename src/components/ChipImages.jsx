import React from "react";

const ChipImages = (props) => {
  return (
    <div>
      <img
        className={"chips chip" + props.chipSpace}
        src={props.img}
        width={68}
        style={{maxWidth: "80px"}}
      ></img>
    </div>
  );
};

export default ChipImages;
