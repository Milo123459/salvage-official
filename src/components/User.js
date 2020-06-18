import React from "react";
export default class User extends React.Component {
    constructor(props){
        console.log(props)
    }
    render(){
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Language: JavaScript</h2>
                <p>Job Title: ReactJS Dev</p>
            </div>
        )
    }
}