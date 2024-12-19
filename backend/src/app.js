const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3001 || port;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/users', userRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
