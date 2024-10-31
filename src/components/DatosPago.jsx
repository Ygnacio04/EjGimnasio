import React from 'react';

const DatosPago = ({ formik }) => {
  return (
    <div>
      <h2>Datos de Pago</h2>
      <select
        name="metodoPago"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.metodoPago}
        className={formik.touched.metodoPago && formik.errors.metodoPago ? 'error-input' : ''}
      >
        <option value="">Selecciona un método de pago</option>
        <option value="tarjeta">Tarjeta de Crédito</option>
        <option value="paypal">PayPal</option>
      </select>
      {formik.touched.metodoPago && formik.errors.metodoPago && <p className="error">{formik.errors.metodoPago}</p>}

      {formik.values.metodoPago === 'tarjeta' && (
        <>
          <input
            type="text"
            name="infoTarjeta"
            placeholder="Número de Tarjeta"
            onChange={formik.handleChange}
            value={formik.values.infoTarjeta}
            onBlur={formik.handleBlur}
            className={formik.touched.infoTarjeta && formik.errors.infoTarjeta ? 'error-input' : ''}
          />
          {formik.touched.infoTarjeta && formik.errors.infoTarjeta && <p className="error">{formik.errors.infoTarjeta}</p>}

        </>
      )}
    </div>
  );
};

export default DatosPago;