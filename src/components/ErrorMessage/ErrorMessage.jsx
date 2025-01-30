import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <h2 className={s.err}>Something went wrong! Try again...</h2>
    </div>
  );
};

export default ErrorMessage;
