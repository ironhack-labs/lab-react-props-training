function Random ({min, max}) {

    const random = Math.floor(Math.random() * (max - min + 1)) + min

    return  (
      <div
        
         className="random"
         style={{
            display: "flex",
            border: "2px solid black",
            padding: "10px",
            margin: "15px 5px",
            textAlign: "left"

         }}
      >

          <p style={{margin: 0}}>
            Random value between {min} and {max} = {random}
          </p>
      </div>

        )

}

export default Random