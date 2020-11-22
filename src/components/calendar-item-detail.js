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
                <div className="calendar-modal" onClick={this.handleDetailURL.bind(this)}>
                    <h2>{this.props.content.title}</h2>
                    <div className="calendar-modal-description">{this.props.content.description}</div>
                    <img alt={this.props.content.title} src={this.props.content.imageURL} width="750" height="500"></img>
                    {this.props.content.hasOwnProperty("destinationURL") &&
						<div className="btn btn-default page-button" onClick={this.handleDetailURL}>Clica aqui!</div>
                    }
                </div>
            </div>
        );
    }
}