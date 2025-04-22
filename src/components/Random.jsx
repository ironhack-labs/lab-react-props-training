const Random = ({min, max}) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        Random vlaue betwee {min} and {max} ={'>'} {Math.floor(Math.random() * max) + min} 
      </div>
    )
}

export default Random;
