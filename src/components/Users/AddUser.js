import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    // Card컴포넌트에도 AddUser의 css모듈을 사용하기 위해서는
    // Card컴포넌트한테 props로 (임의로 정한 이름인)className을 전달해줘야 한다.
    // 예를들어 Card컴포넌트의 ClassName에서 props를 받아 사용하고 싶기 때문에
    // 편의상 props로 전달해주는 calsses.input의 속성값을 className으로 넘겨주면
    // Card 컴포넌트에서 props.className으로 값을 사용할 수 있다.
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="username" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
