import React, { useState } from 'react';

// Componente para mostrar los detalles de un contacto
function ContactDetalles({ contact }) {
    return (
      <div>
        <h2>{contact.nombre} {contact.apellido}</h2>
        <p>Domicilio: {contact.domicilio}</p>
        <p>Localidad: {contact.localidad}</p>
        <p>País: {contact.pais}</p>
        <p>Teléfono: {contact.telefono}</p>
        <p>Especialidad Laboral: {contact.especialidad}</p>
      </div>
    );
  }

  export default ContactDetalles;