import React from 'react';

const PrefEntreno = ({ formik }) => {
  return (
    <div>
      <h2>Preferencias de Entrenamiento</h2>
      <select
        name="tipoEntrenamiento"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.tipoEntrenamiento}
        className={formik.touched.tipoEntrenamiento && formik.errors.tipoEntrenamiento ? 'error-input' : ''}
      >
        <option value="">Selecciona un tipo de entrenamiento</option>
        <option value="cardio">Cardio</option>
        <option value="fuerza">Fuerza</option>
        <option value="calistenia">Calistenia</option>
        <option value="yoga">Yoga</option>
      </select>
      {formik.touched.tipoEntrenamiento && formik.errors.tipoEntrenamiento && <p className="error">{formik.errors.tipoEntrenamiento}</p>}
      
      <input
        type="text"
        name="objetivos"
        placeholder="Objetivos (opcional)"
        onChange={formik.handleChange}
        value={formik.values.objetivos}
        onBlur={formik.handleBlur}
        className={formik.touched.objetivos && formik.errors.objetivos ? 'error-input' : ''}
      />
      {formik.touched.objetivos && formik.errors.objetivos && <p className="error">{formik.errors.objetivos}</p>}
    </div>
  );
};

export default PrefEntreno;