import './App.css';
//Importacion de componentes
import { Container} from 'react-bootstrap';
//Hoja de estilo para usar los componentes de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/login/login'
import Menu from "./components/navbar/navbar";
import AppRouter from './components/router/router';


function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
      {/*<Login />*/}
      <AppRouter/>
      </Container>
    </div>
  );
}

export default App;
