import React, { useState } from "react";

export function Numero() {
    const [input, setInput] = useState("");
    const mensaje = input && !isNaN(input) ? (parseFloat(input) > 10 ? "Es mayor a 10" : "Es 10 o menor") : "Ingrese un número";
  
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ingrese un número"
        />
        <p>{mensaje}</p>
      </div>
    );
  }

  export default Numero;