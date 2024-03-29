import toast from "react-hot-toast";
import css from "./serchBar.module.css";
import { TbPhotoSearch } from "react-icons/tb";
export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === "") {
      toast.error("Please enter a request");
      return;
    }

    onSubmit(e.target.elements.query.value);
    e.target.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchBar}
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <TbPhotoSearch size="24" />
        </button>
      </form>
    </header>
  );
};
