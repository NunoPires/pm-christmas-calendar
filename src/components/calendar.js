import React, {Component} from 'react';
import _ from 'underscore';
import {CalendarItem} from './calendar-day.js'

export class CalendarLayout extends Component {
    
    getCalendarDays(month, year, dayLimit) {
        var days = [];
        var date = new Date(year, month, 1);
        while(date.getMonth() === month && date.getDate() !== dayLimit) {
            days.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }
        return days;
    }
    
    render() {

        // 0=January, 11 = December
        let days = _.map(this.getCalendarDays(11, 2020, 25), (day) => {
            return <CalendarItem key={day} day={day} />   
        });
        
        return (
            <div className="container">
                {days}
            </div>
        );
    }

    
}