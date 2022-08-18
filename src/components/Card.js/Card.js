import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ element, resourceType }) => {
  // const [heading, setHeading] = useState("");
  const navigate = useNavigate();
  let obj;
  const arr = element.url.split("/");
  const [id, type] = [Number(arr[arr.length - 1]), arr[arr.length - 2]];
  switch (resourceType) {
    case "books":
      console.log("resource is books");
      obj = {
        Authors: element.authors,
        country: element.country,
        // "Total characters": element.characters.length,
      };
      // setHeading(element.name);
      break;

    case "characters":
      console.log("resource is charrrrrr");

      obj = {
        Aliases: element.aliases,
        culture: element.culture ? element.culture : "none",
        // "Total characters": element.characters.length,
      };
      // setHeading()
      break;
    case "houses":
      console.log("resource is houseee");

      obj = {
        Region: element.region,
        Founded: element.founded,
        // "Total characters": element.characters.length,
      };
      break;
    default:
      break;
  }

  return (
    <>
      <div className="m-2 sm:min-w-[450px] min-w-[85%] space-y-2 bg-orange-300 p-2 rounded-md">
        {/* <h1 className="font-semibold text-lg text-center">{element.name}</h1> */}
        {Object.entries(obj).map((arr, idx) => {
          return (
            <>
              <p key={idx}>
                {arr[0]} :{arr[1]}
              </p>
            </>
          );
        })}
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
