const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div>
        <span>
          <strong>First name: </strong>
          {firstName}
        </span>
        <span>
          <strong>Last name: </strong>
          {lastName}
        </span>
        <span>
          <strong>Gender: </strong>
          {gender}
        </span>
        <span>
          <strong>Height: </strong>
          {height}
        </span>
        <span>
          <strong>Birth: </strong>
          {birth.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>
    </div>
  );
};

export default IdCard;
