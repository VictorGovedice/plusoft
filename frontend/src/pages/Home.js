import React, { useState, useEffect } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../services/userService";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "" });
  const [editUser, setEditUser] = useState({ id: "", name: "", email: "", phone: "" });

  useEffect(() => {
    // Carregar usuários ao montar o componente
    getUsers().then((response) => setUsers(response.data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    createUser(newUser).then(() => {
      setNewUser({ name: "", email: "", phone: "" });
      getUsers().then((response) => setUsers(response.data));
    });
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    updateUser(editUser.id, editUser).then(() => {
      setEditUser({ id: "", name: "", email: "", phone: "" });
      getUsers().then((response) => setUsers(response.data));
    });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => {
      getUsers().then((response) => setUsers(response.data));
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="https://plusoft.com/wp-content/uploads/2024/08/logo.png"
          alt="Logo da Empresa"
          style={{ maxWidth: "200px" }}
        />
      </div>

      {/* Conteúdo responsivo */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Lista de Usuários */}
        <div
          style={{
            flex: "1 1 100%",
            borderBottom: "1px solid #fff",
            paddingBottom: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>Lista de Usuários</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((user) => (
              <li
                key={user.id}
                style={{
                  marginBottom: "10px",
                  border: "1px solid #fff",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              >
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <button
                  style={{
                    backgroundColor: "#444",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "5px 10px",
                    marginRight: "5px",
                  }}
                  onClick={() =>
                    setEditUser({
                      id: user.id,
                      name: user.name,
                      email: user.email,
                      phone: user.phone,
                    })
                  }
                >
                  Editar
                </button>
                <button
                  style={{
                    backgroundColor: "#b22222",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "5px 10px",
                  }}
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Formulários */}
        <div
          style={{
            flex: "1 1 100%",
          }}
        >
          <h3>Adicionar Novo Usuário</h3>
          <form onSubmit={handleAddUser} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <label>
              Nome:
              <input
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "8px",
                  border: "1px solid #fff",
                  backgroundColor: "#333",
                  color: "#fff",
                }}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "8px",
                  border: "1px solid #fff",
                  backgroundColor: "#333",
                  color: "#fff",
                }}
              />
            </label>
            <label>
              Telefone:
              <input
                type="text"
                value={newUser.phone}
                onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "8px",
                  border: "1px solid #fff",
                  backgroundColor: "#333",
                  color: "#fff",
                }}
              />
            </label>
            <button
              type="submit"
              style={{
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 15px",
                cursor: "pointer",
              }}
            >
              Adicionar
            </button>
          </form>

          {editUser.id && (
            <>
              <h3>Editar Usuário</h3>
              <form onSubmit={handleEditUser} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label>
                  Nome:
                  <input
                    type="text"
                    value={editUser.name}
                    onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      padding: "8px",
                      border: "1px solid #fff",
                      backgroundColor: "#333",
                      color: "#fff",
                    }}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={editUser.email}
                    onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      padding: "8px",
                      border: "1px solid #fff",
                      backgroundColor: "#333",
                      color: "#fff",
                    }}
                  />
                </label>
                <label>
                  Telefone:
                  <input
                    type="text"
                    value={editUser.phone}
                    onChange={(e) => setEditUser({ ...editUser, phone: e.target.value })}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      padding: "8px",
                      border: "1px solid #fff",
                      backgroundColor: "#333",
                      color: "#fff",
                    }}
                  />
                </label>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px 15px",
                    cursor: "pointer",
                    marginTop: "1rem",
                    paddingRight: "20px",
                  }}
                >
                  Salvar
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
