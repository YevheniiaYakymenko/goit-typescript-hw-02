import { ChangeEvent, FC, FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
};

export default SearchBar;
