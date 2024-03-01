import React, { useState } from 'react';

// Componente para la lista de contactos
function ContactList({ contacts, onSelectContact, onDeleteContact }) {
    return (
      <div>
        <h2>Lista de Contactos</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              {/* Al hacer clic en un contacto, se muestra en los detalles */}
              <span className='lista_detalle' onClick={() => onSelectContact(contact)}>{contact.nombre} {contact.apellido}</span>
              {/* Botón para eliminar el contacto */}
              <button className='btn-eliminar' onClick={() => onDeleteContact(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default ContactList;