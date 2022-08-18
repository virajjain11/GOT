import React from "react";
import { useDispatch } from "react-redux";
import { setResourceType } from "../../features/Slice";

const Navbar = () => {
  const resourceTypes = ["Books", "Characters", "Houses"];
  const dispatch = useDispatch();
  const handleDispatch = (e) => {
    // console.log("need to dispatch");
    const newResource = e.currentTarget.id.toLowerCase();
    console.log(newResource);
    dispatch(setResourceType(newResource));
  };

  return (
    <div className="flex justify-around w-[30%] mt-10">
      {resourceTypes.map((ele, idx) => {
        return (
          <>
            <p key={idx} id={ele} onClick={handleDispatch}>
              {ele}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Navbar;
{
  /* <p key={idx}> {element}</p> */
}
