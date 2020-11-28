import React, {Component} from 'react';
import ls from 'local-storage';
import {CalendarItemDetail} from './calendar-item-detail.js';

export class CalendarItem extends Component {

    constructor() {
        super();
        this.state = {showDetail: false, viewed: false};
    }

    componentDidMount() {
        this.setState({viewed: ls.get(this.props.date.getDate()) || false});
    }

    fetchCalendarItemDetail() {
        /*let key = this.props.date.toISOString().split("T")[0];
        if(this.props.calendarData !== null) {
            for(let detail of this.props.calendarData) {
                if(detail.date === key) {           
                    return detail;
                }
            }
        }
        return null;*/

        let detail = {
            title: "It's beginning to look like Christmas", 
            description: "É Natal, tudo é mágico e portanto, toma uma surpresa!",
            imageURL: window.location.origin + "/test-image.jpg",
            destinationURL: "https://fun.premium-minds.com/#15950027408812/15952898613592"
        };
        return detail;
    }

    handleKeyDown(event) {

        if(event.key === "Escape" && this.state.showDetail) {
            this.setState({showDetail: !this.state.showDetail});
        }
    }

    toggleContentAlert() {
        alert("Ainda não é o dia de abrir esta caixa!")
    }

    toggleDetail() {
        this.props.sound.play();
        this.setState({showDetail: !this.state.showDetail, viewed: true});
        ls.set(this.props.date.getDate(), true);
    }

    render() {
        let className = "back";
        if(this.state.viewed) {
            className+= " viewed";
        }
    
        let currentDay = this.props.date.getDate();
        let content = this.fetchCalendarItemDetail();
        let callback = content !== null ? this.toggleDetail : this.toggleContentAlert;
        let text = '';

        if(currentDay === 25) {
            text = 'Feliz Natal';
        }

        if(content === null) {
            className+= " disabled";
        }

        return (
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <div className='day'>{currentDay}</div>
                        <div className='text'>{text}</div>
                    </div>
                    <div tabIndex={1} className={className} onKeyDown={this.handleKeyDown.bind(this)} onClick={callback.bind(this)}>
                        ?
                        <CalendarItemDetail 
                            day={currentDay} 
                            isVisible={this.state.showDetail} 
                            content={content} />
                    </div>
                </div>
            </div>
        );
    }
}