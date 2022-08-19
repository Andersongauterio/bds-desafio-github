import axios from 'axios';
import Button from 'components/Button';
import { useState } from 'react';
import './styles.css';

type FormData = {
  username: string;
};

type GitUser = {
  url: string;
  followers: string;
  location: String;
  name: String;
};

const FormCard = () => {
  const [gitUser, setgitUser] = useState<GitUser>();

  const [formData, setFormData] = useState<FormData>({
    username: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setgitUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setgitUser(undefined);
        console.log(error);
      });
  };

  return (
    <div className="form-card-container">
      <h1>Encontre um perfil Github</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="search-input"
            placeholder="Usuário Github"
            value={formData.username}
            onChange={handleChange}
          />
          <Button text="Encontrar" />
        </form>
      </div>
    </div>
  );
};

export default FormCard;
