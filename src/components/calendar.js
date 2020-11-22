import React, {Component} from 'react';
import _ from 'underscore';
import {CalendarItem} from './calendar-item.js';
import {CalendarAPI} from '../services/calendar-api.js';
 
export class CalendarLayout extends Component {

    constructor() {
        super();
        this.state = {calendarData: null};
    }
    
    componentDidMount() {
        let api = new CalendarAPI();
        api.fetchCalendarData()
            .then(
                (data) => {
                    this.setState({calendarData: data});
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    getCalendarDays(month, year, dayLimit) {
        var days = [];
        var date = new Date(year, month, 1);
        while(date.getMonth() === month && date.getDate() !== dayLimit) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }
    
    render() {
        
        // 0=January, 11 = December
        let days = _.map(this.getCalendarDays(11, 2020, 25), (date) => {
            return <CalendarItem key={date.getDate()} date={date} calendarData={this.state.calendarData}/>   
        });
        
        return (
            <div className="container">
                {days}
            </div>
        );
    }

    
}