import React from "react";

const Card = ({ element }) => {
  const date = new Date(element.released).toDateString();
  const authors = element.authors.join(", ");
  return (
    <div>
      <div className="m-2 min-w-[450px] ">
        <h1 className="font-semibold text-lg">{element.name}</h1>
        <p> authors: {element.authors}</p>
        <p> characters length:{element.characters.length}</p>
        <p> mediaType: {element.mediaType}</p>
        <button>Know more</button>
      </div>
    </div>
  );
};

export default Card;
