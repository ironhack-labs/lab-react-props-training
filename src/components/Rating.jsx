
/*
Bonus: Iteration 6 | Component: Rating
Create a Rating component that displays 5 stars. Depending on the value received, some stars should be empty (☆), and some should be filled (★).

The component should take 1 prop:

children: A number between 0 and 5. The value can be a floating-point number. If the number received is 3.9, the component should display 4 stars.
Example:

<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>

*/

import "./Rating.css";

const Rating = (props) => { 
    const rating = Math.round(props.children);
    const stars = "★★★★★☆☆☆☆☆".slice(5 - rating, 10 - rating);

    return (
        <div className="rating">
            <p>{stars}</p>
        </div>
    );
}

export default Rating;