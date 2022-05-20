import "./input.module.css";

const TextArea = ({ placeholder }) => {
    return (
        <div className="input-group">
            <textarea
                className="form-control shadow"
                aria-label="With textarea"
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};

export default TextArea;
