import "./input.module.css";

const InputDropdown = ({ title, classes, choices }) => {
    return (
        <select
            className="form-select shadow"
            aria-label="Default select example"
        >
            $
            {choices.map((choice, index) => {
                return (
                    <option key={index} value={index}>
                        {choice}
                    </option>
                );
            })}
        </select>
    );
};

export default InputDropdown;
