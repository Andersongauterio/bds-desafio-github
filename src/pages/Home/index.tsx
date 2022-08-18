import Button from 'components/Button';
import InfoCard from 'components/InfoCard';
import After from 'pages/After';
import Before from 'pages/Before';

import './styles.css';

const Home = () => {
    return (
        <>
        <div className="home-container">
            <h1>Desafio Github API</h1>
            <h4>Bootcamp Spring React - DevSuperior</h4>
            <Button text="Começar"/>
        </div>
        <p>-----------------------------------------------------------------------</p>
        <Before/>
        <p>-----------------------------------------------------------------------</p>
        <After/>
        </>
    );
}

export default Home;
