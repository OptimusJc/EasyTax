const Button = ({ title, classes }) => {
  return (
    <button className={classes} name={title}>
      {" "}
      {title}
    </button>
  );
};

export default Button;
