function Rating({ children }) {
  // Convertimos el valor recibido a número entero redondeado
  const stars = Math.round(children);

  // Generamos un array con 5 posiciones
  // y decidimos si cada estrella es llena o vacía
  const starIcons = Array(5)
    .fill(0)
    .map((_, i) => (i < stars ? "★" : "☆"));

  return <div style={{ fontSize: "2rem" }}>{starIcons.join("")}</div>;
}

export default Rating; 
