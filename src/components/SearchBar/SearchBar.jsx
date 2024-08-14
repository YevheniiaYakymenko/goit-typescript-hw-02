import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search word");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={css.button} type="submit">
          <FiSearch size="15px" />
        </button>
      </form>
      <Toaster />
    </header>
  );
}
