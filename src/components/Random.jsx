import NumberRender from "./NumberRender";

function Random() {



    return(
        <>
       <NumberRender min={1} max={6}/>
      <NumberRender min={1} max={100}/>
      </>
    )
}

export default Random;