import React, {Component} from 'react';
import ls from 'local-storage';
import {CalendarItemDetail} from './calendar-item-detail.js';

export class CalendarItem extends Component {

    constructor() {
        super();
        this.state = {showDetail: false, viewed: false};
    }

    componentDidMount() {
        this.setState({viewed: ls.get(this.props.date.getDate()) || false});
    }

    fetchCalendarItemDetail() {
        let key = this.props.date.toISOString().split("T")[0];
        if(this.props.calendarData !== null) {
            for(let detail of this.props.calendarData) {
                if(detail.date === key) {           
                    return detail;
                }
            }
        }
        return null;
    }

    handleKeyDown(event) {

        if(event.key === "Escape" && this.state.showDetail) {
            this.setState({showDetail: !this.state.showDetail});
        }
    }

    toggleContentAlert() {
        alert("Ainda não é o dia de abrir esta caixa!")
    }

    toggleDetail() {
        this.props.sound.play();
        this.setState({showDetail: !this.state.showDetail, viewed: true});
        ls.set(this.props.date.getDate(), true);
    }

    render() {
        let className = "col-md-2 calendar-item";
        if(this.state.viewed) {
            className+= " viewed";
        }

        let currentDay = this.props.date.getDate();
        let content = this.fetchCalendarItemDetail();
        let callback = content !== null ? this.toggleDetail : this.toggleContentAlert;

        if(content === null) {
            className+= " disabled";
        }

        return (
            <div tabIndex={1} className={className} onKeyDown={this.handleKeyDown.bind(this)} onClick={callback.bind(this)}>
                {currentDay}
                <CalendarItemDetail 
                    day={currentDay} 
                    isVisible={this.state.showDetail} 
                    content={content} />
            </div>  

        );
    }
}