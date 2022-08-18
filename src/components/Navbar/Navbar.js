import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setResourceType } from "../../features/Slice";

const Navbar = () => {
  const resourceTypes = ["Books", "Characters", "Houses"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDispatch = (e) => {
    navigate("/", { replace: true });
    const newResource = e.currentTarget.id.toLowerCase();
    dispatch(setResourceType(newResource));
  };

  return (
    <div className="flex justify-around w-[30%] mt-10">
      {resourceTypes.map((resources, index) => {
        return (
          <>
            <p key={index} id={resources} onClick={handleDispatch}>
              {resources}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Navbar;
