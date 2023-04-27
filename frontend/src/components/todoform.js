import React from 'react'

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', username: 0}
    }
    handleChange(event)
    {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
    
    handleSubmit(event) {
        this.props.createToDo(this.state.name, this.state.username)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="login">name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event)=>this.handleChange(event)} />
                </div>
            
                <div className="form-group">
                    <label for="username">username</label>
                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={(event)=>this.handleChange(event)} />
                </div>
                <input type="submit" className="btn btn-primary" value="Save" />
            </form>
        )
    }
}

export default ToDoForm