import "./input.module.css";

const Input = ({ title, classes, type, placeholder }) => {
    return (
        <input
            name={title}
            placeholder={placeholder}
            className={["shadow", classes].join(" ")}
            type={type}
            required
        />
    );
};

export default Input;
