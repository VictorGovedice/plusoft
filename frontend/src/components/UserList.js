import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <Link to={`/user/${user.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
