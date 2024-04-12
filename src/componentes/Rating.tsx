// Rating.tsx
import React from 'react';
import Image from './Image'; // Suponiendo que Image es el componente que contiene el icono

interface RatingProps {
  selectedValue: number | null;
}

function Rating({ selectedValue }: RatingProps) {
  return (
    <div className="bg-gradient-black w-[360px] overflow-hidden rounded-2xl p-[30px] flex flex-col justify-center items-center ">
      <div className="bg-background-start w-[45px] h-[45px] rounded-full flex items-center justify-center">
        <Image />
      </div>
      <h1 className=" mt-3 text-button-bgk font-bold bg-text-bgk text-sm px-4 py-2 rounded-3xl">
        You selected <span>{selectedValue !== null ? `out of ${selectedValue}` : '-'}</span>
      </h1>
      <h2 className="font-bold text-2xl text-text-color mt-9 mb-2">Thanks You!</h2>
      <p className="text-sm font-bold leading-6 text-center text-text-rating-desc">
        We appreciate you taking the time to give a rating. If you ever need more support, don't
        hesitate to get in touch!
      </p>
    </div>
  );
}

export default Rating;
