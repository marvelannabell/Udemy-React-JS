import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (e) => {
        e.preventDefault();
        if (!enteredUsername.trim().length || !enteredAge.trim().length) {
            return
        }
        if (Number(enteredAge) < 1) {
            return
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }
    const ageChangeHandler = (e) => {

        setEnteredAge(e.target.value);
    }
    return (
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
                    id="age"
                    type="number"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                />
                <Button type={"submit"}>Add USer</Button>
            </form>
        </Card>
    )
};

export default AddUser;