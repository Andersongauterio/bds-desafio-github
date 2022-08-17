import './styles.css';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => {
    return (
        <div className="button-container">
            <button className="btn btn-primary">{text}</button>
        </div>

    );
}

export default Button;