import "./SearchBar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  const [value, setValue] = useState<string>();

  const navigate = useNavigate();

  let onSubmit = () => {
    navigate(`/search?${value}`);
  };

  return (
    <form
      style={{ display: "flex" }}
      className={"searchBar-container"}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        placeholder="Search..."
        className="searchBar"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      ></input>
      <div onClick={() => onSubmit()} className="searchIcon">
        <FontAwesomeIcon icon={faMagnifyingGlass} size={"1x"} />
      </div>
    </form>
  );
};
