import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
