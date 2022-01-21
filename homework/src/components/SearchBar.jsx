import React from "react";
import styles from "./SearchBar.module.css";
import { IoAdd } from "react-icons/io5";

export default function SearchBar({ onSearch }) {

  const [search, setSearch] = React.useState("");
  // acá va tu código
  const handleOnSearch = () => {
    // const input = document.getElementById("searchInput");
    // onSearch(input.value);
    // input.value = "";
    onSearch(search);
    setSearch("");
  };

  const Press_Enter = (event) => {
    if (event.key === "Enter") return handleOnSearch();
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        id="searchInput"
        placeholder="Añadir una ciudad..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={Press_Enter}
      />
      <button className={styles.button} onClick={handleOnSearch}>
        <IoAdd />
      </button>
    </div>
  );
}
