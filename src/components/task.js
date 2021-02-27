import React from "react";
import Button from "react-bootstrap/Button";

const Task = ({ name, onEdit, onDelete }) => {
  return (
    <div id={name}>
      {/**
       * TODO: add an html or bootstrap element that uses the name variable to display an individual task
       */}
      <h4 className="column5">{name}</h4>
      <Button onClick={() => onEdit(name)} variant="warning" className="column25l">Edit Me!</Button>
      <Button onClick={() => onDelete(name)} variant="danger" className="column25r">Delete Me!</Button>
    </div>
  );
};

export default Task;
