function card(props) {
  return (

    <div>
      <section className="profile">
        <p>Last name: {props.lastName}</p>
        <p>First name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Birth date:{props.birthDate}</p>
        <p>Height: {props.height}cm</p>
        <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Profile picture" />
      </section>
    </div>
  );
}

export default card;