function IdCard(props) {
  console.log(props)
  return (
    <div className="container">
      <div>
        <img src={props.picture} alt="" />
      </div>
      <div>
        <ul style={{ listStyleType: 'none', paddingLeft: '5px' }}>
          <li>
            <strong> lastName:</strong> {props.lastName}
          </li>
          <li>
            {' '}
            <strong>firstName: </strong> {props.firstName}
          </li>
          <li>
            {' '}
            <strong>height:</strong>
            {props.height}
          </li>
          <li>
            {' '}
            <strong>gender:</strong>
            {props.gender}
          </li>
          <li>
            {' '}
            <strong>birth:</strong>
            {props.birth.toDateString()}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IdCard
