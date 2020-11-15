import React, {Component} from 'react';

export class CalendarItemDetail extends Component {

    handleDetailURL() {
        // This url should be a prop
        let url = "https://www.premium-minds.com";
        window.open(url, "_blank");
    }
     
    render() {
        if(!this.props.isVisible) return null;

        return (
            <div className="calendar-modal-overlay">
                <div className="calendar-modal" onClick={this.handleDetailURL.bind(this)}>
                    {this.props.title}
                </div>
            </div>
        );
    }
}