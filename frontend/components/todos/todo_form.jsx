import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.uniqueId(),
            title: "",
            description: "",
            status: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }

    updateDescription(e) {
        this.setState({ description: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.receiveTodo(this.state)
        this.setState({
            id: this.uniqueId(),
            title: "",
            description: "",
            status: false
        });
    }

    uniqueId() {
        return new Date().getTime();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title
                    <input 
                        type="text"
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />
                </label>
                <label>Description
                    <input 
                        type="text"
                        value={this.state.description}
                        onChange={this.updateDescription}
                    />
                </label>
                <input type="submit" value="Add Todo" />
            </form>
        )
    }
}

export default TodoForm