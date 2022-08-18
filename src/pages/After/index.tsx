import FormCard from 'components/FormCard';
import InfoCard from 'components/InfoCard';
import './styles.css';

const After = () => {
    return (
        <div className="after-container">
            <div className="after-form">
                <FormCard />
            </div>
            <div className="after-info">
                <InfoCard />
            </div>
        </div>       
    );
}

export default After;