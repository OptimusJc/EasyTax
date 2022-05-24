import "./input.module.css";
import { React } from "react";

const Input = ({ title, classes, type, placeholder, value, onChange }) => {
    return (
        <input
            // ref={ref}
            name={title}
            placeholder={placeholder}
            defaultValue={value}
            className={["shadow", classes].join(" ")}
            type={type}
            onChange={onChange}
            required
        />
    );
};

export default Input;
