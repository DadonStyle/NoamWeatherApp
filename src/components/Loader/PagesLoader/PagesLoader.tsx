import { FlexBox } from "../../FlexBox/FlexBox";
import Loader from "../Loader";
import styles from "./PagesLoader.module.css";

const PagesLoader = () => {
  return (
    <FlexBox className={styles.loaderContainer}>
      <Loader />
    </FlexBox>
  );
};

export default PagesLoader;
