const Button = ({ title, classes, onClick }) => {
    return (
        <button
            className={classes}
            name={title}
            type="submit"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
