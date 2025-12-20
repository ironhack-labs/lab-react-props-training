function Rating(props) {
    const rating = Math.round(Number(props.children))
    
  return (
    <div>
      {rating === 0 && "☆☆☆☆☆"}
      {rating === 1 && "★☆☆☆☆"}
      {rating === 2 && "★★☆☆☆"}
      {rating === 3 && "★★★☆☆"}
      {rating === 4 && "★★★★☆"}
      {rating === 5 && "★★★★★"}
    </div>

  )
}
export default Rating