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
    setId((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (id > 2) setId((prev) => prev - 1);
  };

  console.log(data);
  return (
    <div>
      <h1>Home</h1>
      <div className="flex flex-wrap mx-auto">
        {data.length > 0 &&
          data.map((eachObj, index) => (
            <Card key={index} element={eachObj} resourceType={resourceType} />
            // <div>hii</div>
          ))}
      </div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default HomeModal;
