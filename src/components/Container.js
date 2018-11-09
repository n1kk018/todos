import React, { Component } from "react";
import * as actions from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Table from "../components/Table";
import { Card, Elevation } from "@blueprintjs/core";
import moment from "moment";
import "moment/locale/fr";

class Container extends Component {
  formatDate = date => {
    return moment(date)
      .locale("fr")
      .format();
  };
  //Create
  createTodo = todo => {
    if (todo.date) {
      todo.date = this.formatDate(todo.date);
    } else {
      todo.date = new Date();
    }
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
      <div className="container">
        <Card interactive={true} elevation={Elevation.FOUR}>
          <h1>Todo List</h1>
          <Table
            todos={this.props.todos}
            createTodo={this.createTodo}
            startEditing={this.startEditing}
            cancelEditing={this.cancelEditing}
            editTodo={this.editTodo}
            completeTodo={this.completeTodo}
            deleteTodo={this.deleteTodo}
          />
        </Card>
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
