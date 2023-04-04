import React from "react";

const Overview = (props) => {
  const { tasks, deleteItem } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li 
                  key={task.id}
                  className="listItem"
                >
                  {task.listNumber}.
                  {" "} 
                  {task.text}
                  <button className="deleteBtn" onClick={deleteItem}>Delete</button>
                </li>;
      })}
    </ul>
  );

};

export default Overview;