import { FC } from "react";
import { Hourglass } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={s.loader}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default Loader;
