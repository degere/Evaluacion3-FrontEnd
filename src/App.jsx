import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaVehiculos from './components/ListaVehiculos';
import './App.css';

function App() {
  const [vehiculos, setVehiculos] = useState(() => {
    const guardados = localStorage.getItem('vehiculos');
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
  }, [vehiculos]);

  const capacidadTotal = 10;
  const cuposDisponibles = capacidadTotal - vehiculos.length;

  const agregarVehiculo = (nuevoVehiculo) => {
    setVehiculos([...vehiculos, nuevoVehiculo]);
  };
  const eliminarVehiculo = (patente) => {
    setVehiculos(vehiculos.filter(vehiculo => vehiculo.patente !== patente));
  };

return (
  <div className="app-container">
    <header>
      <h1>Sistema de Gestión de Estacionamientos</h1>
      <p>Cupos disponibles: {cuposDisponibles} / {capacidadTotal}</p>
    </header>

    <main>
      <div className="col-formulario">
        <Formulario onAgregar={agregarVehiculo} cuposDisponibles={cuposDisponibles} />
      </div>
      <div className="col-tarjetas">
        <ListaVehiculos vehiculos={vehiculos} onEliminar={eliminarVehiculo} />
      </div>
    </main>

    <footer>
      <p>© 2026 - Programación Front End TI3031 | Victor Gamboa L</p>
    </footer>
  </div>
);
}

export default App;