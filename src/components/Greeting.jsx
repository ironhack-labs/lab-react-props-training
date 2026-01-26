function Greetings(props) {
  return (
    <div className="card">
      <h2>Hello {props.children}</h2>
    </div>
  );
}

export default Greetings;
