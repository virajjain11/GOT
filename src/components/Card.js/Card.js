import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ element }) => {
  const navigate = useNavigate();

  const arr = element.url.split("/");
  const [id, type] = [Number(arr[arr.length - 1]), arr[arr.length - 2]];

  return (
    <>
      <div className="m-2 sm:min-w-[450px] min-w-[85%] space-y-2 bg-orange-300 p-2 rounded-md">
        <h1 className="font-semibold text-lg text-center">{element.name}</h1>
        <p> Authors: {element.authors}</p>
        <p> country: {element.country}</p>
        <p> Total characters :{element.characters.length}</p>
        {/* <p> mediaType: {element.mediaType}</p> */}
        <button
          className="bg-slate-400 p-1 rounded-sm"
          onClick={() => navigate(`/${type}/${id}`)}
        >
          know more...
        </button>
      </div>
    </>
  );
};

export default Card;
