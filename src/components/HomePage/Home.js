import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBooks } from "../../features/Slice";
import Card from "../Card.js/Card";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);
  //   const books = useSelector((state) => console.log(state));
  const {
    AllBooks: books,
    characters,
    houses,
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
