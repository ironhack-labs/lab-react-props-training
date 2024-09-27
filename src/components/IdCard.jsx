
export default function IdCard({firstName, lastName, gender, height, birth, picture}) {
    const weekday = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
    const day = weekday[birth.getDay()];
    const month = birth.toLocaleString('default', { month: 'short' })
    const birthDate = `${day} ${month} ${birth.getDate()} ${birth.getFullYear()}`
    return (
        <div>
            <img src={picture}/>
            <div>
                <ul>
                    <li><b>First Name:</b> {firstName}</li>
                    <li><b>Last Name:</b> {lastName}</li>
                    <li><b>Gender:</b> {gender}</li>
                    <li><b>Height:</b> {height}</li>
                    <li><b>Birth:</b> {birthDate}</li>
                </ul>
            </div>
        </div>
    );
}