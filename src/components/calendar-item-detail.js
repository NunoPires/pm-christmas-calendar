import React, {Component} from 'react';

export class CalendarItemDetail extends Component {

    constructor() {
        super();
        this.state = {fadeIn: false};
    }

    componentWillUnmount () {

        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleDetailURL() {
        if(this.props.content.hasOwnProperty("destinationURL")) {
            // seems to trigger a new render, and an error with props access
            window.open(this.props.content.destinationURL, "_self");
        }
    }
     
    render() {

        if(!this.props.isVisible || this.props.content === null) return null;

        this.timeoutId = setTimeout(function () {
            this.setState({fadeIn: true});
        }.bind(this), 300);

        let className = "calendar-modal";
        if(this.state.fadeIn) {
            className += " fade-in";
        }

        return (
            <div className="calendar-modal-overlay" onClick={this.props.closeCallback}>
                <div className={className}>
                    <div className="close-button" onClick={this.props.closeCallback}></div>
                    <div className="day">{this.props.day}</div>
                    <h2>{this.props.content.title}</h2>
                    <div className="calendar-modal-description">{this.props.content.description}</div>
                    <img alt={this.props.content.title} src={this.props.content.imageURL}></img>
                    {this.props.content.hasOwnProperty("destinationURL") &&
						<div className="btn btn-default page-button" onClick={this.handleDetailURL.bind(this)}>Clica aqui!</div>
                    }
                </div>
            </div>
        );
    }
}