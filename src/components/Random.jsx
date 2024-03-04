const Random = ({min, max}) => {
     const random = Math.round(Math.random() * (max - min) + min);
  return (
    <div>{random}</div>
  )
}

export default Random