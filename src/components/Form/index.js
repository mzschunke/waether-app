import react from 'react';
import "./Form.css";


export default function Form (onAddActivity) {
    

    function handleSubmit(event) {
        event.preventDefault();
    }



    return (
        <form >
            <h1>Add new Activity:</h1>
      <label htmlFor="todo">
       Name:
      </label>
      <input id="todo" name="todo" type="text" />
      <label htmlFor='checkbox'>Good-weather activity:</label> <input type="checkbox" name="checkbox"/> 
        <button >Submit</button>
    </form>
    )}

