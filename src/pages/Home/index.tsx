import Button from 'components/Button';
import Form from 'components/FormCard';
import InfoCard from 'components/InfoCard';
import After from 'pages/After';
import Before from 'pages/Before';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Desafio Github API</h1>
            <h4>Bootcamp Spring React - DevSuperior</h4>
            <Button text="Começar"/>
            <p>-----------------------------------------------------------------------</p>
            <Before/>
            <p>-----------------------------------------------------------------------</p>
            <After/>
            <p>-----------------------------------------------------------------------</p>
            <InfoCard/>
        </div>
    );
}

export default Home;
