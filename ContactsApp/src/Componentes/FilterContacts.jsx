// Componentes/FilterContacts.js
import React, { useState } from 'react';

// Definir el componente FilterContacts
function FilterContacts({ contacts, setFilteredContacts, setNoMatches }) {
  // Definir estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Función para filtrar los contactos
  const filterContacts = () => {
    // Filtrar los contactos según el término de búsqueda
    const filtered = contacts.filter(contact =>
      contact.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || // Filtrar por nombre
      contact.apellido.toLowerCase().includes(searchTerm.toLowerCase()) || // Filtrar por apellido
      contact.especialidad.toLowerCase().includes(searchTerm.toLowerCase()) || // Filtrar por especialidad
      contact.pais.toLowerCase().includes(searchTerm.toLowerCase()) || // Filtrar por país
      contact.localidad.toLowerCase().includes(searchTerm.toLowerCase()) // Filtrar por localidad
    );

    // Verificar si no se encontraron coincidencias
    if (filtered.length === 0) {
      // Establecer el estado de "noMatches" a true si no hay coincidencias
      setNoMatches(true);
    } else {
      // Establecer los contactos filtrados en el estado "filteredContacts" si se encontraron coincidencias
      setFilteredContacts(filtered);
      // Establecer el estado de "noMatches" a false si se encontraron coincidencias
      setNoMatches(false);
    }
  };

  // Retornar el JSX del componente FilterContacts
  return (
    <div>
      {/* Input para ingresar el término de búsqueda */}
      <input
        type="text"
        placeholder="Buscar contacto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Botón para filtrar los contactos */}
      <button onClick={filterContacts}>Filtrar</button>
    </div>
  );
}

export default FilterContacts; // Exportar el componente FilterContacts
