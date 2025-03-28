import React, { useState } from "react";

export function Color() {
  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff"];
  const [index, setIndex] = useState(0);

  return (
    <div style={{ backgroundColor: colors[index], padding: "100px", transition: "0.5s" }}>
      <button onClick={() => setIndex((index + 1) % colors.length)}>
        Cambiar Fondo
      </button>
    </div>
  );
}

export default Color;