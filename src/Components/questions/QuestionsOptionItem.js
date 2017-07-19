import React, { Component } from 'react';

class QuestionsOptionItem extends Component {
    render() {
        return (
            <li>
                <input type="radio" name=""/>
                <h3>{this.props.title}</h3>
                <p>{this.props.votes}</p>
            </li>
        );
    }
};

export default QuestionsOptionItem;