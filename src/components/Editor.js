import React, { Component } from "react";

import { Button, InputGroup, ButtonGroup } from "@blueprintjs/core";

import moment from "moment";
import "moment/locale/fr";

import { DateInput } from "@blueprintjs/datetime";
import "react-datepicker/dist/react-datepicker.css";
import MomentLocaleUtils from "react-day-picker/moment";

class Editor extends Component {
  constructor(props) {
    super(props);
    if (this.props.todo) {
      this.state = {
        ...this.props.todo
      };
    } else {
      this.state = {
        ...this.emptyTodo()
      };
    }
  }

  //Initializes a Empty Todo Object

  emptyTodo = () => {
    return { title: "", description: "", date: moment() };
  };

  // Input change handling methods

  changeNewTitle = event => {
    this.setState({ title: event.target.value });
  };

  changeNewDescription = event => {
    this.setState({ description: event.target.value });
  };

  changeNewDate = event => {
    this.setState({ date: event });
  };

  // Form submission methods

  createTodo = event => {
    this.resetTodo();
    this.props.createTodo(this.state);
  };
  editTodo = event => {
    this.props.editTodo(this.state);
  };

  // Modifying the inputs indirectly methods

  resetTodo = () => {
    this.setState({ title: "", description: "", date: moment() });
  };
  cancelEditing = () => {
    this.props.cancelEditing();
  };

  // Convert the date to moment object for the React DatePicker

  getDateForDatePicker() {
    return moment(this.state.date);
  }

  getMomentFormatter(format) {
    return {
      formatDate: (date, locale) =>
        moment(date)
          .locale(locale)
          .format(format),
      parseDate: (str, locale) =>
        moment(str, format)
          .locale(locale)
          .toDate()
    };
  }

  render() {
    return (
      <tr>
        <td>
          <InputGroup
            placeholder="Titre"
            value={this.state.title}
            onChange={this.changeNewTitle}
          />
        </td>

        <td>
          <InputGroup
            placeholder="Description"
            value={this.state.description}
            onChange={this.changeNewDescription}
          />
        </td>

        <td>
          <DateInput
            {...this.getMomentFormatter("Do MMMM YYYY")}
            locale="fr"
            onChange={this.changeNewDate}
            showActionsBar={true}
            localeUtils={MomentLocaleUtils}
            placeholder={moment()
              .locale("fr")
              .format("Do MMMM YYYY")}
          />
        </td>

        <Options
          todo={this.props.todo}
          editTodo={this.editTodo}
          createTodo={this.createTodo}
          resetTodo={this.resetTodo}
          cancelEdit={this.cancelEditing}
        />
      </tr>
    );
  }
}

export default Editor;

const Options = props => {
  if (props.todo && props.todo.editing) {
    return EditOptions(props);
  } else {
    return AddOptions(props);
  }
};

const EditOptions = props => {
  return (
    <td>
      <ButtonGroup large fill>
        <Button rightIcon="confirm" onClick={props.editTodo}>
          Valider
        </Button>
        <Button rightIcon="undo" onClick={props.cancelEdit}>
          Annuler
        </Button>
      </ButtonGroup>
    </td>
  );
};

const AddOptions = props => {
  return (
    <td>
      <ButtonGroup large fill>
        <Button rightIcon="confirm" onClick={props.createTodo}>
          Valider
        </Button>
        <Button rightIcon="undo" onClick={props.resetTodo}>
          Annuler
        </Button>
      </ButtonGroup>
    </td>
  );
};
