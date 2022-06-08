const Button = ({ title, classes, onClick, children }) => {
    return (
        <button
            className={classes}
            name={title}
            type="submit"
            onClick={onClick}
        >
            {title}
            {children}
        </button>
    );
};

export default Button;
