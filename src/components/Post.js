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
                <h1>{this.state.name}</h1>
                <p>{this.state.content}</p>
            </div>
        )
    }
}