import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Trivia = props => (
    <tr>
        <td>{props.trivia.trivia_question}</td>
        <td>{props.trivia.trivia_answer}</td>
        <td>{props.trivia.trivia_option1}</td>
        <td>{props.trivia.trivia_option2}</td>
        <td>{props.trivia.trivia_option3}</td>
        <td>{props.trivia.trivia_option4}</td>
        <td>{props.trivia.trivia_difficulty}</td>
        <td>
            <Link to={"/edit/"+props.trivia._id}>Edit</Link>
        </td>
    </tr>
)

export default class TriviaList extends Component {

    constructor(props) {
        super(props);
        this.state = {trivia: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/trivia/')
            .then(response => {
                this.setState({ trivia: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    triviaList() {
        return this.state.trivia.map(function(currentTrivia, i){
            return <Trivia trivia={currentTrivia} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Trivia List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Option1</th>
                            <th>Option2</th>
                            <th>Option3</th>
                            <th>Option4</th>
                            <th>Difficulty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.triviaList() }
                    </tbody>
                </table>
            </div>
        )
    }
}