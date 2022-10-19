import "./SearchBar.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigateIfNew } from "../../hooks/useNavigateIfNew";

export const SearchBar = () => {
  const [value, setValue] = useState<string>();

  const navigate = useNavigateIfNew();

  let onSubmit = () => {
    if (value) navigate(`/search?${value}`);
  };

  return (
    <form
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
      <div onClick={() => onSubmit()} className="searchBar-icon">
        <SearchIcon fontSize="large"></SearchIcon>
      </div>
    </form>
  );
};
