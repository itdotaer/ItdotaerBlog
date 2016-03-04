/**
 * UserLogin
 */

var React = require('react');
var Reflux = require('reflux');
// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

var history = require('../history');

var NotificationActions = require('../actions/notificationActions');
var UserLoginActions = require('../actions/userLoginActions');
var HeaderActions = require('../actions/headerActions');
var UserLoginStore = require('../stores/userLoginStore');

var UserLogin = React.createClass({
    mixins: [
        Reflux.listenTo(UserLoginStore, 'login')
    ],
    getInitialState: function() {
        return {
            userName: '',
            password: ''
        };
    },
    login: function(user) {
        if (user) {
            HeaderActions.loginSuccessed(user);
        }
    },
    changeUserName: function(event) {
        this.setState({
            userName: event.target.value,
            password: this.state.password
        });
    },
    changePassword: function(event) {
        this.setState({
            userName: this.state.userName,
            password: event.target.value
        });
    },
    submit: function() {
        if (this.state.userName == '' || this.state.password == '') {
            NotificationActions.add('Error', 'User Name or Password is null!', 'error');
        } else {
            //Login
            UserLoginActions.login({
                loginName: this.state.userName,
                password: this.state.password
            });
        }
    },
    reset: function() {
        this.setState({
            userName: '',
            password: ''
        });
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3 login-panel">
                    <form className="form-horizontal">
                        <ReactRootstrap.Input type="text" label="User Name:" placeholder="User Name" labelClassName="col-md-4" wrapperClassName="col-md-8" onChange={this.changeUserName} value={this.state.userName}/>
                        <ReactRootstrap.Input type="password" label="Password:" placeholder="Password" labelClassName="col-md-4" wrapperClassName="col-md-8" onChange={this.changePassword} value={this.state.password}/>
                        <div className="row">
                            <div className="col-md-4 col-md-offset-5">
                                <input type="button" className="btn btn-info btn-padding btn-margin" value="Login" onClick={this.submit}/>
                                <input type="button" className="btn btn-warning btn-padding" value="Reset" onClick={this.reset}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = UserLogin;
