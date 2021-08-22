import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'


class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <Router>
                    <>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                {/*<LoginComponent />
                <WelcomeComponent/>*/}
            </div>
        )
    }
}


function ErrorComponent() {
    return <div>An Error Occured.</div>
}


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">Q</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/test_username">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}


class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2021 @Q</span>
            </footer>
        )
    }
}


class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out.</h1>
                <div className="container">
                    Thank You For Using Our Application.
                </div>
            </div>
        )
    }
}


class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn', done: false, targetDate: new Date() },
                    { id: 2, description: 'Learn', done: false, targetDate: new Date() },
                    { id: 3, description: 'Learn', done: false, targetDate: new Date() },
                    { id: 4, description: 'Learn', done: false, targetDate: new Date() }
                ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <th>{todo.id}</th>
                                        <th>{todo.description}</th>
                                        <th>{todo.done.toString()}</th>
                                        <th>{todo.targetDate.toString()}</th>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}


class WelcomeComponent extends Component {
    render() {
        return (
            <>
            <h1>Welcome!</h1>
            <div className="container">
            Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
            </div>
            </>
        )
    }
}


// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null
// }


export default TodoApp;