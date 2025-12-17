type ButtonType = {
    title: string,
    onClick: () => void,
    disabled?: boolean,
}
const Button = ({title, onClick, disabled}: ButtonType) => {
    return (
        <div className={`button ${disabled ? 'disabled' : ''}`} onClick={onClick} aria-disabled={disabled}>
            {title}
        </div>
    );
};

export default Button;