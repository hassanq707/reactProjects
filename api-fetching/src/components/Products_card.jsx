import React from "react";

export const Products_card = (props) => {
  const {image,title,description} = props.data
  return (
    <div>
      <img
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
        src={image}
        className="aspect-square w-20 "
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};