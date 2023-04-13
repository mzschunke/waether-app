import React from 'react';
import Form from "./components/Form"; 
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from 'use-local-storage-state';


const initialActivities = [
  { name: "Coding", isForGoodWeather: false, id: uid() },
]
const isGoodWeather = true;
 

function App() {  
const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: initialActivities });
    function handleAddActivity(newActivity) {
  setActivities([...activities,{id: uid(), ...newActivity}]);
}
const weatherCheckGood = activities.filter((activity) => {
  return activity.isForGoodWeather === true;
  })

  const weatherCheckBad = activities.filter((activity) => {
    return activity.isForGoodWeather === false;
    })


console.log(activities)
return (
  <>
      <List activities={isGoodWeather ? weatherCheckGood : weatherCheckBad} isGoodWeather={isGoodWeather}/>
      <Form onAddActivity={handleAddActivity}/>
     </>
  );
}

export default App;



/* -------------     Funktioniert nicht, da kein initial default value:
 1.)
 const [activities, setActivities] = useLocalStorageState("activities", [{name: " ", isForGoodWeather: false}]);

 2.) 
 const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: initialActivities });

 */