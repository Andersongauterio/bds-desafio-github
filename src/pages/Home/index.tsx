import Button from 'components/Button';
import Form from 'components/Form';
import InfoCard from 'components/InfoCard';
import After from 'pages/After';
import Before from 'pages/Before';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Home</h1>
            <After/>
            <Before/>
            <Button/>
            <Form/>
            <InfoCard/>
        </div>
    );
}

export default Home;
