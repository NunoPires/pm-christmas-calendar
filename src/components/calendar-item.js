import React, {Component} from 'react';
import {CalendarItemDetail} from './calendar-item-detail.js';

export class CalendarItem extends Component {

    constructor() {
        super();
        this.state = {showDetail: false};
    }

    handleKeyDown(event) {
        if(event.key === "Escape" && this.state.showDetail) {
            this.setState({showDetail: !this.state.showDetail});
        }
    }

    toggleDetail() {
        this.setState({showDetail: !this.state.showDetail});
    }

    render() {
        let currentDay = this.props.day;
        return (
            <div tabIndex={1} className="col-md-2 calendar-item" onKeyDown={this.handleKeyDown.bind(this)} onClick={this.toggleDetail.bind(this)}>
                {currentDay}
                <CalendarItemDetail day={currentDay} onKeyPress={this.handleKeyPress} toggleDetail={this.toggleDetail.bind(this)} isVisible={this.state.showDetail} />
            </div>  

        );
    }
}