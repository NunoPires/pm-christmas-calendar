import React, {Component} from 'react';

export class CalendarItemDetail extends Component {

    handleDetailURL() {
        if(this.props.content.hasOwnProperty("destinationURL")) {
            window.open(this.props.content.destinationURL, "_blank");
        }
    }
     
    render() {
        if(!this.props.isVisible) return null;
        let content = this.props.content;

        return (
            <div className="calendar-modal-overlay">
                <div className="calendar-modal" onClick={this.handleDetailURL.bind(this)}>
                    <h2>{this.props.content.title}</h2>
                    <div className="calendar-modal-description">{this.props.content.description}</div>
                    <img alt={this.props.content.title} src={this.props.content.imageURL} width="500" height="500"></img>
                    {content.hasOwnProperty("destinationURL") &&
						<div className="btn btn-default page-button" onClick={this.handleDetailURL}>Clica aqui!</div>
                    }
                </div>
            </div>
        );
    }
}