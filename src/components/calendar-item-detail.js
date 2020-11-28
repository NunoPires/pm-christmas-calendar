import React, {Component} from 'react';

export class CalendarItemDetail extends Component {

    handleDetailURL() {
        if(this.props.content.hasOwnProperty("destinationURL")) {
            // seems to trigger a new render, and an error with props access
            window.open(this.props.content.destinationURL, "_self");
        }
    }
     
    render() {
        if(!this.props.isVisible || this.props.content === null) return null;

        return (
            <div className="calendar-modal-overlay">
                <div className="calendar-modal fade-in" onClick={this.handleDetailURL.bind(this)}>
                    <div className="close-button"></div>
                    <div className="day">1</div>
                    <h2>{this.props.content.title}</h2>
                    <div className="calendar-modal-description">{this.props.content.description}</div>
                    <img alt={this.props.content.title} src={this.props.content.imageURL}></img>
                </div>
            </div>
        );
    }
}