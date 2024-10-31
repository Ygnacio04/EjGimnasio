import React from 'react';

const InfoPersonal = ({ formik }) => {
  return (
    <div>
      <h2>Datos Personales</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={formik.handleChange}
        value={formik.values.nombre}
        onBlur={formik.handleBlur}
        className={formik.touched.nombre && formik.errors.nombre ? 'error-input' : ''}
      />
      {formik.touched.nombre && formik.errors.nombre && <p className="error">{formik.errors.nombre}</p>}
      
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        className={formik.touched.email && formik.errors.email ? 'error-input' : ''}
      />
      {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}

      <input
        type="tel"
        name="telefono"
        placeholder="Telefono"
        onChange={formik.handleChange}
        value={formik.values.telefono}
        onBlur={formik.handleBlur}
        className={formik.touched.telefono && formik.errors.telefono ? 'error-input' : ''}
      />
      {formik.touched.telefono && formik.errors.telefono && <p className="error">{formik.errors.telefono}</p>}
    </div>
  );
};

export default InfoPersonal;