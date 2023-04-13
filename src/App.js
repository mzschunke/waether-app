import React from 'react';
import Form from "./components/Form"; 
import { useState } from 'react';
import { uid } from "uid";
import List from "./components/List";


function App() {
const [activities, setActivities] = useState([{name: "", isForGoodWeather: false}]);
function handleAddActivity(newActivity) {
  setActivities([...activities,{...newActivity, id: uid()}]);
}
console.log(activities)
return (
  <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity}/>
      </>
  );

}
export default App;



