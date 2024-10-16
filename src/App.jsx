import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/login/Login'; 
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar';
import UnayoeReserv from './pages/Unayoe/UnayoeReserv';
import HomePage from './pages/HomePage'; 
import Asignaciones from "./pages/Asignacion/Asignaciones";
import Footer from './components/Footer';
import Reserva from './pages/Reserva/Reserva';
import Chatbot from './components/Chatbot/Chatbot';
import Rectis from './pages/Rectis/Rectificaciones';
import Salones from './pages/Salones/Salones';
import Auditorio from './pages/Auditorio/Auditorio';
import Canchita from './pages/Canchita/Canchita';
import Forms from './pages/Formulario/Formulario';
import Validate from './components/login/Validate';
import RectisListas from './pages/Rectis/RectisListas';
import Asignaciones_page from "./pages/Asignacion/Page_asignación";
import Wasant from './pages/NotFound/wasant';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/validate' element={<Validate />} />
          <Route path='/*' element={
            <>
              <ResponsiveAppBar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path='/reservar' element={<Reserva />} />
                  <Route path="/reservar/salones" element={<Salones />} />
                  <Route path="/reservar/auditorio" element={<Auditorio />} />
                  <Route path="/reservar/canchita" element={<Canchita />} />
                  <Route path="/unayoe" element={<UnayoeReserv />} />
                  <Route path="/rectificaciones" element={<Rectis />} />
                  <Route path="/formulario" element={<Forms />} />
                  <Route path="/rectis-listas" element={<RectisListas />} />

                  <Route path="/asignaciones" element={<Asignaciones_page/>} />
                  <Route path="/asignaciones/tabla" element={<Asignaciones/>} />
                  <Route path="*" element={<Wasant/>} />
                </Routes>
              <Chatbot />
              <Footer />

            </> 
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;