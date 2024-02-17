import { DNA } from "react-loader-spinner";
import css from "./loader.module.css";
export const Loader = () => {
  return (
    <div className={css.loader}>
      <DNA height="80" width="80" />
    </div>
  );
};
