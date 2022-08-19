import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, removeIndividualItem } from "../../features/Slice";
import Card from "../Card.js/Card";

const HomeModal = () => {
  const [id, setId] = useState(1);
  const dispatch = useDispatch();
  // const name = "characters";

  useEffect(() => {
    dispatch(removeIndividualItem());
  }, []);

  const {
    // individualItem,
    resourceType,
    general: data,
  } = useSelector((state) => state.books);

  // const resourceType = "characters";
  useEffect(() => {
    dispatch(fetchData({ type: resourceType, id: id }));
    dispatch(removeIndividualItem());
  }, [resourceType, id]);

  const handleNext = () => {
    if (resourceType !== "books") setId((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (id > 2) setId((prev) => prev - 1);
  };

  console.log(data);
  return (
    <div>
      <div className="flex flex-wrap mx-auto">
        {data.length > 0 &&
          data.map((eachObj, index) => (
            <Card key={index} element={eachObj} resourceType={resourceType} />
          ))}
      </div>
      <div className=" w-[300px] mx-auto space-x-4 my-10">
        <button
          onClick={handlePrevious}
          className=" text-indigo-50 rounded-sm p-2  bg-violet-500 hover:bg-violet-600 active:bg-violet-700 active:ring active:ring-violet-300 "
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className=" text-indigo-50 rounded-sm p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 active:ring active:ring-violet-300  ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeModal;
