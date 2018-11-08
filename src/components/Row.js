import React from "react";
import { Button } from "@blueprintjs/core";

const Row = props => {
  return (
    // getClass Name assigns the class names of this element

    <tr className={getClassName(props)}>
      <td>{props.todo.title}</td>
      <td>{props.todo.description}</td>
      <td>{props.todo.date}</td>
      <td className="options">
        {props.todo.status !== "done" && (
          <Button
            className="option-buttons"
            color="green"
            onClick={props.completeTodo}
          >
            <i className="fa fa-check" />
          </Button>
        )}
        <Button
          className="option-buttons"
          color="blue"
          onClick={props.startEditing}
        >
          <i className="fa fa-pencil" />
        </Button>
        <Button
          className="option-buttons"
          color="red"
          onClick={props.deleteTodo}
        >
          <i className="fa fa-trash" />
        </Button>
      </td>
    </tr>
  );
};

// Right now Updating, done and deleting these three states are represented with different Class Name

const getClassName = props => {
  return `
    
    ${props.todo.updating ? "updating" : ""}
    ${props.todo.status === "done" ? "done" : ""}
    ${props.todo.deleting ? "deleting" : ""}
    `;
};

export default Row;
