import React, { Component } from 'react';
import Header from './Components/commons/Header';
import Questions from './Components/questions/Questions';

class App extends Component {
    constructor(props) {
        super(props);        
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header />
                </div>
                <section className="App-body">
                    <Questions />
                </section>
            </div>
        );
    }
};


export default App;