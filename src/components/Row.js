import React from "react";
import { Button, ButtonGroup } from "@blueprintjs/core";
import moment from "moment";
import "moment/locale/fr";

const Row = props => {
  return (
    <tr className={getClassName(props)}>
      <td>{props.todo.title}</td>
      <td>{props.todo.description}</td>
      <td>{formatDate(props.todo.date)}</td>
      <td className="options">
        <ButtonGroup large fill>
          {props.todo.status !== "done" && (
            <Button icon="tick" onClick={props.completeTodo} />
          )}
          <Button icon="edit" onClick={props.startEditing} />
          <Button icon="trash" onClick={props.deleteTodo} />
        </ButtonGroup>
      </td>
    </tr>
  );
};

const formatDate = date => {
  return moment(date)
    .locale("fr")
    .format("Do MMMM YYYY");
};

const getClassName = props => {
  return `
    ${props.todo.updating ? "updating" : ""}
    ${props.todo.status === "done" ? "done" : ""}
    ${props.todo.deleting ? "deleting" : ""}
    `;
};

export default Row;
