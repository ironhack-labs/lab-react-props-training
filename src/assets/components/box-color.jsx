function BoxColor({ r, g, b }){
  return(
    <div className="BoxColor p-4 m-1 border border-dark" style={{backgroundColor: `rgb(${r},${g},${b})`, color: 'white'}}>
      {`reg(${r},${g},${b},)`}
      {`${r.toString(16).padStart(2, 0).toUpperCase()}${g.toString(16).padStart(2, 0).toUpperCase()}${b.toString(16).padStart(2, 0).toUpperCase()}`}
    </div>
  );
}

export default BoxColor;