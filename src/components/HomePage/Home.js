import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBooks, removeIndividualItem } from "../../features/Slice";
import Card from "../Card.js/Card";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
    dispatch(removeIndividualItem());
  }, []);

  const {
    AllBooks: books,
    characters,
    houses,
    individualItem,
  } = useSelector((state) => state.books);

  return (
    <div>
      <h1>Home</h1>
      <div className="flex flex-wrap mx-auto">
        {books.length > 0 &&
          books.map((eachObj, index) => <Card key={index} element={eachObj} />)}
      </div>
    </div>
  );
};

export default Home;
