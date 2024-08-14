import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines
        height="30"
        width="30"
        radius="9"
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
