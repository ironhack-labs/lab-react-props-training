function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    let date = birth.toDateString();

    return (
        <div className="cards">
            <img src={picture} alt="" srcset="" />
            <div>
                <span><b>First name:</b> {firstName}<br /></span>
                <span><b>Last name:</b> {lastName}<br /></span>
                <span><b>Gender:</b> {gender}<br /></span>
                <span><b>Height:</b> {height}<br /></span>
                <span><b>Birth:</b> {date}<br /></span>

            </div>
        </div >

    )

}

export default IdCard;