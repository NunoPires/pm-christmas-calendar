import React, {Component} from 'react';
import _ from 'underscore';
import {CalendarItem} from './calendar-item.js';
import {CalendarAPI} from '../services/calendar-api.js';
 
export class CalendarLayout extends Component {

    constructor() {
        super();
        this.state = {calendarData: null};
        this.audio = new Audio(window.location + "sounds/jingle-bells.mp3");
    }
    
    componentDidMount() {
        let api = new CalendarAPI();
        api.fetchCalendarData().then(
                (data) => {
                    this.setState({calendarData: data});
                },
                (error) => {
                    console.log(error);
                }
        );
    }

    getCalendarDays(year, month, dayLimit) {
        var days = [];
        var date = new Date(year, month, 1);
        while(date.getMonth() === month && date.getDate() !== dayLimit) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }
    
    render() {

        if(this.animation !== undefined) {
            this.animation.play();
        }
        
        // 0=January, 11 = December
        let days = _.map(this.getCalendarDays(2020, 11, 26), (date) => {

            let key = date.toISOString().split("T")[0];
            if(this.state.calendarData !== null) {
                for(let detail of this.state.calendarData) {
                    if(detail.date === key) {           
                        return <CalendarItem key={date.getDate()} date={date} calendarData={detail} sound={this.audio}/>
                    }
                }
            }

            return <CalendarItem key={date.getDate()} date={date} calendarData="" sound={this.audio}/>
        });
        
        return (
            <div id="calendar-animation">
                <div id="calendar" className="container-fluid">
                    {days}
                </div>
            </div>
        );
    }

    
}