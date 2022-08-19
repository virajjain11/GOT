import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems } from "../../../features/ResourceSlice";

const CardDetails = () => {
  const { resourceType, id } = useParams();
  const dispatch = useDispatch();
  const { individualResource: data } = useSelector((state) => state.resources);

  useEffect(() => {
    dispatch(fetchItems({ type: resourceType, id: id }));
  }, []);

  let resourceData;
  let resourceName;
  let heading;
  if (Object.keys(data).length !== 0) {
    switch (resourceType) {
      case "books":
        resourceName = "Books";
        heading = data.name;
        resourceData = {
          Authors: data.authors.join(", "),
          Country: data.country,
          "Total characters": data.characters.length,
          isbn: data.isbn,
          "Number of Pages": data.numberOfPages,
          "Media Type": data.mediaType,
          "Released date": new Date(data.released).toDateString(),
        };
        break;

      case "characters":
        resourceName = "Characters";

        heading = data.name ? data.name : `Character ${id}`;
        resourceData = {
          id: id,
          Aliases: data.aliases.length > 1 ? data.aliases.join(", ") : " --",
          Culture: data.culture ? data.culture : " --",
          Gender: data.gender,
          playedBy: data.playedBy.length > 1 ? data.playedBy.join(", ") : " --",
          titles: data.titles.length - 1,
          "TV series":
            data.tvSeries.length > 1 ? data.tvSeries.join(", ") : " --",
        };
        break;
      case "houses":
        heading = data.name;
        resourceName = "Houses";

        resourceData = {
          Region: data.region,
          Founded: data.founded,
          "coat of Arms": data.coatOfArms,
          seats: data.seats.join(", "),
          swornMembers: data.swornMembers.length,
          titles: data.titles.length - 1,
          words: data.words,
        };
        break;
      default:
        break;
    }
  }

  return (
    <>
      {Object.keys(data).length !== 0 && (
        <div className=" shadow-lg w-[300px] md:w-[600px] rounded-md  m-[2%] pb-4">
          <h1 className=" bg-[#B4C7D9] font-semibold text-xl rounded-t-md tracking-wider text-center py-4 ">
            {resourceName}
          </h1>

          <h1 className="font-semibold text-xl tracking-wider text-center py-4">
            {heading}
          </h1>
          <div className="pl-2 text-base	">
            {Object.entries(resourceData).map((array, idx) => (
              <p key={idx} className="pl-2 pb-2">
                {array[0]} : {array[1]}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetails;
