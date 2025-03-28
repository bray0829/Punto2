import React, { useState } from "react";

export function Textos() {
    const opciones = [
      ["Hola", "soy brayam", "awo"],
      ["cr7", "el mejor", "mundo"],
      ["santafe", "el mas", "grande"]
    ];
    const [index, setIndex] = useState(0);
  
    return (
      <div>
        {opciones[index].map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        <button onClick={() => setIndex((index + 1) % opciones.length)}>
          Modificar
        </button>
      </div>
    );
  }

  export default Textos;