import React from 'react'; // Import React for JSX syntax

function Card({ data }) { // Accept data prop for flexibility
  return (
    <div className="card-container"> {/* Wrap cards in a container */}
      {data.map((item) => ( // Use map() to iterate over data array
        <div className="card" key={item.id}> {/* Add unique key for each card */}
          <img src={item.image} alt={item.name} width="150" height="150" />
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
