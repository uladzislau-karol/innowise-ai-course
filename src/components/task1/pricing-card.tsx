import React from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      tabIndex={0}
      className={`
        w-full sm:w-80 border 
        ${
          isFeatured
            ? "bg-blue-900 text-white sm:scale-105"
            : "bg-white text-gray-900"
        } 
        shadow-md hover:shadow-xl 
        focus:outline-none focus:ring-4 focus:ring-blue-400 
        transition-all duration-300 
        flex flex-col
      `}
    >
      <div className="pt-6 pb-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-center mb-2">{plan}</h3>

        <p className="text-4xl font-bold text-center mb-4">${price}</p>
        <hr className="border-t my-2" />

        <ul className="flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="text-center py-2 border-b">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pb-6">
        <button
          className={`
            w-full py-2 font-semibold bg-transparent border-none 
            ${isFeatured ? "text-white" : "text-blue-900"} 
            hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          `}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};
