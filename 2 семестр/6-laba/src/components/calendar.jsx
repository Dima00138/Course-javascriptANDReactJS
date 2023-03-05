import React from 'react';
import classnames from 'classnames';
import * as calendar from './calendar_f';
import Note from './Note';
import Notes from "./Notes";
export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,2021,2022,2023,2024,2025,2026],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };
    notes = {"header": [], "text" : [], "date" : []};
    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null,
        selectedDate2: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        
        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => {
        if (calendar.areEqual(this.state.selectedDate, date)) {
            this.setState({selectedDate2: date});
        }else {
        this.setState({ selectedDate: date, selectedDate2: null });
        
        this.props.onChange(date);
    }};

    NotesChange = (header, text, date) => {
        if (header === "delFir"){
            this.notes.header = this.notes.header.slice(1);
            this.notes.text = this.notes.text.slice(1);
            this.notes.date = this.notes.date.slice(1);
        }else if (header === "delLas") {
            this.notes.header.pop();
            this.notes.text.pop();
            this.notes.date.pop();
        }else if (header === "delall") {
            this.notes = {"header": [], "text" : [], "date" : []};
        }else {
        this.notes.header.push(header);
        this.notes.text.push(text);
        this.notes.date.push(date);
        }
    }

    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className="calendar">
                <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

                    <select
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select
                        ref={element => this.yearSelect = element}
                        value={this.year}
                        onChange={this.handleSelectChange}>
                        {years.map(year =>
                            <option key={year} value={year}>{year}</option> 
                        )}
                    </select>

                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>
                            {weekDayNames.map(name =>
                                <th key={name}>{name}</th>    
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td
                                        key={index}
                                        className={classnames('day', {
                                            'today': calendar.areEqual(date, currentDate),
                                            'selected': calendar.areEqual(date, selectedDate),
                                        })}
                                        onClick={() => this.handleDayClick(date)}
                                    >{date.getDate()}</td>
                                    :
                                    <td key={index} className="calendar-cell"/>
                                )}
                            </tr> 
                        )}
                    </tbody>
                </table>
                {this.state.selectedDate2 != null ? (
                    <Note data={this.state.selectedDate2} notes={this.notes} onUpdate={this.NotesChange}/>
        ) : null}
            </div>
        );
    }
}