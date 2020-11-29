import React, {Component} from 'react';

export class SnowElement extends Component {
    render() {
        let items = []
        for(var iterations = 1; iterations <= 200; iterations++) {
            items.push(<div key={iterations} className="snow"></div>);
        }
        return items;
    }
}