import { FC, FormEvent, useState } from "react";
import s from "./SearchBar.module.css";

interface onSubmitProps {
  onSubmit: (newQuery: string) => void;
}

const SearchBar: FC<onSubmitProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
