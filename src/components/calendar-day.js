import React, {Component} from 'react';

export class CalendarItem extends Component {

    render() {
        return (
            <div className="col-md-2 calendar-item">{this.props.day}</div>
        );
    }
}