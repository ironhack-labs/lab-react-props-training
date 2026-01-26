function BoxColor(r,g,b) {

    let mini = 0;
    let maxi = 255
      let r = Math.floor(Math.random() * (maxi - mini) + mini);
  let g = Math.floor(Math.random() * (maxi - mini) + mini);
 let b =  Math.floor(Math.random() * (maxi - mini) + mini);


  return (
    <div> r={r} g={g} b={b} </div>

  )
}
export default BoxColor