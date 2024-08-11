function Random(props){
    const { min, max } = props;

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      return (
        <div className="random">
          Random value between {min} and {max} = {getRandomNumber(min, max)}
        </div>
  );
}


export default Random;