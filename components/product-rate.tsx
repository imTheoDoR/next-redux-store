"use client;";

import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const ProductRate = ({ rate }: { rate: number }) => {
  const fullStars = Math.floor(rate);
  const halfStars = rate % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <IoStar className="text-rose-500" key={`full-${i}`} />
      ))}
      {halfStars === 1 && <IoStarHalf className="text-rose-500" />}
      {[...Array(emptyStars)].map((_, i) => (
        <IoStarOutline className="text-rose-500" key={`empty-${i}`} />
      ))}
    </div>
  );
};

export default ProductRate;
