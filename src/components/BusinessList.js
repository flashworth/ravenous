import React from "react";
import Business from "./Business";

const BusinessList = () => {
  return (
    <div className="container mx-auto grid max-w-lg gap-4 px-2 md:max-w-4xl md:grid-cols-3">
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  );
};

export default BusinessList;
