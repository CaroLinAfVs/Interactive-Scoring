// App.tsx
import React, { useState } from 'react';
import Home from './componentes/Home';
import Rating from './componentes/Rating';

function App() {
  const [showHome, setShowHome] = useState<boolean>(true);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleButtonClick = (value: number) => {
    setSelectedValue(value);
    setShowHome(false); // Cambiar a la vista de Rating después de seleccionar un valor
  };

  return (
    <div className="bg-black-background h-screen flex justify-center items-center">
      {showHome ? (
        <Home setSelectedValue={handleButtonClick} />
      ) : (
        <Rating selectedValue={selectedValue} />
      )}
    </div>
  );
}

export default App;
