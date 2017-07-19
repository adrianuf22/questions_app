import React, { Component } from 'react';
import QuestionsOptions from './QuestionsOptions';

class QuestionsItems extends Component {
    render() {
        return (
            <div className="question">
                <div className="question-header">
                    <h2 className="question-title">
                        {this.props.title}
                    </h2>
                </div>
                <div className="question-body">
                    <QuestionsOptions options={this.props.options}></QuestionsOptions>
                </div>
            </div>
        );
    }
};

export default QuestionsItems;