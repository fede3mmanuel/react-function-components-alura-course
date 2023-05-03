import './App.css';
import FormSignUp from './components/FormSignUp';
import { Container } from '@mui/material';
function App() {
  return (
    <Container component={"section"} maxWidth="sm">
      <h1>Formulario Registro</h1>
      <FormSignUp />
    </Container>
  );
}

export default App;
