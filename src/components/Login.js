import { useState } from "react";
const Login = ({ onClick }) => {
  const [] = useState("");
  //const [username, setUsername] = useState("");
  //const [password, setPaswword] = useState("");

  const [data, setData] = useState({ username: "", password: "" });
  function handleFormSubmit(event) {
    event.preventDefault(); //мы добавляем к событию preventDefault() чтобы страница с реактом не перезагружалась ибо
    //реакт это сингл пэйдж апликейшен и перегрузка страницы противоречит концепции реакта

    const userData = {
      username: data.username, //event.target.username.value команда для получения данных из формы username
      password: data.password,
    };
  }

  return (
    <>
      {" "}
      //вместо дива пустой фрагмент
      <h1> Login Form </h1>
      <form onSubmit={handleFormSubmit} onClick={onClick}>
        {" "}
        //сюда передается функция что выполняется после нажатия на кнопку{" "}
        //форма он сабмит для подтверждения введенных данных в форрму
        <label>
          {" "}
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            //name="username"
          />
        </label>
        <label>
          {" "}
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })} //разделяем объект на свойства и переписываем одно из его значений
            //onChange={(e) => setData(e.target.value)} //поскольку у нас в value стоит начальное состояние юзстэйта
            //то нам надо доьавить функцию изменения  onChange в котороую мы как функцию передаем ивент (действие от ввода и пишем сетЮзернейм и передаем в сетЮзерНейм ивент таргет вэлью (значение ввода))
            //name="password"
          />
        </label>
        <button type="submit" onClick={onClick}>
          Login
        </button>
        console.log(<button onClick={onClick}> CICKSSS</button>)
      </form>
    </>
  );
};

export default Login;
