// src/data/cleaningData.js
const cleaningCategories = [
    {
      id: 1,
      name: "Residential Cleaning",
      image: "/logo.png",
      description: "Customized cleaning solutions for your home.",
    },
    {
      id: 2,
      name: "Office Cleaning",
      image: "/logo.png",
      description: "Professional cleaning services for your workplace.",
    },
    {
      id: 3,
      name: "Carpet Cleaning",
      image: "/logo.png",
      description: "Revitalize your carpets with our expert cleaning.",
    },
    // Add more categories as needed
  ];
  
  const featuredServices = [
    {
      id: 1,
      name: "Signature Home Cleaning",
      price: 150,
      image: "/logo.png",
      description: "Our signature home cleaning service for a spotless living space.",
      categoryIds: [1],
    },
    {
      id: 2,
      name: "Professional Office Cleaning",
      price: 200,
      image: "/logo.png",
      description: "Top-notch office cleaning for a pristine work environment.",
      categoryIds: [2],
    },
    {
      id: 3,
      name: "Deep Carpet Cleaning",
      price: 100,
      image: "/logo.png",
      description: "Deep cleaning to revive and refresh your carpets.",
      categoryIds: [3],
    },
    // Add more featured services as needed
  ];
  
  export { cleaningCategories, featuredServices };
  