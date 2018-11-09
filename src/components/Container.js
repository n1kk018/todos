import React, { Component } from "react";
import * as actions from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Table from "../components/Table";

class Container extends Component {
  //Create
  createTodo = todo => {
    this.props.actions.CreateTodo(todo);
  };

  //Update
  startEditing = id => {
    this.props.actions.StartEditing(id);
  };
  cancelEditing = id => {
    this.props.actions.CancelEditing(id);
  };
  editTodo = todo => {
    this.props.actions.UpdateTodo(todo);
  };
  completeTodo = todo => {
    this.props.actions.UpdateTodo({ ...todo, status: "done" });
  };

  //Delete
  deleteTodo = todo => {
    this.props.actions.DeleteTodo(todo);
  };

  render() {
    return (
      <div className="todo-container">
        <Table
          todos={this.props.todos}
          createTodo={this.createTodo}
          startEditing={this.startEditing}
          cancelEditing={this.cancelEditing}
          editTodo={this.editTodo}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

// Define the property types of this Container Component
Container.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
};

// This maps the state to the property of the component
function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  };
}

// This maps the dispatch to the property of the component
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
