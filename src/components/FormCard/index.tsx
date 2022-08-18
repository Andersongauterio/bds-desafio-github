import Button from 'components/Button';
import './styles.css';

const FormCard = () => {
    return (
        <div className="form-card-container">
            <h1>Encontre um perfil Github</h1>
            <div className="form-container">
                <input 
                    type="text"
                    name="github"
                    className="search-input"
                    placeholder="Usuário Github"
                    />
                <Button text="Encontrar"/>
            </div>
        </div>
    );
}

export default FormCard;
