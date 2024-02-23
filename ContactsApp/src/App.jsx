import './App.css';
import React, { useState } from 'react';
import FormAgrega from './Componentes/FormAgrega.jsx'; // Importar el componente FormAgrega
import ContactList from './Componentes/ContactList.jsx'; // Importa lista de Contactos
import ContactDetalles from './Componentes/ContactDetalles.jsx';// Importa función para mostrar detalles del Contacto
import FilterContacts from './Componentes/FilterContacts.jsx'; //Importa función para filtrar busqueda

// Definir el componente principal ContactsApp
function ContactsApp() {
  const [contacts, setContacts] = useState([]); // Estado para almacenar la lista de contactos
  const [filteredContacts, setFilteredContacts] = useState([]); // Estado para almacenar los contactos filtrados
  const [selectedContact, setSelectedContact] = useState(null); // Estado para almacenar el contacto seleccionado
  const [noMatches, setNoMatches] = useState(false); // Estado para indicar si no se encontraron coincidencias


 // Función para agregar un nuevo contacto a la lista
  const addContact = (contact) => {
    setContacts([...contacts, contact]);// Agregar el nuevo contacto al estado de contactos, copia la lista anterior y agrega otro elemento y regenera la lista
  };

 // Función para eliminar un contacto de la lista
  const deleteContact = (index) => {
    const newContacts = [...contacts];// Crear una copia de la lista de contactos
    newContacts.splice(index, 1); // Eliminar el contacto en el índice especificado
    setContacts(newContacts); // Actualizar el estado de contactos con la nueva lista
    setSelectedContact(null); // Limpiar el contacto seleccionado si se elimin
  };

  // Función para seleccionar un contacto de la lista
  const selectContact = (contact) => {
    setSelectedContact(contact); // Establecer el contacto seleccionado en el estado
  };

// Función para mostrar todos los contactos sin filtrar
  const showAllContacts = () => {
    setFilteredContacts([]); // Establecer el estado de los contactos filtrados a vacío
    setSearchTerm(''); // Establecer el estado de "noMatches" a false
  };

// Retornar el JSX del componente ContactsApp
  return (
    <div>
      <h1>Aplicación de Contactos</h1>
      {/* Aquí usamos el componente FormAgrega */}
      <FormAgrega onAddContact={addContact} />

      {/* Renderizar el componente FilterContacts */}
      <FilterContacts
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
        setNoMatches={setNoMatches}
      />
      
      {/* Mostrar la lista de contactos o un mensaje si no hay coincidencias */}
      <div>
        {noMatches ? (
          <p>NO SE ENCUENTRA COINCIDENCIA</p>
        ) : (
          <ContactList
            contacts={filteredContacts.length > 0 ? filteredContacts : contacts}
            onSelectContact={selectContact}
            onDeleteContact={deleteContact}
          />
        )}
      </div>
      {selectedContact && <ContactDetalles contact={selectedContact} />}
    </div>
  );
}

export default ContactsApp;