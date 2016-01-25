/**
 * UserLogin
 */
var React = require('react');
var Reflux = require('reflux');
var NotificationActions = require('../actions/notificationActions');
var UserLoginActions = require('../actions/userLoginActions');

var UserLoginStore = require('../stores/userLoginStore');

// React-Bootstrap
var ReactRootstrap = require('react-bootstrap');

var UserLogin = React.createClass({
    mixins:[Reflux.listenTo(UserLoginStore, 'loginOrLogout')],
    getInitialState: function(){
        return {
            userName: '',
            password: ''
        };
    },
    loginOrLogout: function(user){
        if(user){
            //Login
            NotificationActions.add('Successed', 'Login Successed!', 'success');
        }else{
            //Logout
            NotificationActions.add('Successed', 'Logout Successed!', 'success');
        }
    },
    changeUserName: function(event){
        this.setState({userName: event.target.value, password: this.state.password});
    },
    changePassword: function(event){
        this.setState({userName: this.state.userName, password: event.target.value});
    },
    submit: function(){
        if(this.state.userName == '' || this.state.password == ''){
            NotificationActions.add('Error', 'User Name or Password is null!', 'error');
        }else{
            //Login
            UserLoginActions.login({loginName: this.state.userName, password: this.state.password});
        }
    },
    render: function(){
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3 login-panel">
                    <form className="form-horizontal">
                        <ReactRootstrap.Input type="text" label="User Name:" placeholder="User Name" labelClassName="col-xs-2" wrapperClassName="col-xs-8" onChange={this.changeUserName}/>
                        <ReactRootstrap.Input type="password" label="Password:" placeholder="Password" labelClassName="col-xs-2" wrapperClassName="col-xs-8" onChange={this.changePassword}/>
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <input type="button" className="btn btn-info btn-padding" style={{float: "left"}} value="Login" onClick={this.submit}/>
                                <input type="reset" className="btn btn-warning btn-padding" style={{float: "right"}} value="Reset"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = UserLogin;
