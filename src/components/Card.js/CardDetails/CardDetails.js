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
  return (
    <>
      <div>
        {Object.keys(data).length !== 0 && (
          <>
            <h1 className="font-semibold text-lg ">{data.name}</h1>
            <p> Authors: {data.authors.join(", ")}</p>
            <p> country: {data.country}</p>
            <p> Total characters :{data.characters.length}</p>
            <p> isbn :{data.isbn}</p>
            <p> numberOfPages :{data.numberOfPages}</p>
            <p> publisher: {data.publisher}</p>
            <p> mediaType: {data.mediaType}</p>
            <p> released date: {new Date(data.released).toDateString()}</p>
          </>
        )}
      </div>
    </>
  );
};

export default CardDetails;

{
  /* <h1 className="font-semibold text-lg ">{data.name}</h1>
        <p> Authors: {authors}</p>
        <p> country: {data.country}</p>
        <p> Total characters :{data.characters.length}</p>
        <p> isbn :{data.isbn}</p>
        <p> numberOfPages :{data.numberOfPages}</p>
        <p> publisher: {data.publisher}</p>
        <p> mediaType: {data.mediaType}</p>
        <p> released date: {date}</p> */
}
