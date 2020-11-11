import React, {Component} from 'react';

export class CalendarDetail extends Component {
    
    render() {
        if(!this.props.isVisible) return null;

        return (
            <div className="calendar-modal-overlay" onClick={this.props.toggleDetail}>
                <div className="calendar-modal">
                    {this.props.title}
                </div>
            </div>
        );
    }
}