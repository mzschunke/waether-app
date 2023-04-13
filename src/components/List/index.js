import React from "react";

export default function List ({activities, isGoodWeather}) {
 

    return (
        <ul>
         <h1>{isGoodWeather ? "Go outside" : "Stay inside"}</h1>   
       {activities.map((activity) => (
       <li key={activity.id}>{activity.name}</li>
       ))} 
        </ul>
    );
}

