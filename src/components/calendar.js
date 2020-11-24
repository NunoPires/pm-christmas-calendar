import React, {Component} from 'react';
import _ from 'underscore';
import Lottie from 'lottie-web';
import animationData from '../animations/christmas.json';
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

        this.animation 
        = Lottie.loadAnimation({
            container: document.getElementById("calendar-animation"),
            renderer: 'html',
            loop: true,
            autoplay: true,
            animationData: animationData
        });
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

        if(this.animation !== undefined) {
            this.animation.play();
        }
        
        // 0=January, 11 = December
        let days = _.map(this.getCalendarDays(11, 2020, 26), (date) => {
            return <CalendarItem key={date.getDate()} date={date} calendarData={this.state.calendarData} sound={this.audio}/>   
        });
        
        return (
            <div id="calendar-animation">
                <div id="calendar" className="container">
                    {days}
                </div>
            </div>
        );
    }

    
}