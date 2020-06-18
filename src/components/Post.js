import React from "react";
export default class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            content: props.content,
        }
    }
    render(){
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h2>Language: {this.state.language}</h2>
                <p>Job Title: {this.state.jobTitle}</p>
            </div>
        )
    }
}