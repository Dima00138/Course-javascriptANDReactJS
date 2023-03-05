import React from "react";
import Notes from "./Notes";  
import "../index.css";
export default class Note extends React.Component {
  constructor(props) {
    super();
    this.state = {
      header: [],
      date: [],

      text: [],
      count: 0,
    };

    this.boolean = false;

    this.handleInput = this.handleInput.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidMount() {
    let note = this.props.notes;
    note["header"].map((val, index) => {
      if (this.boolean) return;
      this.setState((prevState) => ({
        header: [...prevState.header, val],
        text: [...prevState.text, note.text[index]],
        count:  prevState.count + 1,
        date: [...prevState.date, note.date[index]],
      }))
    });
    this.boolean = true;
    return;
  }

  handleInput = () => {
    const val = this.headInput.value;
    const text = this.textar.value;
    const date = this.props.data.toLocaleDateString();
    this.headerIn = "";
    this.textIn = "";
    this.form.reset();
    this.props.onUpdate(val, text,date);
      this.setState((prevState) => ({
        header: [...prevState.header, val],
        text: [...prevState.text, text],
        count: this.state.count + 1,
        date: [...prevState.date, date],
      }));
  };
  deleteNote = (e) => {
    if (e.target.name === "firstDelete") {
      this.props.onUpdate("delFir");
      let copyHeader = Object.assign([], this.state.header);
      let copyText = Object.assign([], this.state.text);
      let copyDate = Object.assign([], this.state.date);
      let index = 0;
      copyHeader.splice(index, 1);
      copyText.splice(index, 1);
      copyDate.splice(index, 1);

      this.setState((prevState) => ({
        header: copyHeader,
        text: copyText,
        date: copyDate,
        count: this.state.count - 1,
      }));
    } else if (e.target.name === "lastDelete") {
      this.props.onUpdate("delLas");
      let copyHeader = Object.assign([], this.state.header);
      let copyText = Object.assign([], this.state.text);
      let copyDate = Object.assign([], this.state.date);
      let index = copyHeader.length;
      index--;
      copyHeader.splice(index, 1);
      copyText.splice(index, 1);
      copyDate.splice(index, 1);
      this.setState({
        header: copyHeader,
        text: copyText,
        date: copyDate,
        count: this.state.count - 1,
      });
    } else if (e.target.name === "allDelete") {
      this.props.onUpdate("delall");
      this.setState({
        header: [],
        date: [],
        text: [],
        count: 0,
      });
    }
  };

  render() {
    return (
      <div className="note-l">
        <form style={{ width: "fit-content" }} ref={(e) => (this.form = e)}>
          <fieldset>
            <legend>{"Заметки"}</legend>
            <label>{"Заголовок"}</label>
            <input type={"text"} id="headerI" name={"header"} ref={(e) => (this.headInput = e)}></input>
            <label>{"Содержание"}</label>
            <textarea name="text" id="textar" ref={(e) => (this.textar = e)}></textarea>
            <button type={"button"} onClick={this.handleInput}>
              {"Добавить Заметку"}
            </button>
            <button type={"button"} name={"allDelete"} onClick={this.deleteNote}>
              {"Удалить все заметки"}
            </button>
            {this.state.count > 3 ? (
              <span>
                <button
                  type={"button"}
                  name={"firstDelete"}
                  onClick={this.deleteNote}>
                  {"Удалить первую заметку"}
                </button>
                <button
                  type={"button"}
                  name={"lastDelete"}
                  onClick={this.deleteNote}>
                  {"Удалить последнюю заметку"}
                </button>
              </span>
            ) : null}
          </fieldset>
        </form>
          <Notes
            header={this.state.header}
            text={this.state.text}
            count={this.state.count}
            date={this.state.date}  
            />
      </div>
    );
  }
}
