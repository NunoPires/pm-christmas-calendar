import React, {Component} from 'react';
import {CalendarItemDetail} from './calendar-item-detail.js';

export class CalendarItem extends Component {

    constructor() {
        super();
        this.state = {showDetail: false};
    }

    handleKeyDown(event) {
        if(event.key === "Escape" && this.state.showDetail) {
            this.toggleDetail();
        }
    }

    toggleDetail() {
        this.setState({showDetail: !this.state.showDetail});
    }

    fetchCalendarItemDetail() {
        //let detail = getDetail(this,props.day);
        let detail = {
            title: "Teste", 
            description: "É Natal, tudo é mágico e portanto, toma uma surpresa!",
            imageURL: window.location.origin + "/test-image.jpg",
            destinationURL: "https://www.premium-minds.com"
        };
        return detail;
    }

    render() {
        let currentDay = this.props.day;
        let content = this.fetchCalendarItemDetail();
        return (
            <div tabIndex={1} className="col-md-2 calendar-item" onKeyDown={this.handleKeyDown.bind(this)} onClick={this.toggleDetail.bind(this)}>
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