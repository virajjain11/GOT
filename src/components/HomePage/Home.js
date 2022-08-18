import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBooks } from "../../features/Slice";

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
  //   console.log("books", houses);
  return (
    <div>
      <h1>Home</h1>
      <div className="flex flex-wrap">
        {books.length > 0 &&
          books.map((eachObj, index) => {
            const date = new Date(eachObj.released).toDateString();
            const authors = eachObj.authors.join(", ");
            // console.log(date, authors);
            return (
              <>
                <div className="m-2 min-w-[450px] ">
                  <h1 className="font-semibold text-lg">{eachObj.name}</h1>
                  <p> authors: {eachObj.authors}</p>
                  <p> characters length:{eachObj.characters.length}</p>
                  <p> mediaType: {eachObj.mediaType}</p>
                  <button>Know more</button>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
