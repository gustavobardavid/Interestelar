
import { useState, useEffect } from 'react';
import './App.css';
import NasaImages from './components/NasaImages';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Simulando o término do carregamento após 2 segundos
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <NasaImages />
      )}
    </div>
  );
}

export default App;
