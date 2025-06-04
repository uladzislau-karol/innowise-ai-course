import { PricingCard } from "./pricing-card";

export const Task1 = () => {
  const pricingData = [
    {
      plan: "Standard",
      price: "100",
      features: [
        "50,000 Requests",
        "4 contributors",
        "Up to 3 GB storage space",
      ],
    },
    {
      plan: "Pro",
      price: "200",
      features: [
        "100,000 Requests",
        "7 contributors",
        "Up to 6 GB storage space",
      ],
      isFeatured: true,
    },
    {
      plan: "Expert",
      price: "500",
      features: [
        "200,000 Requests",
        "11 contributors",
        "Up to 10 GB storage space",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl font-bold mb-10 text-center">Pricing</h2>
      <div className="flex flex-col sm:flex-row sm:flex-nowrap">
        {pricingData.map((data, idx) => (
          <PricingCard
            key={idx}
            plan={data.plan}
            price={data.price}
            features={data.features}
            isFeatured={data.isFeatured}
          />
        ))}
      </div>
    </div>
  );
};
