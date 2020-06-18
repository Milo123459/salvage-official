import React from "react";
export default class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            language: props.language,
            jobTitle: props.jobTitle
        }
    }
    render(){
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Language: {this.props.language}</h2>
                <p>Job Title: {this.props.jobTitle}</p>
            </div>
        )
    }
}