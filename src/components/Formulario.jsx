import { useState } from 'react';


const Formulario = ({ onAgregar, cuposDisponibles }) => {
  const [patente, setPatente] = useState('');
  const [permanente, setPermanente] = useState(false);
  const [error, setError] = useState('');

  const validarPatente = (pat) => /^[A-Z]{4}[0-9]{2}$/.test(pat);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cuposDisponibles === 0) {
      setError('No hay cupos disponibles');
      return;
    }

    const patenteLimpia = patente.toUpperCase().trim();
    if (!validarPatente(patenteLimpia)) {
      setError('Formato inválido. Use 4 letras mayúsculas y 2 números (ej: ABCD12)');
      return;
    }

    setError('');
    onAgregar({ patente: patenteLimpia, permanente });
    setPatente('');
    setPermanente(false);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        placeholder="Ej: ABCD12"
        value={patente}
        onChange={(e) => setPatente(e.target.value.toUpperCase())}
        maxLength="6"
        aria-label="Patente del vehículo"
      />
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={permanente}
          onChange={(e) => setPermanente(e.target.checked)}
        />
        Es permanente
      </label>
      <button type="submit" disabled={cuposDisponibles === 0}>
        Registrar ingreso
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Formulario;