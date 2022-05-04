import "./input.module.css";

const Input = ({ title, classes, type }) => {
  return (
    <input
      name={title}
      placeholder={title}
      className={["shadow", classes].join(" ")}
      type={type}
      required
    />
  );
};

export default Input;
