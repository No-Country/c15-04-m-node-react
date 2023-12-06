
import  { useState } from 'react';
import { calculateCarbonFootprint } from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Calculator = () => {
  const [kwh, setKwh] = useState('');
  const [country, setCountry] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const footprintResult = await calculateCarbonFootprint(kwh, country);
      setResult(footprintResult);
      toast.success('Huella de carbono calculada con éxito');
    } catch (error) {
      toast.error('Error al calcular la huella de carbono');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-200 text-black">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Huella de Carbono</h1>
      <form className="flex flex-col items-center justify-center "onSubmit={handleSubmit}>
        <label>
          Consumo eléctrico (kWh):
          <input className="ml-4" type="number" value={kwh} onChange={(e) => setKwh(e.target.value)} />
        </label>
        <br />
        <label>
          País:
          <input className='ml-4' type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>
        <br />
        <button type="submit">Calcular Huella de Carbono</button>
      </form>
      {result && (
        <div>
          <h2>Resultado:</h2>
          <p> Mostrar el resultado de la huella de carbono aquí</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
