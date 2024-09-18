

function IdCard() {

  const myDates = [
    {lastName:""},
    {firstName: ""},
    {gender:""},
    {height:0},
    {birth:""},
    {picture:""}
  ]


  return (
    <>
      <div>
        <ul>
          {myDates.map((date)=>{
            return(
              <li>{date[0]}</li>
            )
          })}

        </ul>
      </div>
    

    </>
  )
}

export default IdCard;
