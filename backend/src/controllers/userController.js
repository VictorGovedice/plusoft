const users = require('../data/users');

// Listar todos os usuários
const getAllUsers = (req, res) => {
  res.json(users);
};

// Obter um usuário por ID
const getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
};

// Criar um novo usuário
const createUser = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const emailExists = users.some((u) => u.email === email);
  if (emailExists) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    phone,
    createdAt: new Date(),
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Atualizar um usuário por ID
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Atualiza os dados do usuário
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    phone: phone || users[userIndex].phone,
  };

  res.json(users[userIndex]);
};

// Deletar um usuário por ID
const deleteUser = (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted successfully' });
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
