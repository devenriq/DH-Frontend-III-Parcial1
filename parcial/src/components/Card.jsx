import React from "react";

const Card = ({ formValue }) => {
  console.log(formValue);
  return (
    <div>
      {formValue.map((value, index) => (
        <div key={index}>
          <p>Nombre: {value.nombre} </p>
          <p>Apellido: {value.apellido} </p>
          <p>Edad: {value.edad} </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
