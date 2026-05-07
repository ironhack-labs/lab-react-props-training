function Rating({ children }) {
  const rating = Math.round(Number(children));

  return (
    <div style={{ margin: '10px', fontSize: '24px' }}>
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star}>{star <= rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

export default Rating;