export const Random = (props) => {
    const { min, max } = props;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return (
      <div className="greetings-box">
        Random value between {min} and {max}: {random}
      </div>
    );
  };
  