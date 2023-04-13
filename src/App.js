import React from 'react';
import Form from "./components/Form"; 
import { useState } from 'react';
import { uid } from "uid";


function App() {
const [activities, setActivities] = useState([{name: "", isForGoodWeather: false}]);
function handleAddActivity(newActivity) {
  setActivities([...activities,{...newActivity, id: uid()}]);
}
console.log(activities)
return (
      <Form onAddActivity={handleAddActivity}/>
  );

}
export default App;



