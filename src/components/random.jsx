function Random({ min, max, className }) {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className={`box ${className || ''}`}>
      Random value between {min} and {max} {'=>'} {random}
    </div>
  );
}

export default Random;
