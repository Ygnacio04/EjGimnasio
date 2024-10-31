import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InfoPersonal from './components/InfoPersonal';
import InfoContacto from './components/InfoContacto';
import PrefEntreno from './components/PrefEntreno';
import DatosPago from './components/DatosPago';
import './App.css';

const App = () => {
  const [step, setStep] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      direccion: '',
      ciudad: '',
      codigoPostal: '',
      tipoEntrenamiento: '',
      objetivos: '',
      metodoPago: '',
      infoTarjeta: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().matches(/^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/, 'El nombre debe incluir nombre y dos apellidos').required('El nombre es obligatorio'),
      email: Yup.string().email('Introduce un email válido').required('El email es obligatorio'),
      telefono: Yup.string().matches(/^[0-9]{9}$/, 'El teléfono debe tener 9 dígitos').required('El teléfono es obligatorio'),
      direccion: Yup.string().required('La direccion es obligatoria'),
      ciudad: Yup.string().required('La ciudad es obligatoria'),
      codigoPostal: Yup.string().matches(/^[0-9]{5}$/, 'El código postal debe tener 5 dígitos').required('El código postal es obligatorio'),
      tipoEntrenamiento: Yup.string().required('El tipo de entrenamiento es obligatorio'),
      metodoPago: Yup.string().required('El metodo de pago es obligatorio'),
      infoTarjeta: Yup.string().required('La informacion de la tarjeta es obligatoria'),
    }),
    onSubmit: async (values) => {
      console.log('Formulario enviado:', values);
      setIsRegistered(true);
    },
  });

  const handleStart = () => {
    setStep(1);
  };

  const handleNext = async () => {
    setErrorMessage('');

    let currentFields = [];
    if (step === 1) {
      currentFields = ['nombre', 'email', 'telefono'];
    } else if (step === 2) {
      currentFields = ['direccion', 'ciudad', 'codigoPostal'];
    } else if (step === 3) {
      currentFields = ['tipoEntrenamiento'];
    } else if (step === 4) {
      currentFields = ['metodoPago', 'infoTarjeta'];
    }

    const errors = await formik.validateForm();
    formik.setTouched(
      currentFields.reduce((acc, field) => ({ ...acc, [field]: true }), {})
    );
	const hasErrors = currentFields.some((field) => errors[field]);
    if (hasErrors) {
      setErrorMessage('Por favor, completa todos los campos requeridos.');
      return;
    }

    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <InfoPersonal formik={formik} />;
      case 2:
        return <InfoContacto formik={formik} />;
      case 3:
        return <PrefEntreno formik={formik} />;
      case 4:
        return <DatosPago formik={formik} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {!isRegistered ? (
        step === 0 ? (
          <div className="welcome-container">
            <h1>Bienvenido a FitLife</h1>
            <p>Unete a nosotros en tu viaje hacia una vida mas saludable</p>
            <button onClick={handleStart}>Registrarse</button>
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <h1>Registro en FitLife</h1>
            {renderStep()}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {step < 4 && (
              <button type="button" onClick={handleNext}>Siguiente</button>
            )}
            {step === 4 && <button type="submit">Enviar</button>}
          </form>
        )
      ) : (
        <h2>Registro completado</h2>
      )}
    </div>
  );
};

export default App;