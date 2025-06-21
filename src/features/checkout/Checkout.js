import './Checkout.css'
import { Button, Card, TextField } from "@mui/material";
import { useNavigate } from 'react-router';
import { useForm } from '../../hooks/useForm';
const initialValues = {
  nombre: "",
  segundoNombre: "",
  apellido: "",
  email: "",
  repetirEmail: "",
};

function validate(values) {
  const errors = {};
  if (!values.nombre) errors.nombre = "El nombre es obligatorio";
  if (!values.apellido) errors.apellido = "El apellido es obligatorio";
  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El email no es válido";
  }
  if (!values.repetirEmail) {
    errors.repetirEmail = "Repetir email es obligatorio";
  } else if (values.email !== values.repetirEmail) {
    errors.repetirEmail = "Los emails no coinciden";
  }
  return errors;
}

const Checkout = () => {
  const navigate = useNavigate();
  const {
    values,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    showError,
    errors,
  } = useForm(initialValues, async (formValues) => {
    alert('¡Datos guardados correctamente!');
    resetForm();
  }, validate);

  const camposCompletos =
    values.nombre &&
    values.apellido &&
    values.email &&
    values.repetirEmail;

  return (
    <div className="root">
      <Card className="form-container">
        <h1>Ya casi estamos...</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            variant="standard"
            label="Nombre"
            error={Boolean(showError('nombre'))}
            helperText={showError('nombre')}
          />
          <TextField
            name="segundoNombre"
            value={values.segundoNombre}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            variant="standard"
            label="Segundo nombre"
          />
          <TextField
            name="apellido"
            value={values.apellido}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            variant="standard"
            label="Apellido"
            error={Boolean(showError('apellido'))}
            helperText={showError('apellido')}
          />
          <TextField
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            variant="standard"
            label="Email"
            error={Boolean(showError('email'))}
            helperText={showError('email')}
          />
          <TextField
            name="repetirEmail"
            value={values.repetirEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            variant="standard"
            label="Repetir Email"
            error={Boolean(showError('repetirEmail'))}
            helperText={showError('repetirEmail')}
          />
          <div className="actions">
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Cancelar
            </Button>
            <Button
              disabled={
                isSubmitting ||
                Object.keys(errors).length > 0 ||
                !camposCompletos
              }
              variant="contained"
              type="submit"
            >
              Guardar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Checkout;