import React from "react";
import StudentInfo from "./components/StudentInfo";
import Note from "./components/Note";
import Calendar from "./components/calendar";

export default class App extends React.Component {
	state = {
		date: null
	};

	handleDateChange = date => this.setState({ date });

	render() {
		const { date } = this.state;

		return (
			<div>
				{date && <p className="vibor">Выбранная дата: {date.toLocaleDateString()}</p>}

				<Calendar onChange={this.handleDateChange}/>
				<StudentInfo/>
			</div>
		);
	}
}
