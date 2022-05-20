import "./input.module.css";
import { React } from "react";

const Input = ({ title, classes, type, placeholder }) => {
    return (
        <input
            // ref={ref}
            name={title}
            placeholder={placeholder}
            className={["shadow", classes].join(" ")}
            type={type}
            required
        />
    );
};

export default Input;
