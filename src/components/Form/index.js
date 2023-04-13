import "./Form.css";


export default function Form ({onAddActivity}) {
    

    function handleSubmit(event) {
        event.preventDefault();

       /*const formData = new FormData(event.target);
       const data = Object.fromEntries(formData); */
       
       const { name, isForGoodWeather } = event.target.elements;
       const data = {
         name: name.value,
         isForGoodWeather: isForGoodWeather.checked,
       };
       
       console.log(data);
        onAddActivity(data); 
        event.target.reset();
        event.target.name.focus();
}

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add new Activity:</h1>
      <label htmlFor="name">
       Name:
      </label>
      <input id="name" name="name" type="text" />
      <label htmlFor='isForGoodWeather'>Good-weather activity:</label> 
      <input type="checkbox" name="isForGoodWeather" id="checkbox"/> 
        <button type="submit">Submit</button>
    </form>
    )}

