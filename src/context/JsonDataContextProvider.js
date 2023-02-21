import dataJson from "../data/books.json";
import jsonDataContext from "./jsonDataContext";

const JsonDataContextProvider = (props) => {
  const bookList = dataJson.books;

  return (
    <jsonDataContext.Provider value={bookList}>
      {props.children}
    </jsonDataContext.Provider>
  );
};
export default JsonDataContextProvider;
