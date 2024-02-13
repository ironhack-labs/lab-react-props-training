import React from 'react'

const style = {
  fontWeight: 400,
}

function IdCar () {

  const Car = [
  {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth:new Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
},
  
{lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height:172,
  birth:new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg",
}
]
  
return (
  <div>
    <h1>IdCar</h1>
    {Car.map((eachObj, index) => {
    
      return (
     
        <div  key={index} className= "cars">
          <img src={eachObj.picture} alt=""/>
          <div className="content">
            <h4>FirstName: <span style={style}>{eachObj.firstName}</span></h4>
            <h4>LastName: <span style={style}>{eachObj.lastName}</span></h4>
            <h4>Gender: <span style={style}>{eachObj.gender}</span></h4>
            <h4>Height: <span style={style}>{eachObj.height}</span></h4>
            <h4>Birth: <span style={style}>{eachObj.birth.toDateString()}</span></h4>
          </div>
        </div>
      );
    })}
  </div>
);
}

export default IdCar;
