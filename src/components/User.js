import React from "react";
export default class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
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