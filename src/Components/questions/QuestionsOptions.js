import React, { Component } from 'react';
import QuestionsOptionItem from './QuestionsOptionItem';

class QuestionsOptions extends Component {
    render() {
        
        return (
            <ul className="question-options">
                {this.props.options.map((item, index) => (
                    <QuestionsOptionItem key={index} title={item.choice} votes={item.votes} url="{item.url}"></QuestionsOptionItem>
                ))}
            </ul>
        );
    }
};

export default QuestionsOptions;