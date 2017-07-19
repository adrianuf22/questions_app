import React, { Component } from 'react';

class QuestionsEmpty extends Component {
    render() {
        return (
            <div className="question">
                <div className="question-header">
                    <h2 className="question-title">
                        Nenhuma questão disponível
                    </h2>
                </div>
                <div className="question-body">
                    
                </div>
            </div>
        );
    }
};

export default QuestionsEmpty;