import Counter from "./Counter";
function Reset({ onClick, nazev }) {
  return (
    <div>
      <button onClick={onClick}>{nazev}</button>
    </div>
  );
}

export default Reset;
