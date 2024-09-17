function Language(props) {
    console.log(props)

    return (
       
        <div>
            <h1 className="textH1">{props.children}</h1>
            
        </div>
    
    )
}

export default Language