import React from "react";
import Button from "react-bootstrap/Button";

const Task = ({ name }) => {
  return (
    <div id={name}>
      {/**
       * TODO: add an html or bootstrap element that uses the name variable to display an individual task
       */}
      <h4 className="column5">{name}</h4>
      <Button /**onClick={editTask}**/ variant="warning" className="column25l">Edit Me!</Button>
      <Button /**onClick={deleteTask}**/ variant="danger" className="column25r">Delete Me!</Button>
    </div>
  );
};

export default Task;
