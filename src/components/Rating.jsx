function Rating (props){
    const fillStars = Math.round(props.children);
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} role="img" aria-label={index < fillStars ? 'fill star' : 'empty star'}>
          {index < fillStars ? '★' : '☆'}
        </span>
      ));
    
      return <div>{stars}</div>;
}

export default Rating;