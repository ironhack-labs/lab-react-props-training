function ShowIdCard({lastName,firstName,gender,height,birth,picture}) {
  return (
    <div>
      <section className="card">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p>
        <img src={picture} alt="Profile" />
      </section>
    </div>
  );
}

export default ShowIdCard;
