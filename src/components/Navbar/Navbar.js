import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setResourceType } from "../../features/ResourceSlice";

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
    <>
      <div className="flex flex-col md:flex-row justify-around mt-10 space-y-2">
        <h1 className="text-3xl font-bold tracking-widest mx-auto md:mx-0">
          GOT FANDOM
        </h1>
        <div className="flex justify-around md:w-[30%] md:max-w-[400px]">
          {resourceTypes.map((resources, index) => {
            return (
              <>
                <p
                  className="text-lg font-semibold"
                  key={index}
                  id={resources}
                  onClick={handleDispatch}
                >
                  {resources}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
