function Rating({ children }) {

  const fullStars = Math.round(children)
  const emptyStars = 5 - fullStars

  return (
    <div className="Rating">
      {'★'.repeat(fullStars)}
      {'☆'.repeat(emptyStars)}
    </div>
  )
}

export default Rating