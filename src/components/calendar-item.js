import React, {Component} from 'react';
import ls from 'local-storage';
import {CalendarItemDetail} from './calendar-item-detail.js';

export class CalendarItem extends Component {

    constructor() {
        super();
        this.state = {showDetail: false, viewed: false};
        this.audio = new Audio(window.location + 'sounds/nope.mp3');
    }

    componentDidMount() {
        this.setState({viewed: ls.get(this.props.date.getDate()) || false});
    }

    fetchCalendarItemDetail() {
        return this.props.calendarData === '' ? null : this.props.calendarData;
    }

    handleKeyDown(event) {
        if(event.key === 'Escape' && this.state.showDetail) {
            this.setState({showDetail: !this.state.showDetail});
        }
    }

    toggleContentAlert() {
        //this.audio.play();
        //alert('Ainda não é o dia de abrir esta caixa!');
    }

    toggleDetail() {
        this.props.sound.play();
        this.setState({showDetail: !this.state.showDetail, viewed: true});
        ls.set(this.props.date.getDate(), true);
    }

    closeDetail() {
        this.setState({showDetail: !this.state.showDetail, viewed: true});
    }

    render() {
    
        let currentDay = this.props.date.getDate();
        let content = this.fetchCalendarItemDetail();
        
        let text = '';
        if(currentDay === 25) {
            text = 'Feliz Natal';
        }

        let className = 'flip-container';
        if(content !== null) {
            className+= ' enabled';
        }

        let callback = content !== null ? this.toggleDetail : this.toggleContentAlert;
        let backside = null;
        if(this.state.viewed) {
            backside = <div className='back viewed' onClick={callback.bind(this)}>&#10003;</div>
            className+= ' viewed-front';
        }
        else {
            backside = <div className='back' onClick={callback.bind(this)}>?</div>
        }

        return (
            <div>
                <div tabIndex={1} className={className} onClose={this.closeDetail.bind(this)}  onKeyDown={this.handleKeyDown.bind(this)} onClick={callback.bind(this)}>
                    <div className='flipper'>
                        <div className='front'>
                            <div className='day'>{currentDay}</div>
                            <div className='text'>{text}</div>
                        </div>
                        {backside}
                    </div>
                </div>
                <CalendarItemDetail 
                    day={currentDay} 
                    isVisible={this.state.showDetail} 
                    content={content}
                    closeCallback={this.closeDetail.bind(this)} />
            </div>
        );
    }
}