import React from "react";
export default class User extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Language: {this.props.name}</h2>
                <p>Job Title: {this.props.jobTitle}</p>
            </div>
        )
    }
}