// Componentes/ShowAllContacts.js
import React from 'react';

// Definir el componente ShowAllContacts
function ShowAllContacts({ setFilteredContacts, setNoMatches }) {
  // Función para mostrar todos los contactos
  const showAllContacts = () => {
    setFilteredContacts([]); // Establecer el estado de los contactos filtrados a vacío
    setNoMatches(false); // Establecer el estado de "noMatches" a false
  };

  // Retornar el JSX del componente ShowAllContacts
  return (
    <button className='btn-mostrar-todo' onClick={showAllContacts}>Mostrar Todos</button>
  );
}

export default ShowAllContacts; // Exportar el componente ShowAllContacts
