import css from './LoadMoreButton.module.css'
export const LoadMoreButton = ({ onClick }) => {
  return (
    <div>
      <button className={css.button} onClick={onClick}>Load More</button>
    </div>
  );
};
