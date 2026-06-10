const CardVehiculo = ({ vehiculo, onEliminar }) => {
  const handleEliminar = () => {
    if (window.confirm(`¿Eliminar vehículo ${vehiculo.patente}?`)) {
      onEliminar(vehiculo.patente);
    }
  };

  return (
    <div className={`card ${vehiculo.permanente ? 'permanente' : ''}`}>
      <span className="patente">{vehiculo.patente}</span>
      <span className="estado">
        {vehiculo.permanente ? 'Permanente' : 'Normal'}
      </span>
      <button onClick={handleEliminar} className="btn-eliminar" title="Eliminar">
        🗑️  
      </button>
    </div>
  );
};

export default CardVehiculo;