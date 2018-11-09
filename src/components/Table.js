import React from "react";
import Row from "./Row";
import Editor from "./Editor";

const Table = props => {
  return (
    <table className="bp3-html-table bp3-html-table-striped bp3-html-table-bordered bp3-interactive">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
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
    </table>
  );
};

export default Table;
