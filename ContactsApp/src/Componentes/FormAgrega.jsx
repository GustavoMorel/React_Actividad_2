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
      <table className='formulario'>
        <tbody>
          <tr className='fila-formulario'>
            <td><p>Apellido:</p></td>
            <td><input className='input-formulario' type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} /></td>
          </tr>
          <tr className='fila-formulario'>
            <td><p>Nombre:</p></td>
            <td><input className='input-formulario' type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} /></td>
          </tr>
          <tr className='fila-formulario'>
            <td><p>Domicilio:</p></td>
            <td><input className='input-formulario' type="text" name="domicilio" placeholder="Domicilio" value={formData.domicilio} onChange={handleChange} /></td>
          </tr>
          <tr className='fila-formulario'>
            <td><p>Localidad:</p></td>
            <td><input className='input-formulario' type="text" name="localidad" placeholder="Localidad" value={formData.localidad} onChange={handleChange} /></td>
          </tr>
          <tr className='fila-formulario' >
            <td><p>País:</p></td>
            <td><input className='input-formulario' type="text" name="pais" placeholder="País" value={formData.pais} onChange={handleChange} /></td>
          </tr>
          <tr className='fila-formulario'>
            <td><p>Especialidad:</p></td>
            <td><input className='input-formulario' type="text" name="especialidad" placeholder="Especialidad Laboral" value={formData.especialidad} onChange={handleChange} /></td>
          <hr/>
          </tr>

        </tbody>
      </table>

      <br />
  
      <button className='btn-agrega' type="submit">Agregar Contacto</button>
    </form>

  );
}

export default FormAgrega;