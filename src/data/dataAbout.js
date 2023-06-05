import React from "react";

export function SecondAbout() {
  const DataAbout = [
    {
      description:
        "At Hyatt Regency, we strive to provide exceptional hospitality and unforgettable experiences for our guests. Located in the heart of the city, our hotel offers luxurious accommodations, world-class amenities, and unparalleled service.",
    },
    {
      description:
        "Experience the ultimate in comfort and style with our spacious and elegantly designed rooms and suites. Each room is meticulously furnished with modern amenities to ensure a relaxing stay for our guests. Whether you're here for business or pleasure, our accommodations are designed to meet your every need",
    },
    {
      description:
        "We guarantee consistency throughout our collection of hotels and resorts by adhering strictly to company-wide standards. Central purchasing ensures the same high-quality amenities are available to all guests wherever they visit. Our diverse portfolio includes historic icons, elegant resorts, and modern city center properties.",
    },
  ];

  return (
    <div className="grid-column order-first">
      {DataAbout.map((item, index) => (
        <div key={index}>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
