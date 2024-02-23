import React, { useState } from 'react';

function FormAgrega({ onAddContact }) {
  const [formData, setFormData] = useState({
    apellido: '',
    nombre: '',
    domicilio: '',
    localidad: '',
    pais: '',
    telefono: '',
    especialidad: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formData);
    setFormData({
      apellido: '',
      nombre: '',
      domicilio: '',
      localidad: '',
      pais: '',
      telefono: '',
      especialidad: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} />
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
      <input type="text" name="domicilio" placeholder="Domicilio" value={formData.domicilio} onChange={handleChange} />
      <input type="text" name="localidad" placeholder="Localidad" value={formData.localidad} onChange={handleChange} />
      <input type="text" name="pais" placeholder="País" value={formData.pais} onChange={handleChange} />
      <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
      <input type="text" name="especialidad" placeholder="Especialidad Laboral" value={formData.especialidad} onChange={handleChange} />
      <button type="submit">Agregar Contacto</button>
    </form>
  );
}

export default FormAgrega;