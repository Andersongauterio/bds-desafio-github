import ResultCard from 'components/ResultCard';
import { GitUser } from 'Types/gitUser';

import './styles.css';

type Props = {
    gitUser: GitUser;
}

const InfoCard = ( { gitUser } : Props) => {
    return (
        <div className="card-container">
            <div className="card-picture">
                <img src={gitUser?.avatar_url} alt="Anderson"/>
            </div>
            <div className="card-info">
            <h3>Informações</h3>
            <ResultCard title="Perfil:" description={gitUser?.url} />
            <ResultCard title="Seguidores:" description={gitUser?.followers} />
            <ResultCard title="Localidade:" description={gitUser?.location} />
            <ResultCard title="Nome:" description={gitUser?.name} />
            </div>
        </div>
    );
}

export default InfoCard;