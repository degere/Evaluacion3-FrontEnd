import CardVehiculo from './CardVehiculos';

const ListaVehiculos = ({ vehiculos, onEliminar }) => {
  return (
    <div className="lista-vehiculos">
      {vehiculos.length === 0 ? (
        <p className="vacio">No hay vehículos estacionados</p>
      ) : (
        vehiculos.map((vehiculo) => (
          <CardVehiculo
            key={vehiculo.patente}
            vehiculo={vehiculo}
            onEliminar={onEliminar}
          />
        ))
      )}
    </div>
  );
};

export default ListaVehiculos;