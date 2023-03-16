import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Reset from "./components/Reset";
import persons from "./data/persons";
import Persons from "./components/Persons";
import Login from "./components/Login";

const texts = ["Ваня", "Иван", "Минивэн", "Волына"];
const resetName = ["Я кнопка-обнулятор!!!"];
function App() {
  const [count, setCount] = useState(5);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  const onLogin = () => {
    setCount(0);
  };
  return (
    <div className="App">
      {/*{persons.map((person) => {
        return <Persons key={person.id} {...person} />;
      })} */}

      <Counter count={count} />

      {texts.map((text) => {
        return <Button onClick={handleClick} text={text} />;
      })}
      <Button onClick={handleClick} text={texts[0]} />
      <Button onClick={handleClick} text={texts[1]} />
      <Button onClick={handleClick} text={texts[2]} />
      <Button onClick={handleClick} text={texts[3]} />
      {count > 0 && <button onClick={handleReset}>nazevResetTl</button>}

      <Login onClick={handleClick} text={texts[3]} />
    </div>
  );
}

export default App;
