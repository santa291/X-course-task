import { useContext, useReducer, useRef } from "react";
import BookListItem from "./BookListItem";
import { Input, Select } from "antd";
import jsonDataContext from "../context/jsonDataContext";
import styles from "../styles/book-list.module.css";
const { Search } = Input;

const initialState = {
  priceParam: "all",
  searchParam: "",
};
const filterByName = (str, list) => {
  return list.filter((item) => item.title.toLowerCase().includes(str));
};

const filterByPrice = (value, list) => {
  switch (value) {
    case "less_then_15":
      return list.filter((item) => item.price < 15);

    case "from_15_to_30":
      return list.filter((item) => item.price > 15 && item.price < 30);

    case "more_then_30":
      return list.filter((item) => item.price > 30);

    default:
      return list;
  }
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "APPLY_FILTER_BY_NAME":
      return {
        ...state,
        searchParam: action.payload,
      };
    case "APPLY_FILTER_BY_PRICE":
      return {
        ...state,
        priceParam: action.payload,
      };
    default:
      return null;
  }
};

export default function BookList() {
  const bookList = useContext(jsonDataContext);
  const [state, dispatchFilter] = useReducer(filterReducer, initialState);
  const searchInput = useRef("");
  const resultedList = filterByName(state.searchParam, filterByPrice(state.priceParam, bookList));

  const handleInputChange = () => {
    const filterPhrase = searchInput.current.input.value.toLowerCase();
    dispatchFilter({
      type: "APPLY_FILTER_BY_NAME",
      payload: filterPhrase,
    });
  };

  const handleSelectChange = (value) => {
    dispatchFilter({
      type: "APPLY_FILTER_BY_PRICE",
      payload: value,
    });
  };

  const bookListToShow = (list) => {
    return list.map((item) => (
      <BookListItem
        key={item.id}
        bookID={item.id}
      />
    ));
  };

  return (
    <>
      <div className={styles["filters-container"]}>
        <Search
          className={styles["filter-input"]}
          placeholder="Search by book name"
          onChange={handleInputChange}
          enterButton
          size="large"
          ref={searchInput}
        />

        <Select
          className={styles["filter-select"]}
          defaultValue="Sort by price"
          size="large"
          style={{}}
          onChange={handleSelectChange}
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "less_then_15",
              label: "<15",
            },
            {
              value: "from_15_to_30",
              label: "from 15 to 30",
            },
            {
              value: "more_then_30",
              label: ">30",
            },
          ]}
        />
      </div>
      <div className={styles["book-list-wrapper"]}>{bookListToShow(resultedList)}</div>
    </>
  );
}
