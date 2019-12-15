import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTrivia extends Component {

constructor(props) {
    super(props);

        this.onChangeTriviaQuestion = this.onChangeTriviaQuestion.bind(this);
        this.onChangeTriviaAnswer = this.onChangeTriviaAnswer.bind(this);
        this.onChangeTriviaOption1 = this.onChangeTriviaOption1.bind(this);
        this.onChangeTriviaOption2 = this.onChangeTriviaOption2.bind(this);
        this.onChangeTriviaOption3 = this.onChangeTriviaOption3.bind(this);
        this.onChangeTriviaOption4 = this.onChangeTriviaOption4.bind(this);
        this.onChangeTriviaDifficulty = this.onChangeTriviaDifficulty.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
        trivia_questions: '',
        trivia_answer: '',
        trivia_option1: '',
        trivia_option2: '',
        trivia_option3: '',
        trivia_option4: '',
        trivia_difficulty: '',
        trivia_completed: false
    }
}

onChangeTriviaQuestion(e) {
    this.setState({
        trivia_question: e.target.value
    });
}

onChangeTriviaAnswer(e) {
    this.setState({
        trivia_answer: e.target.value
    });
}

onChangeTriviaOption1(e) {
    this.setState({
        trivia_option1: e.target.value
    });
}

onChangeTriviaOption2(e) {
    this.setState({
        trivia_option2: e.target.value
    });
}

onChangeTriviaOption3(e) {
    this.setState({
        trivia_option3: e.target.value
    });
}

onChangeTriviaOption4(e) {
    this.setState({
        trivia_option4: e.target.value
    });
}

onChangeTriviaDifficulty(e) {
    this.setState({
        trivia_difficulty: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Trivia Question: ${this.state.trivia_question}`);
    console.log(`Trivia Answer: ${this.state.trivia_answer}`);
    console.log(`Trivia Option 1: ${this.state.trivia_option1}`);
    console.log(`Trivia Option 2: ${this.state.trivia_option2}`);
    console.log(`Trivia Option 3: ${this.state.trivia_option3}`);
    console.log(`Trivia Option 4: ${this.state.trivia_option4}`);
    console.log(`Trivia Difficulty: ${this.state.trivia_difficulty}`);

    const newTrivia = {
        trivia_question: this.state.trivia_question,
        trivia_answer: this.state.trivia_answer,
        trivia_option1: this.state.trivia_option1,
        trivia_option2: this.state.trivia_option2,
        trivia_option3: this.state.trivia_option3,
        trivia_option4: this.state.trivia_option4,
        trivia_difficulty: this.state.trivia_difficulty,
        trivia_completed: this.state.trivia_completed
    };

    axios.post('http://localhost:4000/trivia/add', newTrivia)
        .then(res => console.log(res.data));

    this.setState({
        trivia_question: '',
        trivia_answer: '',
        trivia_option1: '',
        trivia_option2: '',
        trivia_option3: '',
        trivia_option4: '',
        trivia_difficulty: '',
        trivia_completed: false
    })
}

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Trivia Question</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Question: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.trivia_question}
                                onChange={this.onChangeTriviaQuestion}
                                />
                    </div>
                    <div className="form-group">
                        <label>Answer: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.trivia_answer}
                                onChange={this.onChangeTriviaAnswer}
                                />
                    </div>
                    <div className="form-group">
                        <label>Option 1: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.trivia_option1}
                                onChange={this.onChangeTriviaOption1}
                                />
                    </div>
                    <div className="form-group">
                        <label>Option 2: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.trivia_option2}
                                onChange={this.onChangeTriviaOption2}
                                />
                    </div>
                    <div className="form-group">
                        <label>Option 3: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.trivia_option3}
                                onChange={this.onChangeTriviaOption3}
                                />
                    </div>
                    <div className="form-group">
                        <label>Option 4: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.trivia_option4}
                                onChange={this.onChangeTriviaOption4}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="difficultyOptions" 
                                    id="difficultyPussy" 
                                    value="Pussy"
                                    checked={this.state.trivia_difficulty==='Pussy'} 
                                    onChange={this.onChangeTriviaDifficulty}
                                    />
                            <label className="form-check-label">Pussy</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="difficultyOptions" 
                                    id="difficultyToughSOB" 
                                    value="ToughSOB" 
                                    checked={this.state.trivia_difficulty==='Tough Son-of-a-Bitch'} 
                                    onChange={this.onChangeTriviaDifficulty}
                                    />
                            <label className="form-check-label">Tough Son-of-a-Bitch</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="difficultyOptions" 
                                    id="difficultyPsychMofo" 
                                    value="PsychoMofo" 
                                    checked={this.state.trivia_difficulty==='Psycho Motherfucker'} 
                                    onChange={this.onChangeTriviaDifficulty}
                                    />
                            <label className="form-check-label">Psycho Motherfucker</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Trivia" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}