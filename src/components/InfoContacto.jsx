import React from 'react';

const InfoContacto = ({ formik }) => {
  return (
    <div>
      <h2>Información de Contacto</h2>
      <input
        type="text"
        name="direccion"
        placeholder="Direccion"
        onChange={formik.handleChange}
        value={formik.values.direccion}
        onBlur={formik.handleBlur}
        className={formik.touched.direccion && formik.errors.direccion ? 'error-input' : ''}
      />
      {formik.touched.direccion && formik.errors.direccion && <p className="error">{formik.errors.direccion}</p>}
      
      <input
        type="text"
        name="ciudad"
        placeholder="Ciudad"
        onChange={formik.handleChange}
        value={formik.values.ciudad}
        onBlur={formik.handleBlur}
        className={formik.touched.ciudad && formik.errors.ciudad ? 'error-input' : ''}
      />
      {formik.touched.ciudad && formik.errors.ciudad && <p className="error">{formik.errors.ciudad}</p>}
      
      <input
        type="text"
        name="codigoPostal"
        placeholder="Código Postal"
        onChange={formik.handleChange}
        value={formik.values.codigoPostal}
        onBlur={formik.handleBlur}
        className={formik.touched.codigoPostal && formik.errors.codigoPostal ? 'error-input' : ''}
      />
      {formik.touched.codigoPostal && formik.errors.codigoPostal && <p className="error">{formik.errors.codigoPostal}</p>}
    </div>
  );
};

export default InfoContacto;