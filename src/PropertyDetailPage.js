import React from 'react';
import { useParams } from 'react-router-dom';
import properties from './properties'; // Assuming you have an array of properties

function PropertyDetailPage() {
  const { id } = useParams();

  // Find the property with the matching ID
  const selectedProperty = properties.find((property) => property.id === id);

  if (!selectedProperty) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      {/* Render property details */}
      <h1>{selectedProperty.title}</h1>
      <img src={selectedProperty.image} alt={selectedProperty.title} />
      {/* Other property details */}
    </div>
  );
}

export default PropertyDetailPage;
