import React, {Component} from 'react';
import {CalendarDetail} from './calendar-detail.js';

export class CalendarItem extends Component {

    constructor() {
        super();
        this.state = {showContent: false};
    }

    toggleDetail() {
        this.setState({showContent: !this.state.showContent});
    }

    render() {
        let currentDay = this.props.day;
        return (
            <div className="col-md-2 calendar-item" onClick={() => this.toggleDetail()}>
                {currentDay}
                <CalendarDetail day={currentDay} toggleDetail={this.toggleDetail.bind(this)} isVisible={this.state.showContent} />
            </div>  

        );
    }
}