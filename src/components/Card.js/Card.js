import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ element, resourceType }) => {
  const navigate = useNavigate();
  let resourceName;
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
      resourceName = "Books";
      resourceData = {
        Authors: element.authors?.join(", "),
        country: element.country,
        "Total characters": element?.characters?.length,
      };
      break;

    case "characters":
      resourceName = "Characters";
      heading = element.name ? element.name : `Character ${id}`;
      resourceData = {
        Aliases:
          element.aliases?.length > 1 ? element.aliases.join(", ") : " --",
        culture: element.culture ? element.culture : " --",
      };
      break;

    case "houses":
      resourceName = "Houses";
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
      <div className="m-4 shadow-xl	 sm:min-w-[370px] min-w-[85%] space-y-2   rounded-md max-w-[370px] ">
        <div className="font-semibold tracking-wider text-lg text-center bg-[#B4C7D9] rounded-t-md py-4">
          {resourceName}
        </div>
        <div className="p-3">
          <h1 className="font-semibold text-lg text-center pb-3">{heading}</h1>
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
            // className="bg-slate-400 px-2 py-1 rounded-sm"
            className="text-[#0D4E89] pt-2"
            onClick={() => navigate(`/${type}/${id}`)}
          >
            Read more...
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
