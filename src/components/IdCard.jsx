import { format } from "date-fns";
function IdCard(props) {
    return (
            <div className="IdCard">
                <img src={props.picture}/>
                <div className="id-content">
                    <h3>First Name: {props.firstName}</h3>
                    <h3>Last Name: {props.lastName}</h3>
                    <h3>Gender: {props.gender}</h3>
                    <h3>Height: {props.height}</h3>
                    <h3>Birth: { format(props.birth, 'EEE dd MMM yyyy')}</h3>
                </div>
            </div>
    );
}

export default IdCard;