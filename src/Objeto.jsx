import { useState } from "react";

export function Objeto() {
    const [visible, setVisible] = useState(false);
    const datos = { nombre: "Brayam", edad: 19, ciudad: "colombia, tabogo" };
  
    return (
      <div>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar Datos" : "Mostrar Datos"}
        </button>
        {visible && (
          <pre>{JSON.stringify(datos, null, 2)}</pre>
        )}
      </div>
    );
  }

  export default Objeto;