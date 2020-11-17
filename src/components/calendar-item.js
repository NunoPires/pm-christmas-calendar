import React, {Component} from 'react';
import ls from 'local-storage';
import {CalendarItemDetail} from './calendar-item-detail.js';

export class CalendarItem extends Component {

    constructor() {
        super();
        this.state = {showDetail: false, viewed: false};
    }

    componentDidMount() {
        this.setState({viewed: ls.get(this.props.day) || false});
    }

    handleKeyDown(event) {
        if(event.key === "Escape" && this.state.showDetail) {
            this.toggleDetail();
        }
    }

    toggleDetail() {
        this.setState({showDetail: !this.state.showDetail, viewed: true});
        ls.set(this.props.day, true);
    }

    fetchCalendarItemDetail() {
        //let detail = getDetail(this,props.day);
        let detail = {
            title: "It's beginning to look like Christmas", 
            description: "É Natal, tudo é mágico e portanto, toma uma surpresa!",
            imageURL: window.location.origin + "/test-image.jpg",
            destinationURL: "https://fun.premium-minds.com/#15950027408812/15952898613592"
        };
        return detail;
    }

    render() {
        let className = "col-md-2 calendar-item";
        if(this.state.viewed) {
            className+= "-viewed";
        }

        let currentDay = this.props.day;
        let content = this.fetchCalendarItemDetail();
        return (
            <div tabIndex={1} className={className} onKeyDown={this.handleKeyDown.bind(this)} onClick={this.toggleDetail.bind(this)}>
                {currentDay}
                <CalendarItemDetail 
                    day={currentDay} 
                    onKeyPress={this.handleKeyPress} 
                    toggleDetail={this.toggleDetail.bind(this)} 
                    isVisible={this.state.showDetail} 
                    content={content} />
            </div>  

        );
    }
}