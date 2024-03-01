import './App.css';
import React, { useState } from 'react';
import FormAgrega from './Componentes/FormAgrega.jsx'; // Importar el componente FormAgrega
import ContactList from './Componentes/ContactList.jsx'; // Importa lista de Contactos
import ContactDetalles from './Componentes/ContactDetalles.jsx';// Importa función para mostrar detalles del Contacto
import FilterContacts from './Componentes/FilterContacts.jsx'; //Importa función para filtrar busqueda
import ShowAllContacts from './Componentes/ShowAllContacts'; // Importar el componente ShowAllContacts

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



  // Retornar el JSX del componente ContactsApp
  return (
    <div className='contenedor-aplicacion'>
      <div className='contenedor-izquierdo'>
        <span className='titulo'><h1>Agenda de Contactos</h1></span>

        {/* Aquí usamos el componente FormAgrega */}
        <div className='contenedor-agrega'>
          <FormAgrega onAddContact={addContact} />
        </div>

        {/* Renderizar el componente FilterContacts */}
        <div className='contenedor-filtro'>
          <FilterContacts
            contacts={contacts}
            setFilteredContacts={setFilteredContacts}
            setNoMatches={setNoMatches}
          />
        </div>
      
      
        <ShowAllContacts
          setFilteredContacts={setFilteredContacts}
          setNoMatches={setNoMatches}
        />
        </div>
        <div className='contenedor-derecho'>
        <div className='contenedor-lista'>
          {contacts.length === 0 ? ( // Verificar si la lista de contactos está vacía
            <p>LISTA DE CONTACTOS VACÍO</p>
          ) : (
            noMatches ? (
              <p>NO SE ENCUENTRA COINCIDENCIA</p>
            ) : (
              <ContactList
                contacts={filteredContacts.length > 0 ? filteredContacts : contacts}
                onSelectContact={selectContact}
                onDeleteContact={deleteContact}
              />
            )
          )}
        </div>

        {selectedContact && <ContactDetalles contact={selectedContact} />}
      </div>
    </div>
  );
}

export default ContactsApp;