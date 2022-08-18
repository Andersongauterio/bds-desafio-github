import ResultCard from 'components/ResultCard';
import './styles.css';

const InfoCard = () => {
    return (
        <div className="card-container">
            <div className="card-picture">
                <img src="https://avatars.githubusercontent.com/u/21219244?v=4" alt="Anderson"/>
            </div>
            <div className="card-info">
            <h3>Informações</h3>
            <ResultCard title="Perfil:" description="https://andersonGauterio" />
            <ResultCard title="Seguidores:" description="0" />
            <ResultCard title="Localidade:" description="Dois Irmãos" />
            <ResultCard title="Nome:" description="Anderson Gauterio" />
            </div>
        </div>
    );
}

export default InfoCard;