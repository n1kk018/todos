import React from "react";
import Row from "./Row";
import Editor from "./Editor";
import { HTMLTable } from "@blueprintjs/core";

const Table = props => {
  return (
    <HTMLTable bordered={true} striped={true}>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Description</th>
          <th>Date Prévisionnelle</th>
          <th>Options</th>
        </tr>
      </thead>

      <tbody>
        {props.todos.map(t => {
          if (t.editing) {
            return (
              <Editor
                editTodo={props.editTodo}
                cancelEditing={e => props.cancelEditing(t._id)}
                key={t._id}
                todo={t}
              />
            );
          } else {
            return (
              <Row
                todo={t}
                key={t._id}
                completeTodo={e => props.completeTodo(t)}
                startEditing={e => props.startEditing(t._id)}
                deleteTodo={e => props.deleteTodo(t)}
              />
            );
          }
        })}
        <Editor createTodo={props.createTodo} />
      </tbody>
    </HTMLTable>
  );
};

export default Table;
