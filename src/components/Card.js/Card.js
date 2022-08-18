import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ element, resourceType }) => {
  const navigate = useNavigate();
  let resourceData;
  let heading;
  const resourceDetails = element.url.split("/");
  const [id, type] = [
    Number(resourceDetails[resourceDetails.length - 1]),
    resourceDetails[resourceDetails.length - 2],
  ];

  switch (resourceType) {
    case "books":
      heading = element.name;
      resourceData = {
        Authors: element.authors?.join(", "),
        country: element.country,
        "Total characters": element?.characters?.length,
      };
      break;

    case "characters":
      heading = element.name ? element.name : `Character ${id}`;
      resourceData = {
        Aliases:
          element.aliases?.length > 1 ? element.aliases.join(", ") : " --",
        culture: element.culture ? element.culture : " --",
      };
      break;

    case "houses":
      heading = element.name;
      resourceData = {
        Region: element.region,
        Seats: element.seats?.length > 1 ? element.seats.join(", ") : " --",
      };
      break;

    default:
      break;
  }

  return (
    <>
      <div className="m-2 sm:min-w-[450px] min-w-[85%] space-y-2 bg-orange-300 p-2 rounded-md">
        <h1 className="font-semibold text-lg text-center">{heading}</h1>
        {Object.entries(resourceData).map((arr, idx) => {
          return (
            <>
              <p key={idx}>
                {arr[0]} : {arr[1]}
              </p>
            </>
          );
        })}
        <button
          className="bg-slate-400 px-2 py-1 rounded-sm"
          onClick={() => navigate(`/${type}/${id}`)}
        >
          know more...
        </button>
      </div>
    </>
  );
};

export default Card;
