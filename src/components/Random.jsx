function Random (props) {
    const {min, max} = props;


    const getRandomValue = (min, max) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);}

        const randomValue = getRandomValue(min, max);

   return (

    <div>
        {randomValue}
        <p>Random value between {min} and {max} => {randomValue}</p>
    </div>
   )
}

export {Random};