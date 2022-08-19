import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  removeIndividualResource,
} from "../../features/ResourceSlice";
import Card from "../Card.js/Card";

const HomeModal = () => {
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeIndividualResource());
  }, []);

  const { resourceType, individualResourceData: data } = useSelector(
    (state) => state.resources
  );

  useEffect(() => {
    dispatch(fetchData({ type: resourceType, id: id }));
    dispatch(removeIndividualResource());
  }, [resourceType, id]);

  const handleNext = () => {
    if (resourceType !== "books") setId((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (id > 2) setId((prev) => prev - 1);
  };

  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="flex flex-wrap">
        {data.length > 0 &&
          data.map((eachObj, index) => (
            <Card key={index} element={eachObj} resourceType={resourceType} />
          ))}
      </div>
      <div className=" w-[300px] mx-auto space-x-4 my-10">
        <button
          onClick={handlePrevious}
          className="text-lg	 text-white rounded-sm py-2 px-5 bg-[#0D4E89] hover:text-slate-600 hover:bg-[#B4C7D9] active:bg-[#082E50] active:text-white active:ring active:ring-[#0D4E89] ease-in-out"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="text-lg	 text-white rounded-sm py-2 px-5 bg-[#0D4E89] hover:text-slate-600 hover:bg-[#B4C7D9] active:bg-[#082E50] active:text-white active:ring active:ring-[#0D4E89] ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeModal;
