const Persons = ({ props, key }) => {
  const { last_name, first_name, email, gender } = props;
  return (
    <div className="cards">
      <h3>
        {last_name}
        {first_name}
        {email}
        {gender}
      </h3>
    </div>
  );
};
export default Persons;
