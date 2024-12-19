import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Substitua useHistory por useNavigate

function UserForm() {
  const [name, setName] = useState('');
  const navigate = useNavigate(); // Navegação programática

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Formulário enviado: ${name}`);
    // Redireciona para outra página após o envio
    navigate('/user-detail');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default UserForm;
