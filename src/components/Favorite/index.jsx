import styles from "./index.module.css";
import { ReactComponent as StarIcon } from "../../../public/images/star.svg";

export default function Favorite({ isFavorite, onToggle }) {
  return (
    <StarIcon
      onClick={onToggle}
      className={styles.favorite}
      fill={isFavorite ? "gold" : "white"}
    />
  );
}
