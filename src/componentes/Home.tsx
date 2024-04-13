// Home.tsx
import React, { useState } from 'react';

interface HomeProps {
  setSelectedValue: (value: number | null) => void;
}

const Home: React.FC<HomeProps> = ({ setSelectedValue }) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (value: number) => {
    if (selectedButton === value) {
      setSelectedButton(null); // Desmarcar si se hace clic nuevamente en el mismo botón
    } else {
      setSelectedButton(value); // Marcar el botón al hacer clic
    }
  };

  const handleSubmit = () => {
    if (selectedButton !== null) {
      setSelectedValue(selectedButton);
    } else {
      console.log('Debe seleccionar un valor antes de enviar.');
    }
  };

  return (
    <div className="bg-gradient-black w-[400px] rounded-xl p-[30px] flex flex-col">
      <div className="bg-background-start w-[45px] h-[45px] rounded-full flex items-center justify-center">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          ></path>
        </svg>
      </div>
      <h2 className="mt-7 mb-4 text-text-color text-3xl font-bold">
        How did we do?
      </h2>
      <p className="text-description-color text-base">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex my-7 text-text-color">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`focus:button-bgk-active rounded-full mx-2 w-12 h-12 ${
              selectedButton === num ? 'bg-button-bgk' : 'bg-small-button-bkg'
            } hover:bg-button-active`}
            onClick={() => handleButtonClick(num)}
          >
            {num}
          </button>
        ))}
      </div>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a
        className="tracking-[2px] font-bold w-full text-center rounded-3xl py-[15px] text-text-color bg-button-bgk hover:bg-text-color hover:text-button-bgk"
        href="#"
        onClick={handleSubmit}
      >
        SUBMIT
      </a>
    </div>
  );
};

export default Home;
