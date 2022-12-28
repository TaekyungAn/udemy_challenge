import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    // +기호를 앞에 붙이면 숫자형이 된다.
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    // 아래와 같이 양식 제출 후 빈칸으로 만들어주려면
    setEnteredUsername("");
    setEnteredAge("");
    // 각 input태그에서 value값을 현재상태가 되도록 지정해주어야 한다.
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {/* // Card컴포넌트에도 AddUser의 css모듈을 사용하기 위해서는
      Card컴포넌트한테 props로 (임의로 정한 이름인)className을 전달해줘야 한다.
      // 예를들어 Card컴포넌트의 ClassName에서 props를 받아 사용하고 싶기 때문에
      // 편의상 props로 전달해주는 calsses.input의 속성값을 className으로
      넘겨주면 // Card 컴포넌트에서 props.className으로 값을 사용할 수 있다. */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="username"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
