import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultCard = ( { title, description} : Props) => {

    return (
        <div className="result-container">
            <h4 className="result-title">{title}</h4>
            <h4 className="result-description">{description}</h4>
        </div>
    );
}

export default ResultCard;