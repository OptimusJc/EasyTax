import "./input.module.css";

const InputDropdown = ({ title, classes, choices }) => {
    return (
        <select class="form-select shadow" aria-label="Default select example">
            $
            {choices.map((choice, index) => {
                return <option value={index}>{choice}</option>;
            })}
        </select>
    );
};

export default InputDropdown;
