import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems } from "../../../features/Slice";

const CardDetails = () => {
  const { name, id } = useParams();
  const dispatch = useDispatch();
  const { individualItem: data } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchItems({ type: name, id: id }));
  }, []);
  // console.log(data);
  let obj;
  if (Object.keys(data).length !== 0) {
    obj = {
      Authors: data.authors.join(", "),
      Country: data.country,
      "Total characters": data.characters.length,
      isbn: data.isbn,
      "Number of Pages": data.numberOfPages,
      "Media Type": data.mediaType,
      "Released date": new Date(data.released).toDateString(),
    };
  }
  return (
    <>
      {/* <div> */}
      {Object.keys(data).length !== 0 && (
        <div className="bg-slate-300  w-[300px] md:w-[600px]  m-[2%] pb-4">
          <h1 className="font-semibold text-xl tracking-wider text-center pt-4">
            {data.name}
          </h1>
          {Object.entries(obj).map((array, idx) => (
            <p key={idx} className="pl-2 pb-2">
              {array[0]} :{array[1]}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default CardDetails;
