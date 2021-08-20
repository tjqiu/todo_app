import React, { Component } from 'react'


class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <LoginComponent />
            </div>
        )
    }
}


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state= {
            username: 'test_username',
            password: ''
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    // handleUsernameChange(event) {
    //     this.setState(
    //         {
    //             username: event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event) {
    //     this.setState(
    //         {
    //             password: event.target.value
    //         }
    //     )
    // }

    loginClicked() {
        if (this.state.username==='test_username' && this.state.password==='test_password')
            console.log('Successful')
        else
            console.log('Failed')
    }

    render() {
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}


export default TodoApp;