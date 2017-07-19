import React, { Component } from 'react';
import QuestionsItems from './QuestionsItems';
import QuestionsEmpty from './QuestionsEmpty';
import QuestionService from './QuestionService';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = { questions: [] };
    }
    
    fetchQuestions() {
        QuestionService.load().then(data => {
            this.setState({ questions: data });
        });
    }
    
    componentDidMount() {
        this.fetchQuestions();
    }
    
    render() {
        return (
            <div className="questions">
                { (this.state.questions) 
                    ?
                        this.state.questions.map((item, index) => (
                            <QuestionsItems key={index} title={item.question} options={item.choices} />
                        ))
                    : 
                        <QuestionsEmpty /> 
                }
            </div>
        );
    }
};

export default Questions;